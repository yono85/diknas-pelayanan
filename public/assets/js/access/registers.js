// verification account

$(document).ready(function()
{

    $('body').on('click', '.afalse', function(e)
    {
        e.preventDefault();
    });


    function CheckToken() 
    {
        var form = $('body').find('form');


        $.ajax({
            type: "GET",
            url: config.apps.URL_API + "/api/account/verification?page=" + config.apps.LEVEL,
            headers: {
                "Content-Type":"application/json",
                "key":tokenu[1]
            },
            cache: false,
            timeout: 18000,
            dataType: "JSON",
            success: function(n)
            {
                // console.log(n);
                form.find('input[name="token"]').val(tokenu[1]);
                $('body').find('.splash-dis').remove();
            },
            error: function(n)
            {
                // console.log(n);
                var page = pageNotFound("/");
                $('body .inner-bdyverif').html(page);
                $('body').find('.splash-dis').remove();
            }
        });
    }

    CheckToken();


    $('body').on('click', 'a.btn-vpass', function(e)
    {
        e.preventDefault();

        // exe
        var cmd = $(this),
        form = cmd.parents('form'),
        pass = form.find('input.pass');

        if( cmd.attr('role') === 'off')
        {
            cmd.attr('role', 'on');
            cmd.html('Sembunyikan');
            pass.attr('type', 'text');
            form.find('input[name="password"]').focus();
        }
        else
        {
            cmd.attr('role', 'off');
            cmd.html('Tampilkan');
            pass.attr('type', 'password');
        }
    });

    $('body').on('keyup', '.tnumabj', function(e)
    {
        tnumabj($(this));
    });

    $('body').on('blur', '.tnumabj', function(e)
    {
        tnumabj($(this));
    });


    $('body').on('click', '.cmd-chechkbox', function(e)
    {
        var cmd = $(this),
        area = cmd.parents('.area-checkbox'),
        form = cmd.parents('form');

        form.find('label.error').remove();
        form.find('.br-error').removeClass('br-error');

        if( cmd.attr('role') === 'off')
        {
            cmd.attr('role', 'on');
            area.attr('role', 'on');
            area.find('input.value-checkbox').val('1');
        }
        else
        {
            cmd.attr('role', 'off');
            area.attr('role', 'off');
            area.find('input.value-checkbox').val('0');
        }
    });

    var r = function(t)
    {
        return t.trim()
    }

    $.validator.addMethod("notEqual", function(value, element, param) {
        return value === param;
    }, "Kolom harus sama dengan kolom password");

    
    $('#frm-verifReg').validate({
        rules:{
            username: {
                required:!0,
                normalizer:r,
                minlength:6,
                maxlength:12
            },
            password:{
                required:!0,
                normalizer:r,
                minlength:6
            },
            repassword:{
                required:!0,
                normalizer:r,
                minlength:6,
                notEqual: function(){return $('#frm-verifReg input[name="password"]').val()}
            },
        },
        messages:{
            username:'Harap di isi sekurangnya 6 dan maks 12 karakter',
            password:'Harap di isi sekurangnya 6 karakter',
            repassword:'Harap di isi dan kolom ini harus sama dengan kolom password',
        },
        errorPlacement:function(t,n)
        {
            // $(n).parent('.alist').append(t);
            $(n).parents('.alist').find('label.error').remove();
            $(n).parents('.alist').append(t);
        },
        submitHandler:function()
        {
            // cekCookie();
            ceking();
        }
    });


    function ceking()
    {
        var form = $('#frm-verifReg'),
        button = form.find('button.btn-sendverif');
        var exp = 365;

        if( button.attr('role') === 'off')
        {
            button.attr('role', 'on');
            form.find('label.error').remove();
            form.find('.error').removeClass('error');
            form.find('.br-error').removeClass('br-error');

            if( form.find('input[name="term"]').val() === '0' )
            {
                form.find('.area-checkbox .btn').addClass('br-error');
                form.find('.area-checkbox').append('<label class="error">Anda belum menyetujui Syarat dan Ketentuan</label>');
                button.attr('role', 'off');
                form.find('.area-checkbox .btn').focus();
                return;
            }

            $.ajax({
                type: "POST",
                url: config.apps.URL_API + form.attr('action'),
                headers: {
                    "Content-Type":"application/json",
                    "key":config.apps.API_KEY
                },
                cache: false,
                timeout: 18000,
                data: formdatasend(form),
                dataType: "JSON",
                success: function(n)
                {
                    console.log(n);
                    setCookie(config.apps.cookie_name,JSON.stringify(n.response.cookie),exp);
                    location.href = config.apps.URL + n.response.homepage;
                    // button.attr('role', 'off');
                },
                error: function(n)
                {
                    // console.log(n);
                    var response = n.responseJSON;
                    if( n.status === 403 )
                    {

                        form.find('input[name="'+response.focus+'"]').addClass('error');
                        form.find('input[name="'+response.focus+'"]').parents('.alist').append('<label class="error">'+response.message+'</label>');
                        button.attr('role','off');
                        form.find('input[name="'+response.focus+'"]').focus();
                        return;
                    }

                    var page = pageNotFound("/");
                    $('body .inner-bdyverif').html(page);
                }
            });
        }
    }

    //
    $('body').find('input.fcs1').focus();
    return false;
})