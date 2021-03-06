<!doctype html>
<html lang="id">
    <head>
        <meta charset="utf-8">

        <title>Dashboard</title>

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

        <!-- StyleSheets -->
        <link href="{{$apps['URI']}}/assets/temp/css/jquery-ui.css" rel="stylesheet" />
        <link href="{{$apps['URI']}}/assets/temp/css/bootstrap.min.css" rel="stylesheet" />
        <link href="{{$apps['URI']}}/assets/temp/css/perfect-scrollbar.css" rel="stylesheet" />

        <!-- Begin Global Structure -->
        <link href="{{$apps['URI']}}/assets/temp/css/structure.css" rel="stylesheet" />
        <link href="{{$apps['URI']}}/assets/temp/css/components.css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/font.css">
        <!-- End Global Structure -->

        <!-- Moby Icons -->
        <!-- <link href="{{$apps['URI']}}/assets/temp/css/moby.css" rel="stylesheet" /> -->
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/fonts/iconic/css/material-design-iconic-font.min.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/simple-line-icons.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/global-plugins.bundle.css">

        <!-- FontsOnline -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />

        
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/dashboard/style.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/default.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/dashboard/tables.css">

        <script src="{{$apps['URI']}}/assets/js/js10.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/global.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/dashboard/home.js" type="text/javascript"></script>

        <!-- script -->
        <script>
            var config = {
                "apps":{
                    "NAME": "{{$apps['name']}}",
                    "URI": "{{$apps['URI']}}",
                    "URL_API":  "{{$apps['URL_API']}}",
                    "COOKIE_NAME":  "{{$apps['cookie']}}"
                },
                "page":{
                    "TITLE"     :   "{{$title}}"
                }
            }
        </script>

        <!-- JavaScripts -->
        <script src="{{$apps['URI']}}/assets/js/conf.js" type="text/javascript"></script>
       
        <script>
            checkLogout();  
        </script>
    </head>

    <body>

    
        <div class="moby__aside-structure moby__theme_ui classic">

            <!-- ASIDE -->
            @include('dashboard.component.aside')

            <div class="wrapper">

                <!-- HEADER -->
                @include('dashboard.component.header')

                <!-- CONTENT -->
                @yield('content')

                <!-- Footer -->
                @include('dashboard.component.footer')
            </div>

        </div>
        
        @yield('script')

        @include('dashboard.component.media')

        <script>
            
            if( getaccount().verify === 0)
            {
                $("body").prepend('<div class="area-verify" aria-role="false"><div class="inar bck"><div class="modalx"><div class="inarx"><div class="div txt-center fsize42 ar-ic"><span class="sli_icon-clock"></span></div><div class="div inf"><p class="fsize16">Halo <span class="up-txt">'+getaccount().name+'</span>, <br> Saat ini akun Anda sedang ditinjau oleh Super-Admin untuk dilakukan verifikasi berkas.</p></div><div class="div txt-center area-btn-verify"><button class="btn orange is-loading br-rds23 cmd-check-verify" role="off"><span>Cek Verifikasi</span></button></div><div class="div"><form action="/api/account/login-verify-admin" id="form-loginx"><input type="hidden" name="email" value=""><div class="div area-login clr-float"><input type="password" name="password" placeholder="Masukan Password Anda" class=""><button role="off" class="btn green submit cmd-loginx is-loading"><span>Login</span></button></div></form></div></div></div></div></div>');

            }
        </script>
        
        <!-- AREA MODAL SHOW -->
        <div id="area-modal-show" class="fix-area-modal">
            <!-- iner modal show -->
            
            <!-- end iner modal show -->
        </div>


        <!-- Java Script -->
        <script src="{{$apps['URI']}}/assets/js/tables.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/dashboard/home.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/dashboard/dashboard.js" type="text/javascript"></script>

        <script src="{{$apps['URI']}}/assets/temp/scripts/popper.min.js"></script>
        <script src="{{$apps['URI']}}/assets/temp/scripts/bootstrap.min.js"></script>
        <script src="{{$apps['URI']}}/assets/temp/scripts/jquery-ui.min.js"></script>
        <script src="{{$apps['URI']}}/assets/temp/scripts/perfect-scrollbar.min.js"></script>
        <script src="{{$apps['URI']}}/assets/js/dashboard/dropdown-search/bootstrap-select.min.js"></script>
        <script src="{{$apps['URI']}}/assets/temp/scripts/custom.js"></script>
        <!-- End Custom Scripts -->


    </body>



</html>
