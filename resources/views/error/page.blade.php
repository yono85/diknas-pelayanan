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
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/fonts/iconic/css/material-design-iconic-font.min.css">


        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/main.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/style.css">
        
    </head>
    <body>

        	
        <div class="limiter full">
            <div class="container-login100" >
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 pt20">

                    <div class="login100-form validate-form">

                        <div class="div">
                            <!-- <div class="ic-accss">
                                <img src="{{$apps['favicon']}}" alt="logo"/>
                            </div> -->
                        </div>

                        <div class="nm-accss">
                            <div class="div">
                                <img src="{{$apps['URI']}}/assets/svg/empty.svg" alt="not found" class="img-back-not">
                            </div>
                            <div class="div ttl-er-page color-black">Opsss... {{$code}}</div>
                            <div class="div lbl">Mungkin kamu salah alamat tujuan. Ayok kembali ke tujuan yang benar.</div>
                            <div class="div">
                                <a href="{{$apps['URI']}}"><span class="zmdi zmdi-arrow-left"></span> Kembali</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </body>


</html>
