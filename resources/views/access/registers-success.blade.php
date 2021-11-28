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

        <link href="{{$apps['URI']}}/assets/css/access/plugins.bundle.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/simple-line-icons.css">

        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/main.css">
        <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/access/style.css">
        
        <script src="{{$apps['URI']}}/assets/js/js10.js" type="text/javascript"></script>
        <script src="{{$apps['URI']}}/assets/js/global.js" type="text/javascript"></script>

        <script>
            var ConfSend = {
                URL_API :   '{{$apps["URL_API"]}}',
                TOKEN   :   '{{$token}}',
                STATUS  :   '{{$config->sending}}',
                TOKEN_SENDING: "{{$config->token_sending}}"
            }
        </script>

    </head>
    <body>

        	
        <div class="limiter full">
            <div class="container-login100 registers" >
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65">

                    <div class="login100-form validate-form" style="padding-top: 20px;">

                        <div class="div">
                            <div class="ic-accss">
                                <a href="{{$apps['URI']}}" class="logo">
                                    <img src="{{$apps['favicon']}}" alt="logo"/>
                                </a>
                            </div>
                        </div>

                        <div class="div">
                            <div class="div ttl">Terimakasih, {{strtoupper($user->name)}}</div>
                            <div class="div lbl">
                                <div class="div">
                                    <span>Link verifikasi akun berhasil dikirimkan ke alamat email</span>
                                </div>
                                <span class="clr" style="width:100%; text-decoration:underline">{{$user->email}}</span></div>
                            <br>
                            <div class="div" style="padding:0px 25px; box-sizing:border-box">

                                <div class="div area-btn-resend" data-role="off" data-error="{{$config->ceklimit}}">
                                    <span class="info-true">
                                        <span>Belum menerima email?</span>
                                        <a href="#" class="link" id="cmd-resend" role="off">Kirim ulang</a>
                                        <span class="timer">Harap tunggu... <span class="limit">60</span></span>
                                    </span>
                                    <span class="info-error">
                                        <div class="di">
                                            <div class="div">
                                                <span class="info">{{$config->message}}</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>

                            </div>
                            <br>
                            <div class="div">
                                <a href="{{$apps['URI']}}/login">
                                    <span class="sli_icon-arrow-left"></span>
                                    <span>LOGIN</span>
                                </a>
                            </div>


                        </div>

                    </div>

                    <br><br>

                    <div class="acs-footer">
                            <div class="tbl">
                                <div class="intbl">
                                    <div class="div">
                                        <span>{{$apps['name']}}  {!! $apps['created_date'] !!}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

            </div>

            <form action="{{$apps['URL_API']}}/api/registers/resend-verify" id="form-resend" class="hide">

                <input type="hidden" value="{{$token}}" name="token">
                <input type="submit" class="hide" value="submit">
            </form>
        </div>

        <style>
            a.logo{
                width: 60px;
                height:60px;
            }

            a.logo img{
                width:100%;
                height: 100%;
            }
        </style>
        <script>
            $(document).ready(function()
            {

                var time = 60;
                var vstatus = 'off';
                var msg = '';
                var counter;

                function timer()
                {
                    time = time - 1;
                    if (time == 0) 
                    {
                        clearInterval(counter);
                        $('.info-error .info').html(msg);

                        if( vstatus === 'on')
                        {       
                            $('.area-btn-resend').attr('data-error', 'on');
                        }
                            $('.area-btn-resend').attr('data-role', 'off');
                    

                        $('.area-btn-resend #cmd-resend').attr('role', 'off');

                        return;
                    }

                    $('.area-btn-resend .limit').html(time);

                }

                function runtimer()
                {
                    counter = setInterval(timer, 1000);
                }


                $('#cmd-resend').click(function(e)
                {
                    e.preventDefault();

                    var cmd = $(this),
                    area = cmd.parents('.area-btn-resend');

                    if( cmd.attr('role') === 'off')
                    {
                        cmd.attr('role', 'on');

                        time = 60;
                        // area.find('.limit').html('60');
                        // area.attr('data-role', 'on');
                        // runtimer();
                        $('#form-resend').submit();
                    }

                });

                function stoprun()
                {
                    clearInterval(counter);
                    $('.area-btn-resend').attr('data-role', 'off');
                    time = 60;
                    $('.area-btn-resend').find('.limit').html('60');
                }

                // function sending()
                // {

                    
                $('#form-resend').submit(function()
                {

                    var form = $(this),
                    area = $('body').find('.area-btn-resend');


                    //buat array untuk field dalam form
                    var unindexed_array = form.serializeArray();
                    var datasend = {};

                    $.map(unindexed_array, function(n, i){
                        datasend[n['name']] = n['value'];
                    });

                    $.ajax({
                        type: 'POST',
                        url:  form.attr("action"),
                        timeout: 18000,
                        headers: {
                            "Content-Type": "application/json",
                            "key":ConfSend.TOKEN
                        },
                        data: JSON.stringify(datasend),
                        dataType: 'JSON',
                        success: function(e,n,r)
                        {
                            // $('.area-btn-resend').attr('data-error', e.response.count);

                            // console.log(e);

                            if( r.status === 200)
                            {
                            
                                // if( e.message !== '')
                                // {

                                //     $('.info-error .info').html(e.message);
                                //     $('.area-btn-resend').attr('data-error', 'on');
                                //     stoprun();
                                // }
                                // else
                                // {
                                    sendingEmail();
                                    area.find('.limit').html('60');
                                    // area.find('.limit').html('60');
                                    area.attr('data-role', 'on');
                                    runtimer();
                                // }
                                msg = e.message;
                                vstatus = e.count;
                            }


                        },
                        error: function(e)
                        {
                            console.log(e);
                            // alert(e.responseJSON.message);
                            stoprun();
                            $('.info-error .info').html(e.responseJSON.message);
                            $('.area-btn-resend').attr('data-error', 'on');
                            // console.log(e.responseJSON.message);

                        }

                    });



                    return false;
                });

                    
                // }

                function sendingEmail()
                {
                    //this sending email with token
                    var form = $('body').find('#form-send-email');


                    $.ajax({
                        type: 'POST',
                        url:  ConfSend.URL_API + '/api/send/email',
                        timeout: 18000,
                        headers: {
                            "Content-Type": "application/json",
                            "key":ConfSend.TOKEN
                        },
                        data: JSON.stringify({
                            "token":ConfSend.TOKEN_SENDING
                        }),
                        dataType:"JSON",
                        success: function(n)
                        {
                            console.log(n);
                        },
                        error: function (n)
                        {
                            var resp = n.responseJSON;

                            console.log(resp);
                        }
                    });
                }
                
                function funcFirstSending()
                {
                    if( ConfSend.STATUS === 'true')
                    {
                        sendingEmail();
                        // console.log('this sending first email');
                        return;
                    }
                }


                // SENDING EMAIL
                funcFirstSending();  

                return false;
            });
        </script>
    </body>


</html>
