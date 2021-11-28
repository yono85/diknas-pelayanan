@extends('access.main')

@section('content')
<form action="{{$apps['URL_API']}}/api/account/changedpassword" id="form-changepassword" class="login100-form validate-form">

    <div class="div">
        <div class="ic-accss">
            <a href="{{$apps['URI']}}">
                <img src="{{$apps['favicon']}}" class="fs" alt="{{$apps['name']}}"/>
            </a>
        </div>
    </div>

    <div class="nm-accss">
        <div class="div">Ubah Password Anda</div>
    </div>

    
    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" data-validate="Password is required">
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

    <div class="wrap-input100 validate-input are-hov" data-role="off" data-validate="Password is required">
        <input class="input100 fcs fcs2" tabindex="2" type="password" name="repassword" autocorrect="off" autocomplete="password" placeholder="">
        <span class="focus-input100" data-symbol="&#xf190;"></span>
        <span class="plc">Re-Password</span>
        <a href="#" class="btn-txt-r eye" tabindex="10" role="off" >
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-eye"></span>
                </div>
            </div>
        </a>
    </div>

    <div class="f-error" style="padding-top:0px;"></div>

    <div class="area-exe-btn">

        <div class="div area-load loading">
            <img src="{{$apps['URI']}}/assets/svg/loading.green.svg" alt="loading"/>
        </div>

        <div class="div inner">

            <div class="div">
                <button class="nw-button green cmd-submit" tabindex="3" role="off">Ubah Password</button>
            </div>

            <div class="div">
                <div class="bts-pg-acc">
                    <span>Atau</span>
                </div>
            </div>

            <div class="div">
                <a href="{{$apps['URI']}}/login" tabindex="5" class="nw-button empt">Masuk Akun Anda</a>
            </div>

        </div>
    </div>

    <input type="hidden" name="token" value="{{$token}}">
    
</form>

<div class="area-pwd msgbox-success">
    <div class="inner">
        <div class="tbl">
            <div class="intbl">
                <span>
                    <div class="ab">
                        <div class="div">
                            <div class="ach-pwd animate-zoom">
                                <a href="/login" class="close"role="off">
                                    <i class="zmdi zmdi-close"></i>
                                </a>
                                <div class="div">
                                    <div class="div logo">
                                        <i class="zmdi zmdi-check-circle"></i>
                                    </div>
                                    <div class="div ttl">Perubahan Password berhasil</div>
                                    <p>Anda berhasil melakukan perubahan Password, silahkan <a href="/login" style="color:blue">Login disini</a></p>
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


    var r = function(t)
    {
        return t.trim()
    }

    $.validator.addMethod("notEqual", function(value, element, param) {
        return value === param;
    }, "Kolom harus sama dengan kolom password");

    $('#form-changepassword').submit(function(e)
    {
        var form = $(this);

        form.validate(validateForm);
        form.valid();

        cekingsubmit = form.valid();

        if( cekingsubmit )
        {
            submitForm(form);
        }

    });

    var validateForm = 
    {
        rules:{
            password:{
                required:!0,
                minlength:6,
                normalizer:r,
            },
            repassword:{
                required:!0,
                normalizer:r,
                minlength:6,
                notEqual: function(){return $('#form-changepassword input[name="password"]').val()}
            },
        },
        messages:{
            password:'Password sekurangnya 6 karakter',
            repassword:'Harus sama dengan password'
        },
        errorPlacement:function(t,n)
        {
            $(n).parent('.are-hov').addClass('error');
            $(n).parent('.are-hov').removeClass('error');
            $(n).parent('.are-hov').append(t);
        }
    }

    function submitForm(form)
    {
        var form,
        button = form.find('button.cmd-submit');

        form.find('label.error').remove();
        form.find('.error').removeClass('error');

        if( button.attr('role') === 'off')
        {
            button.attr('role','on');
            form.attr('role', 'true');

            var $URL = form.attr('action');
            var $t = FormSending(form,"POST","key","",$URL);
            $t.success(function(n)
            {
                // console.log(n);
                $('body').find('.msgbox-success').show();
                form.find('input[type="text"]').val('');
                setTimeout(function(){
                    location.href = '/login';
                },1000);
            });
            $t.error(function(n)
            {
                // console.log(n);
                if(n.status === 404)
                {
                    flagnotif("error",n.responseJSON.message);
                    setTimeout(function(){
                        location.href = '/login';
                    },1000);
                }
                button.attr('role', 'off');
                flagnotif("error",n.responseJSON.message);
            });


        }

    }
    return false;
});
</script>
@endsection