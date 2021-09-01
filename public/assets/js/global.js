function selectGender(e,n)
{
    e.preventDefault();
    
    var cmd = n,
    dataid = cmd.attr('dataid'),
    role = cmd.attr('data-role'),
    area = cmd.parents('.area-gender'),
    form = cmd.parents('form');


    if( cmd.attr('role') === 'off')
    {
        area.find('.cmd-gender').attr('role', 'off');
        cmd.attr('role', 'on');
        area.attr('data-role', role);
    }

    form.find('input[name="gender"]').val(dataid);
}

function formatRupiah(angka, prefix)
{
    var number_string = parseFloat(angka).toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
}

function formatNumber(angka)
{
    var number_string = angka.toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

    return rupiah;
}


function formatRupiahKeyup(angka)
{
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    sisa     		= number_string.length % 3,
    rupiah     		= number_string.substr(0, sisa),
    ribuan     		= number_string.substr(sisa).match(/\d{3}/gi);

    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    return rupiah;
}

function tnumabjs(q)
{
    var x = q.val();
    var xy = x.replace(/[^0-9a-zA-Z' ']/g,'');
    q.val( xy );

}

function tnumabj(q)
{
    var x = q.val();
    var xy = x.replace(/[^0-9a-zA-Z']/g,'');
    q.val( xy );

}

function tnumber(q)
{
    var x = q.val();
    var xy = x.replace(/[^0-9]/g,'');
    q.val( xy );

}

function cnumber(q)
{
    var y = q.replace(/[^0-9]/g,'');
    return y;
}


function formdatasend(e)
{
    var unindexed_array = e.serializeArray();
    var datasend = {};

    $.map(unindexed_array, function(n, i){
        datasend[n['name']] = n['value'];
    });

    return JSON.stringify(datasend);
}

// e = data, t = metode (GET/POST),
// k = type header (key/auth),
// w = type bundle (form), u = URL
function FormSending(e,t,k,w,u)
{
    var $url = config.apps.URL_API +  (w === "form" ? e.attr('action') : e);
    var $url = u;
    var $key = typeof getaccount() === 'undefined' ? '' : getaccount().key;
    var $token = typeof getaccount() === 'undefined' ? '' : getToken();
    var $h = {
        "Content-Type": "application/json",
        "key": $key
    },
    $hx = {
        "Content-Type":"application/json",
        "Authorization": "Bearer " + $token
    },
    $hs = {
        "Content-Type":"application/json",
    };
    var $g = {
        type: 'GET',
        url: $url,
        headers: k === "key" ? $h : ( k === 'token' ? $hx : $hs),
        timeout: 18000,
        cache: false,
        dataType: 'JSON'
    },
    $p = {
        type: 'POST',
        url: $url,
        headers: k === "key" ? $h : ( k === 'token' ? $hx : $hs),
        timeout: 18000,
        cache: false,
        data: t === "GET" ? "" : formdatasend(e),
        dataType: 'JSON'
    };

    var $x = t === 'GET' ? $g : $p;
    var $te = $.ajax($x);

    return $te;
}



// FUNCTION PREVIEW IMG BEFORE UPLOAD  ==>

// BEFORE CHECK
function beforeUploadImg(e)
{

    if( e.attr('role') === 'off')
    {
        e.attr('role', 'on');
        checkUploadImg(e);
    }
}

// CHECK PREV IMG
function checkUploadImg(e)
{
    var cmd = e,
    area = cmd.parents('.area-img-upload'),
    file = area.find('input[name="file"]');

    file.click();

    setTimeout(function(){
        area.attr('role', 'false'); area.find('.cmd-img-upload').attr('role', 'off')}, 3000);
}


function changeUploadImg(e,el)
{

    var file = el,
    area = file.parents('.area-img-upload'),
    button = area.find('.cmd-img-upload');


    if( file.val() === '')
    {
        console.log('null');
        button.attr('role', 'off');
        area.attr('aria-upload', 'false');
        return;
    }

    // console.log(el);
    button.attr('role', 'off');
    area.attr('aria-upload', 'false');
    displayPreview(e.files[0],area);
    return;

}

var _URLt = window.URL || window.webkitURL;
function displayPreview(files,el)
{
    var img = new Image();
    fileSize = Math.round(files.size / 1024);
    
    img.onload = function ()
    {
        var width=this.width,
            height=this.height,
            imgsrc=this.src,
            imgX = this.offsetX;

        //cekimage
        cekimage(fileSize,width,height,imgsrc,imgX,el)
        // console.log(imgsrc);

    };

    img.src = _URLt.createObjectURL(files);

}

//ceking preview image
function cekimage(size,width,height,imgsrc,imgX,el)
{
    var area = el,
    file = area.find('input[name="file"]'),
    button = area.find('.cmd-img-upload');

    if( size > 1999 )
    {
        area.attr('aria-upload', 'false');
        button.attr('role', 'off');
        alert('Ukuran file maksimal 2 Mb');
    }
    else if( width < 220 && height < 220 )
    {
        area.attr('aria-upload', 'false');
        button.attr('role', 'off');
        console.log('Lebar dan tinggi sekurangnya 200 pixel');
    }
    else if( width > 2048 && height > 2048 )
    {
        area.attr('aria-upload', 'false');
        button.attr('role', 'off');
        console.log('Ukuran pixel gambar terlalu besar, maksimal 2048 pixel');
    }
    else
    {

        area.find('.img-upload').attr('src', imgsrc);
        area.attr('aria-upload', 'true');
        button.attr('role', 'off');

    }

}


// DELETE PREV IMG
function deleteUploadImg(e)
{
    var cmd = e,
    area = cmd.parents('.area-img-upload');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        area.find('input[name="file"]').val('');
        area.find('img.img-upload').attr('src', '');
        area.attr('aria-upload', 'false');
        cmd.attr('role', 'off');
    }

}




// COURIER
function calcWeightCourier(e,n,m)
{
    var weight = parseFloat(e),
    wgup = parseFloat(n),
    wgtype = m, wgt = 0,
    wg = 0, num = 0, dec = 0,
    wgbagi = wgtype === 'kg' ? 1000 : 1;

    if( wgtype === 'kg')
    {
        wg = ( weight / wgbagi );
        
        //set default 1 kg
        if( weight < wgbagi )
        {
            wg = 1;
        }
        else
        {
            //hitung
            wg = wg;
        
        }

        num = wg % 1 != 0 ? 1 : 0;
    }
    else
    {
       if( weight < 1000)
       {
           wg = 1;
       }
       else
       {
           wg = ( weight / 1000);
           
       }

       num = ( wg / 1000 ) % 1 != 0 ? 1 : 0;
    }


    if( num === 1)
    {
        dec = wg % 1;
        dec = dec;

        if( dec >= wgup )
        {
            dec = 1;

            wgt = Math.floor(wg) + 1;

        }
        else
        {
            dec = dec;
            wgt = Math.floor(wg);
        }

    }
    else
    {

        
        dec = 'x';
        wgt = wg;
    }


 
    var wgv = wgtype === 'kg' ? wgt : (wgt * 1000);

    return wgv;

    // //
    // console.log('(' + wgt + '-'+ wgup + '), ' + weight + ', ' + wg + ' ,' + num + ', ' + dec);
    // console.log(wgt + ' - ' + weight + ' : ' + wgv);


    

}



// COPY

function copyText(e,n,r)
{
    var text = e,
    type = n,
    success = r;

    var area = '<textarea id="textcopy"></textarea>';

    $('body').find('textarea#textcopy').remove();

    $('body').append(area);
    $('body').find('textarea#textcopy').val(text);

    var copyText = document.getElementById('textcopy');
    copyText.focus();

    copyText.select();
    copyText.setSelectionRange(0,999999);

    document.execCommand("copy");
    $('body').find('textarea#textcopy').remove();
    
    alert(success);

}


function pageNotFound(el)
{

    var content = '<div class="notfound"><div class="div"><div class="div"><img src="'+config.apps.URL+'/assets/svg/empty.svg" alt=""></div><div class="div"><h1>Waduh, yang kamu tuju tidak ditemukan!</h1></div><div class="div"><span class="label">Mungkin kamu salah alamat tujuan. Ayok kembali ke tujuan yang benar.</span></div><div class="div"><a href="'+el+'" class="btnb bc-green w210"><span>Kembali</span></a></div></div></div>';

    return content;
}

function replacequot(e)
{
    return JSON.parse( e.replace(/&quot;/g,'"') );

}

// last segment
function lastSegmen()
{
    var url = window.location.href.replace(/\/$/, '');  /* remove optional end / */ 
    var lastSeg = url.substr(url.lastIndexOf('/') + 1);
    
    console.log(lastSeg);
}



function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



// dropdwon src new
function dropdownNew(n)
{

    var button = n,
    area = button.parent('.area-ddwn');

    if( button.attr('role') === 'off')
    {
        button.attr('role', 'on');
        area.addClass('open');
        area.find('.ddwn-tsrc').val('');
        
        // area.find('.ddwn-tsrc').val('xxx');
        area.find('ul li').removeClass('hide');
        setTimeout(function(){
            area.find('.inhd').addClass('br-green-f');
            // area.find('.ddwn-tsrc').val('');
            area.find('.ddwn-tsrc').focus();
        }, 200);
        
    }
    else
    {
        button.attr('role', 'off');
        area.removeClass('open');
        area.find('.inhd').removeClass('br-green-f');
    }

}

function selectedDDWN(n)
{
    var button = n,
    li = button.parent('li'),
    area = button.parents('.area-ddwn'),
    cmd = area.find('button.cddwn');

    if( button.attr('role') === 'off')
    {
        button.attr('role', 'on');
        
        area.find('ul li').attr('aria-selected','false');
        li.attr('aria-selected','true');
        area.find('input.value-dropdown').val(button.attr('dataid'));
        cmd.find('span').html(button.find('span').html());
        area.find('label.error').remove();
        area.find('span.error').remove();
        area.find('.br-error').removeClass('br-error');
        cmd.click();
        button.attr('role', 'off');
    }
}

function srcDDWN(n)
{
    var txt = n,
    area = n.parents('.area-ddwn'),
    text = txt.val().toLowerCase();

    area.find('ul li').attr('aria-selected','false');

    
    if( $.trim(txt.val()) < 1 )
    {
        area.find('ul li').removeClass('hide');
    }

    if( $.trim( txt.val() ) !== "" )
    {

        area.find('ul li').addClass('hide');
        area.find('ul li').filter(function()
        {
            return $(this).find('button span').text().toLowerCase().indexOf(text) !== -1;

        }).removeClass('hide');
    }
}


function splashDisplayIcon()
{
    var content = '<div class="splash-dis wth"><div class="tbl"><div class="intbl txt-center"><div class="div"><div class="logo-ctr"></div><div class="div"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div></div></div></div></div>';
    
    $('body').find('.splash-dis').remove();
    $('body').append(content);
}

function vspassword(e)
{
    var cmd = e,
    form = cmd.parents('form');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        cmd.html('Sembunyikan');
        form.find('input.password').attr('type', 'text');
        form.find('input.password').eq(0).focus();
    }
    else
    {
        cmd.attr('role', 'off');
        cmd.html('Tampilkan');
        form.find('input.password').attr('type', 'password');
    }
    // form.find('input.password')
    return false;
}

