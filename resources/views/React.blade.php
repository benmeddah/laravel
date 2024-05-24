    <!DOCTYPE html>
    <html>
    <head>
        <title>Laravel React</title>
        @vite('resources/css/app.css')
    </head>
    <body>
        <form >
            @csrf 
        </form>
        <script>
            const fromBackend = <?php echo $fromBackend ?>
        </script>
        <div id="app"></div>
        @viteReactRefresh
        @vite('resources/js/react/main.jsx')
    </body>
    </html>