#!/bin/sh
# Container boot: resolve APP_KEY, migrate the SQLite DB, warm Laravel caches.
# Single container + SQLite, so migrating on boot can't race another replica.
set -eu

STATE_DIR=/var/lib/memewall
mkdir -p "$STATE_DIR"

# APP_KEY only needs to be strong and stable across redeploys. Unless one is
# injected, mint it once onto the state volume next to the DB it protects.
if [ -z "${APP_KEY:-}" ]; then
    if [ ! -f "$STATE_DIR/app_key" ]; then
        (umask 077 && echo "base64:$(head -c 32 /dev/urandom | base64)" > "$STATE_DIR/app_key")
    fi
    APP_KEY="$(cat "$STATE_DIR/app_key")"
    export APP_KEY
fi

[ -f "$DB_DATABASE" ] || touch "$DB_DATABASE"

php artisan migrate --force --no-interaction
php artisan optimize

exec "$@"