// change Date
function changeDate(start,end)
{

    if( start !== '')
    {
        var xstart = start.split('/'),
        startDate = xstart[2] + '-' + xstart[1] + '-' + xstart[0];
    }
    else
    {
        startDate = '';
    }

    if( end !== '')
    {
        var xend = end.split('/');
        endDate = xend[2] + '-' + xend[1] + '-' + xend[0];
    }
    else
    {
        endDate = '';
    }

    if( start !== '' & end !== '')
    {
        $('body').find('.label-this-date').html( '<span class="fsize12">'+start + '-' +end + '</span>');
        return startDate + '_' + endDate;
    }
    else
    {
        $('body').find('.label-this-date').html('Hari ini');
        return '';
    }
}

// MESSAGE NOTIF
function flagnotif(e,m)
{
    var type = {
        'success' : '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-success animated fadeInDown" role="alert" data-notify-position="top-right" style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; right: 20px; animation-iteration-count: 1;"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span><span class="sli_icon-check"></span> <span data-notify="message">'+m+'</span><a href="#" target="_blank" data-notify="url"></a></div>',
        //
        'error' : '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-danger animated fadeInDown alert-error" role="alert" data-notify-position="top-right" style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; right: 20px; animation-iteration-count: 1;"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span class="flaticon-danger"></span> <span data-notify="message">'+m+'</span><a href="#" target="_blank" data-notify="url"></a></div>'
    }


    $('body').append(type[e]);
    fadeoutflag();
}

// OUT MESSAGE NOTIF
function fadeoutflag()
{
    $('body').find('div.alert').fadeOut(5000, function()
    {
        $('body').find('div.alert').remove();
    })
}

$('body').on('click', 'div.alert button.close', function(e)
{
    $(this).parents('.alert').remove();
});



// document click
$(document).click(function()
{

    $('body').on('click', '.area-ddwn.keep', function(e)
    {
        e.stopPropagation();
    });
    
    $('button.cddwn[role="on"]').click();

});