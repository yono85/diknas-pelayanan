<!doctype html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <title>{{$title}}</title>

        <!-- meta -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Description"> 
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="google" content="notranslate" />

        <!-- icon -->
        <link rel="icon" href="{{$apps['favicon']}}" sizes="32x32">
        <link rel="icon" href="{{$apps['favicon']}}" sizes="192x192">
        <link rel="apple-touch-icon-precomposed" href="{{$apps['favicon']}}">
        <meta name="msapplication-TileImage" content="{{$apps['favicon']}}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- style -->
        <link href="{{$apps['URI']}}/assets/css/access/plugins.bundle.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/bootstrap/bootstrap.min.css">

        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/fonts/iconic/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/global-plugins.bundle.css">

        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/util.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/main.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/style.css">

        <!-- script -->
        <script>
            var config = {
                "apps":{
                    "NAME": "{{$apps['name']}}",
                    "URI":  "{{$apps['URI']}}",
                    "URL_API":  "{{$apps['URL_API']}}",
                    "COOKIE_NAME":  "{{$apps['cookie']}}"
                },
                "page":{
                    "TITLE"     :   "{{$title}}"
                }
            }
        </script>

        <script src="{{$apps['URI']}}/assets/js/js10.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/global.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/conf.js" type="text/javascript"></script>

        <script>
            checkLogin();
        </script>
    </head>

    <body>
        front
    </body>

</html>
