@extends('access.main')

@section('content')
<form action="{{$apps['URL_API']}}/api/forgetpassword" id="form-resetpassword" class="login100-form validate-form">

    <div class="div">
        <div class="ic-accss">
            <a href="{{$apps['URI']}}/">
                <img src="{{$apps['favicon']}}" alt="{{$apps['name']}}" class="fs"/>
            </a>
        </div>
    </div>

    <div class="nm-accss">
        <div class="div">Lupa Password?</div>
        <div class="div lbl">Masukan alamat email yang terpaut dengan {{$apps['name']}}</div>
    </div>

    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" autocorrect="off" data-validate = "Username is reauired">
        <input class="input100 fcs fcs1" tabindex="1" type="text" name="email" placeholder="">
        <span class="ic-reff-access flaticon-mail-1"></span>
        <span class="plc">Email</span>
        <a href="#" class="btn-txt-r clear" tabindex="9" role="off">
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-close-circle-o"></span>
                </div>
            </div>
        </a>
    </div>

    <div class="f-error" style="padding-top:5px;"></div>

        <div class="area-exe-btn">

            <div class="div area-load loading">
                <img src="{{$apps['URI']}}/assets/svg/loading.green.svg" alt="loading"/>
            </div>

            <div class="div inner">

                <div class="div">
                    <button class="nw-button green cmd-submit" role="off" tabindex="2" >Kirim</button>
                </div>

                <div class="div">
                    <div class="bts-pg-acc">
                        <span>Atau</span>
                    </div>
                </div>

                <div class="div">

                    <a href="{{$apps['URI']}}/login" tabindex="3" class="afalse nw-button empt" >Masuk akun Anda</a>

                </div>

            </div>
        </div>

</form>

<div class="area-pwd msgbox-success">
    <div class="inner">
        <div class="tbl">
            <div class="intbl">
                <span>
                    <div class="ab">
                        <div class="div">
                            <div class="ach-pwd animate-zoom">
                                <a href="#" class="close"role="off">
                                    <i class="zmdi zmdi-close"></i>
                                </a>
                                <div class="div">
                                    <div class="div logo">
                                        <i class="zmdi zmdi-check-circle"></i>
                                    </div>
                                    <div class="div ttl">Periksa kotak masuk email Anda</div>
                                    <p>Informasi perubahan Password berhasil kami kirimkan ke alamat email <b class="lbl-email">email@gmail.com</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div class="bck"></div>
</div>

<script>
$(document).ready(function()
{
    $('#form-resetpassword').submit(function(e)
    {
        e.preventDefault();
        var form = $(this);

        form.validate(validateProduct);
        form.valid();

        cekingsubmit = form.valid();
        if( cekingsubmit )
        {
            submitForm(form);
        }

    });


    var validateProduct = 
    {
        rules:{
            email:{
                required:!0,
                customemail:!0
            }
        },
        messages:{
            email:'Isikan alamat email valid'
        },
        errorPlacement:function(t,n)
        {
            $(n).parent('.are-hov').addClass('error');
            $(n).parent('.are-hov').append(t);
        }
    }


    function submitForm(form)
    {
        var form,
        button = form.find('button.cmd-submit'),
        formsend = $('body').find('#form-sendmail-resetpass');

        form.find('label.error').remove();
        form.find('.error').removeClass('error');

        if( button.attr('role') === 'off')
        {
            button.attr('role', 'on');
            form.attr('role', 'true');

            var $URL = form.attr('action');
            var $t = FormSending(form,"POST","","",$URL);

            $t.success(function(n)
            {
                console.log(n);
                button.attr('role', 'off');
                form.attr('role', 'false');

                $('body').find('.msgbox-success .lbl-email').html(form.find('input[name="email"]').val());
                form.find('input[name="email"]').val('');
                form.find('input[name="email"]').parent('.are-hov').attr('role', 'off');
                $('body').find('.msgbox-success').show();
                sendingEmail(n.response.token);


            });
            $t.error(function(n)
            {
                var resp = n.responseJSON;
                // console.log(resp);
                if(n.status === 500 || n.status === 401)
                {
                    //
                    button.attr('role', 'off');
                    form.attr('role', 'false');
                    flagnotif('error', resp.message);
                    return;
                }

                form.find('*[name="'+resp.focus+'"]').addClass('error');
                form.find('*[name="'+resp.focus+'"]').parent('div').addClass('error');
                form.find('*[name="'+resp.focus+'"]').parent('div').append('<label class="error">'+resp.message+'</label>');
                button.attr('role', 'off');
                form.attr('role', 'false');
                form.find('*[name="'+resp.focus+'"]').focus();
            });
        }
    }


    $('body').find('.msgbox-success a.close').click(function(e)
    {
        e.preventDefault();
        if($(this).attr('role') === 'off')
        {
            $(this).attr('role', 'on');
            $(this).parents('.msgbox-success').hide();
            $(this).attr('role', 'off');
        }
    })

    function sendingEmail(e)
    {
        var token = e;
        var $URL = config.apps.URL_API + '/api/send/email';
        $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/send/email',
        timeout: 18000,
        headers: {
            "Content-Type": "application/json",
            "key":config.apps.TOKEN_KEY
        },
        data: JSON.stringify({
            "token":token
        }),
        dataType: 'JSON',
        success: function(n)
        {
            console.log(n);
        },
        error: function (n)
        {
            var resp = n.responseJSON;

            console.log(resp.message);
        }
    });
    }
    return false;
});
</script>
@endsection