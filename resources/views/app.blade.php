<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <meta name="description" content="Memewall - A place to manage and display your favorite memes. Built with Laravel, React, and Tailwind CSS.">
        <meta name="author" content="Fakhriddin Umarov">
        <meta name="keywords" content="memes, laravel, react, memewall, meme manager">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://memewall.fumarov.me/">
        <meta property="og:title" content="Memewall - Meme Management Platform">
        <meta property="og:description" content="Manage and display your memes with ease using Memewall.">
        <meta property="og:image" content="https://memewall.fumarov.me/assets/home-page-banner.png">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://memewall.fumarov.me/">
        <meta property="twitter:title" content="Memewall - Meme Management Platform">
        <meta property="twitter:description" content="Manage and display your memes with ease using Memewall.">
        <meta property="twitter:image" content="https://memewall.fumarov.me/assets/home-page-banner.png">

        <link rel="icon" href="https://fav.farm/%F0%9F%98%8E" sizes="any">
{{--        <link rel="icon" href="/favicon.svg" type="image/svg+xml">--}}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased min-h-screen">
        @inertia
    </body>
</html>
