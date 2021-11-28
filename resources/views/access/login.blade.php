@extends('access.main')

@section('content')
<form action="{{$apps['URL_API']}}/api/login" id="form-login" class="login100-form validate-form" role="false">

    <div class="div">
        <div class="ic-accss">
            <a href="{{$apps['URI']}}">
                <img src="{{$apps['favicon']}}" class="fs" alt="{{$apps['name']}}"/>
            </a>
        </div>
    </div>

    <div class="nm-accss">
        <div class="div">Masuk dengan akun Anda</div>
    </div>

    
    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" data-validate = "Email is reauired">
        <input class="input100 fcs fcs1" tabindex="1" type="text" name="email" autocorrect="off" autocomplete="email" placeholder="">
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

    <div class="wrap-input100 validate-input are-hov" data-role="off" data-validate="Password is required">
        <input class="input100 fcs fcs2" tabindex="2" type="password" name="password" autocorrect="off" autocomplete="password" placeholder="">
        <span class="focus-input100" data-symbol="&#xf190;"></span>
        <span class="plc">Password</span>
        <a href="#" class="btn-txt-r eye" tabindex="10" role="off" >
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-eye"></span>
                </div>
            </div>
        </a>
    </div>

    <div class="div area-chk">
        <a href="#" role="on" class="cmd-keeplogin">
            <div class="span a-ic">
                <span class="in"></span>
                <span class="ic fas fa-check"></span>
            </div>
            <span>Tetap masuk</span>
        </a>
    </div>
    
    <div class="f-error"></div>

    <div class="area-exe-btn">

        <div class="div area-load loading">
            <img src="{{$apps['URI']}}/assets/svg/loading.green.svg" alt="loading"/>
        </div>

        <div class="div inner">

            <div class="div">
                <button class="nw-button green cmd-submit" tabindex="3" role="off">Login</button>
            </div>

            <div class="div">
                <a href="{{$apps['URI']}}/registers" tabindex="4" class="nw-button mg-b0">Buat Akun Baru</a>
            </div>

            <div class="div">
                <div class="bts-pg-acc">
                    <span>Atau</span>
                </div>
            </div>

            <div class="div">
                <a href="{{$apps['URI']}}/forgetpassword" tabindex="5" class="nw-button empt">Lupa Kata Sandi?</a>
            </div>

        </div>
    </div>

    <input type="hidden" value="1" name="keeplogin" >    
</form>


<script>
$(document).ready(function()
{
    $('#form-login').submit(function(e)
    {
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
            },
            password:{
                required:!0,
                minlength:6,
                normalizer:r,
            }
        },
        messages:{
            email:'Isikan alamat email valid',
            password:'Password sekurangnya 6 karakter'
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
        keeplogin = parseFloat(form.find('input[name="keeplogin"]').val());

        form.find('label.error').remove();
        form.find('.error').removeClass('error');

        var exp = keeplogin === 1 ? 365 : 1 ;

        if( button.attr('role') === 'off')
        {
            button.attr('role', 'on');
            form.attr('role', 'true');

            var $URL = form.attr('action');
            var $t = FormSending(form,"POST","","",$URL);

            $t.success(function(n)
            {

                // console.log(n);
                setCookie(config.apps.COOKIE_NAME,JSON.stringify(n.response),exp);
                location.href = "/dashboard";
            });
            $t.error(function(n)
            {
                var resp = n.responseJSON;
                console.log(resp);
                if(n.status === 500 || n.status === 401 )
                {
                    //
                    flagnotif('error', resp.message);
                    button.attr('role', 'off');
                    form.attr('role', 'false');
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


    $('.cmd-keeplogin').click(function(e)
    {
        e.preventDefault();

        var cmd = $(this),
        form = cmd.parents('form');

        cmd.attr('role') === 'off' ? cmd.attr('role', 'on'): cmd.attr('role', 'off');
        //
        var val = cmd.attr('role') === 'on' ? '1' : '0';
        form.find('input[name="keeplogin"]').val( val );
    });

    return false;
});
</script>
@endsection