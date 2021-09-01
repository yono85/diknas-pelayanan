// form function
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': config.apps.X_CSRF_TOKEN
    }
});

var currentURL = (document.URL),
partURL = currentURL.split("/")[3],
partURL = partURL.split('?'),
partURL = partURL[0],
blockPage = ['','login','signup','forgetpassword','resetpassword'];
pageIn = ['dashboard'];

function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000) );
    // d.setTime(d.getTime() + (exdays*60*1000) );
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) 
        {
            // JSON.parse(e, true);
            return JSON.parse(c.substring(name.length, c.length));
        
        // return decodedCookie;
        }
    }

    return "";
}


// check login
function checkLogin()
{

    var token = getCookie(config.apps.cookie_name);
    // document.title = config.apps.name;
    document.title = config.page.title;

    if (token !== "" && $.inArray(partURL,blockPage) >= 0)
    {
        location.href = '/dashboard';
        // document.title = config.apps.name;
        
    }

}


function checkLogout()
{
    var token=getCookie(config.apps.cookie_name);
    document.title = config.page.title;

    if (token === "" && $.inArray(partURL,pageIn) >= 0)
    {
        deleteCookies();
        location.href = config.apps.URL + '/login';

    }

}



function deleteCookies()
{ 
    var d = new Date();
    d.setTime(d.getTime() + 0);
    var expires = "expires=" + d.toGMTString();

    //
    document.cookie = config.apps.cookie_name + "=;" + expires + ";path=/";
}


function infologin(e)
{

    // console.log(e);
    
    var response = e; //JSON.parse(e, true);
    $('#account-image').attr('src', response.account.image);
    $('#account-logout').attr('href', config.apps.URL_API + '/api/logout?token=' + response.token);
    $('#account-name span').html(response.account.name);
    $('#account-username span').html(response.account.username);
}


function getaccount()
{

    var cookie = getCookie(config.apps.cookie_name);

    return cookie.account;
}

// get token
function getToken()
{

    if( getCookie(config.apps.cookie_name) !== "" )
    {
        var token = getCookie(config.apps.cookie_name);
        return token.token;
    }

    return "";
}


// session login
function setsessionlogin()
{
    var token = getToken();
    deleteCookies();
    $.ajax({
        type: 'POST',
        url:  config.apps.URL + '/createsessionlogin',
        timeout: 18000,
        data:{
            'token':token
        },
        dataType: 'JSON',
        success: function(e)
        {
            location.href = config.apps.URL + e.response
            // console.log(e);
        },
        error: function(e)
        {
            console.log(e);
        }

    });
}


function refreshCookie(e)
{

    if( getToken() !== e.refresh.token)
    {
        // console.log(e.refresh);
        deleteCookies();
        setCookie(config.apps.cookie_name,JSON.stringify(e.refresh),1);
        infologin(e.refresh);
    }

}

function UpdateCookie(e)
{
    deleteCookies();
    setCookie(config.apps.cookie_name,JSON.stringify(e.refresh),1);
    infologin(e.refresh);
}


function getRefreshCookie(e)
{
    $.ajax({
        type:"GET",
        url: config.apps.URL_API + '/api/account/refreshtoken',
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer " + e
        },
        cache: false,
        timeout:18000,
        success: function(n)
        {
            
            // console.log(n.refresh.token);
            // var response = n.refresh;
            // console.log(response.refresh.token);
            refreshCookie(n);



        },
        error: function(n)
        {
            // console.log(n);
            // deleteCookies();
            // location.href = config.apps.URL + '/login';

            setsessionlogin();
        }
    });

}

var r = function(t)
{
    return t.trim()
}

