

$(document).ready(function()
{

    

    //
    $('.fcs').focus(function(e){
        var text = $(this),
        area = text.parents('.are-hov');


        area.attr('data-role', 'on');
        
    });


    $('.fcs').blur(function(e)
    {
        var text = $(this),
        area = text.parents('.are-hov');

        if( $.trim( text.val() ).length === 0 )
        {
            area.attr('data-role', 'off');
        }
        else
        {
            area.attr('data-role', 'on');
        }
    });

    //validate
    $("body").on("keyup", ".fcs", function()
    {
        var text = $(this),
        area = text.parent("div"),
        form = text.parents("form"),
        type = form.find('input[name="type"]').val(),
        email = form.find("input[name='email']");
        
        area.find(".btn-txt-r").hide();
        
        form.find('.fcs').removeClass('txt-error-s');
        text.parents('.error').removeClass('error');
        // form.find('.f-error').css({'display':'none'});

        //
        if( type === 'changepassword')
        {  
            var password = form.find('input[name="password"]'),
            repassword = form.find('input[name="repassword"]');

            if( $.trim(password.val()).length < 8 )
            {
                password.parent('.are-hov').addClass('error');
                password.parent('.are-hov').find('.label-error').html('Password sekurangnya 8 karakter');
                return;
            }
            else if( $.trim(repassword.val() ) !== $.trim(password.val()) )
            {
                repassword.parent('.are-hov').addClass('error');
                repassword.parent('.are-hov').find('.label-error').html('Re-Password harus sama dangan Password');
                return;
            }
            else
            {
                return;
            }
            // console.log('change');
            // return;
        }

        // if( $.trim( text.val() ) !== '' && validateEmail(email.val()) )
        // {

        //     area.find(".btn-txt-r").show();
        // }
        // else
        // {
        //     form.find("button").attr("disabled", "disabled");
        // }

    });

    //clear
    $("body").on("click", "a[class*='clear']", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        area = cmd.parent("div"),
        form = cmd.parents("form"),
        text = area.find("input[class*='fcs']");

        if( cmd.attr("role") === "off" )
        {
            cmd.attr("role", "on");
            form.find('.fcs').removeClass('txt-error');
            form.find('.f-error').css({'display':'none'});
            form.find('.fcs').val("");
            form.find('.are-hov').attr('data-role', 'off');
            // text.focus();
            cmd.hide();
            form.find('.btn-txt-r').hide();
            form.find("button").attr("disabled", "disabled");
            form.find("button").attr("role", "off");
            cmd.attr("role", "off");
            form.find('.fcs1').focus();
            form.find('input[name="password"]').attr('type','password');
            
        }

    });

    //keyup password
    $("body").on("keyup", "input[name='password']", function()
    {
        var text = $(this),
        area = text.parent("div"),
        a = area.find("a[class*='eye']");

        if( $.trim(text.val() ) === '' )
        {
            a.attr("role", "off");
            a.removeClass("focus");
            text.attr("type", "password");
            
        }
    });


    $("body").on("keyup", "input[name='repassword']", function()
    {
        var text = $(this),
        area = text.parent("div"),
        form = text.parents('form'),
        a = area.find("a[class*='eye']");

        if( $.trim( form.find('input[name="password"]').val() ) !== '' && $.trim( form.find('input[name="repassword"]').val() ) !== '')
        {
            a.show();
        }
        else
        {
            form.find('input[name="password"]').attr('type', 'password');
            form.find('input[name="repassword"]').attr('type', 'password');
            a.hide();
            a.attr('role', 'off');
        }

    });

    //eye
    $("body").on("click", "a[class*='eye']", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        form = cmd.parents("form"),
        area = cmd.parent("div"),
        text = form.find("input[name='password']"),
        text2 = form.find("input[name='repassword']");

        if( cmd.attr("role") === "off" )
        {
            cmd.attr("role", "on");
            cmd.addClass("focus");
            text.attr('type', 'text');
            text2.attr('type', 'text');
            area.find("input").focus();
            
        }
        else
        {
            cmd.attr("role", "off");
            cmd.removeClass("focus");
            text.attr('type', 'password');
            text2.attr('type', 'password');
            area.find("input").focus();
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('body').on('submit', 'form', function(){
        return false;
    });

    // $('body').find('.fcs1').focus();
    return false;
});
