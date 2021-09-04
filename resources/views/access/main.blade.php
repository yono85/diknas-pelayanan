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
            }
        }

        </script>
        <script src="{{$apps['URI']}}/assets/js/js10.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/conf.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/global.js" type="text/javascript"></script>
    </head>

    <body>
        <div class="ar-access">
            
            <div class="inr-acs">
            
                <div class="in-box-acs clr-float">
                    

                    <!-- sampul -->
                    <div class="ar-sampul">
                        <div class="inar-sampul">
                            <div class="box-sampul">

                                <div class="div">
                                    <div class="div">
                                        <a href="{{$apps['URI']}}">
                                            <img src="{{$apps['logo']}}" alt="image" style="width:52px">
                                        </a>
                                    </div>
                                    <div class="div text-sampul">
                                        <span>Selamat Datang di {{$apps['name']}}</span>
                                        <div class="div text-label">
                                        <span>Saat ini Warga Pendidikan bisa mengajukan pelayanan berbasis online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- login  signup repassword area -->
                    <div class="limiter">
                        <div class="container-login100" >
                            <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 pd-t30">
    
                                @yield('content')
    
                            </div>
                            <div class="acs-footer">
                                <div class="tbl">
                                    <div class="intbl">
                                        <div class="div">
                                            <span> {{$apps['name']}}  {!! $apps['created_date'] !!}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                

            </div>

        </div>
        

    </body>

<script src="{{$apps['URI']}}/assets/js/access/jscript.js" type="text/javascript"></script>

<script src="{{$apps['URI']}}/assets/js/jquery-1.12.4.min.js"></script>
<script src="{{$apps['URI']}}/assets/js/dashboard/jquery.validate.js"></script>
<script src="{{$apps['URI']}}/assets/js/validate-custome.js"></script>
<!-- <script src="{{$apps['URI']}}/assets/js/access/animate.js" type="text/javascript"></script> -->


@yield('script')
</html>
