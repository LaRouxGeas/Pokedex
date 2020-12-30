<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Pokedex</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app" class="min-h-screen bg-red-600">
            <h1 class="text-center text-white text-3xl py-5">Pokédex</h1>
            <div class="container mx-auto bg-gray-300 mt-5 rounded-lg">
                <router-view></router-view>
            </div>
        </div>

        <script src="/js/app.js"></script>
    </body>
</html>
