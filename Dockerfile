# syntax=docker/dockerfile:1
###############################################################################
# Production image for Memewall. FrankenPHP (Caddy + PHP in one binary) serves
# the app over plain HTTP on :8080; TLS is terminated by the edge proxy.
#
# The runtime holds the PHP app, a --no-dev vendor and the compiled
# public/build — no frontend sources, node_modules, tests or tooling configs.
# State (SQLite DB + the auto-generated APP_KEY) lives on a volume at
# /var/lib/memewall; see docker/entrypoint.sh.
###############################################################################

# ---- build: PHP deps + compiled frontend assets ----------------------------
# Built on the PHP image because the Wayfinder Vite plugin shells out to
# `php artisan wayfinder:generate` during `vite build`.
FROM dunglas/frankenphp:php8.4 AS build

RUN apt-get update && apt-get install -y --no-install-recommends git unzip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY --from=node:22-bookworm-slim /usr/local/bin/node /usr/local/bin/node
COPY --from=node:22-bookworm-slim /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && npm install -g pnpm@10

WORKDIR /app

# Throwaway key so artisan can boot for codegen; the real one is never baked in.
ENV APP_ENV=production \
    APP_KEY=base64:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=

COPY composer.json composer.lock ./
RUN composer install --no-interaction --no-scripts --no-autoloader --prefer-dist

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build assets, prune vendor to --no-dev, then drop everything the runtime
# doesn't execute (Vite resolves pages through public/build/manifest.json, so
# resources/js is not needed once compiled). The prune runs --no-scripts (Laravel's
# uninstall hook would boot against the dev provider cache and crash on the
# removed dev providers), so drop that cache and re-discover explicitly.
COPY . .
RUN composer dump-autoload --optimize \
    && pnpm run build \
    && composer install --no-dev --no-interaction --no-scripts --optimize-autoloader \
    && rm -f bootstrap/cache/*.php \
    && php artisan package:discover \
    && rm -rf node_modules tests resources/js resources/css \
        package.json pnpm-lock.yaml vite.config.ts tsconfig.json eslint.config.js \
        components.json phpunit.xml .prettierrc .prettierignore .editorconfig \
        .env.example .gitattributes .gitignore .dockerignore README.md \
        docker Dockerfile compose.prod.yaml

# ---- runtime ----------------------------------------------------------------
FROM dunglas/frankenphp:php8.4-alpine AS runtime

RUN install-php-extensions opcache

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    DB_CONNECTION=sqlite \
    DB_DATABASE=/var/lib/memewall/database.sqlite

WORKDIR /app
COPY --from=build /app /app
COPY docker/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint && mkdir -p /var/lib/memewall

VOLUME /var/lib/memewall
EXPOSE 8080

ENTRYPOINT ["entrypoint"]
CMD ["frankenphp", "php-server", "--listen", ":8080", "--root", "/app/public"]
