
// info login account
infologin( getCookie(config.apps.COOKIE_NAME) );

$(document).ready(function()
{

    //logout
    $("body").on("click", ".account-signout", function(e)
    {
        e.preventDefault();
        // var token = $(this).attr('href').split("token=");

        // logout(token);

        callLogout();
       
    });

    $("#account-logout").click(function(e)
    {
        e.preventDefault();
        // var token = $(this).attr('href').split("token=");

        // logout(token);

        callLogout();
       
    });





    return false;
});



// logout
function callLogout()
{
    
    var token = getCookie(config.apps.COOKIE_NAME).token;

    // console.log(token[1]);
    $.ajax({
    type: 'POST',
    url:  config.apps.URL_API + '/api/logout',
    timeout: 18000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    data: JSON.stringify({"token":token}),
    dataType: 'JSON',
    success: function(e,n,r)
    {

        if( r.status === 200)
        {
            // console.log(e.response.redirect);
            deleteCookies();
            location.href = e.response.redirect;
        }

        // console.log(e);

    },
    error: function(e)
    {

        console.log(e);
        deleteCookies();
        location.href = config.apps.URL + e.responseJSON.response.redirect;
    }

});
}


// ============> FUNCTION FOR TABLE 

function splashtable()
{
    var area = $('.area-table'),
    body = area.find('.table-body'),
    footer = area.find('.table-footer');


    body.html('');
    var li = '';

    //
    for(i=1;i<config.table.splash_max;i++)
    {

        li += '<div class="tr splash">';
        li += '<div class="thr"><div class="div clr-float"><div class="spc load splash-tbl"></div><div class="spc load splash-tbl"></div><div class="spcr load splash-tbl"></div></div></div>';

        li += '<div class="tbody">';
            
        li +=' <table><tbody><tr>';
        
        li += '<td><div class="td-iner"><div class="div"><div class="div"><div class="load w210 splash-tbl"></div></div><div class="div"><div class="load splash-tbl"></div></div></div></div></td>';

        li += '<td class="td-w260 wh-m-520"><div class="td-iner"><div class="div"><div class="load splash-tbl"></div></div></div></td>';

        li +='<td class="td-right td-w100"><div class="td-iner"><div class="div"><span class="load w70 splash-tbl"></span></div></div></td>';
        
        li += '</tr></tbody></table>';

        li += '</div></div>';

    }

    body.html(li);
    // footer.find('.value').html('0');

    // footer.find('button').attr('disabled','disabled');
    

}












//table empty
function tableempty(e)
{
    var li = '<div class="tr empty"><div class="tbody"><div class="div"><div class="div"><span class="icon flaticon2-warning"></span></div><div class="div">'+e+'</div></div></div></div>';

    return li;
}


// paging single button
function callpaging(e)
{

    var table = $('.area-table'),
    formtable = $('#form-table'),
    paging = parseFloat( formtable.find('input[name="paging"]').val() );

    //next
    if( e === 'next')
    {

        if( paging < config.table.countpage )
        {
            paging += 1;
            $('#form-table input[name="paging"]').val(paging)

            formtable.submit();

        }
        
        if( paging > 1 )
        {
            $('.cmd-paging[data-area="back"]').removeAttr("disabled");
        }

    }
    else
    {
        if( paging > 1)
        {
            paging -= 1;
            $('#form-table input[name="paging"]').val(paging);
            formtable.submit();

        }

        if( paging === 1 )
        {
            $('.cmd-paging[data-area="back"]').attr("disabled", "disabled");
        }
        if( paging < config.table.countpage )
        {
            $('.cmd-paging[data-area="next"]').removeAttr("disabled");
        }
    }

}

function findtextHighlight(n)
{
    var txt = n,
    text = txt.toLowerCase(),
    area = $('.tr');

    area.find('.selection-search').removeClass('selection-highlight');
    area.find('.selection-search').filter(function()
    {
        return $(this).text().toLowerCase().indexOf(text) !== -1;

    }).addClass('selection-highlight');

}

function removetextHighlight(e)
{
    $(e).find('.selection-search').removeClass('selection-highlight');
}



function notetable(e)
{
    var note = e;

    if( note !== '')
    {
        var max = note.length;
        var limit = 50;

        if( max > limit )
        {
            note = '<span class="vnotes">' + note.substring(0, limit) + '... </span> <a href="" role="off" class="afalse cmd-vnotetable">lebih banyak</a>';
        }
        else
        {
            note = note;
        }

    }
    else
    {
        note = '';
    }

    return note;
}

function clicknotetable(e)
{
    var note = e;

    var limit = 50;

    note = note.substring(0, limit) + '... ';


    return note;
}

// view note all char
$('body').on('click', '.cmd-vnotetable', function(e)
{
    e.preventDefault();
    var cmd = $(this),
    area = cmd.parents('.inbubble'),
    vnote = area.find('.vnotes');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        cmd.html('lebih sedikit');
        vnote.html(area.attr('title'));
    }
    else
    {
        cmd.attr('role', 'off');
        cmd.html('lebih banyak');
        vnote.html( clicknotetable(area.attr('title')) );
    }
    
});

// SEARCH TABLE KEYUP
$('#form-table input.search').keyup(function(e)
{
    var input = $(this),
    form = input.parents('form'),
    button = form.find('button.cmd-search'),
    area = button.parents('.ar-src');


    tnumabjs(input);

    var code = e.which || e.keyCode;

    

    if( input.val().length < 1 && config.table.search_status === 1)
    {
        form.find('input[name="paging"]').val('1');
        // loadtable();
        form.submit();
        config.table.search_text = input.val();
        config.table.search_status = 0;
        button.attr('role', 'on');
        area.attr('aria-role', 'false');

    }

    if( input.val().length >= 3)
    {
        button.attr('role', 'off');
    }
    // else
    // {
        
    //     button.attr('role', 'on');
    //     area.attr('aria-role', 'false');

    // }



});

//SEARCH TABLE KEYDOWN
$('#form-table input.search').keydown(function(e)
{
    var input = $(this),
    form = input.parents('form'),
    button = form.find('button.cmd-search');

    tnumabjs(input);

    var code = e.which || e.keyCode;

    if( code === 13)
    {

        if( input.val().length >= 3 && input.val() !== config.table.search_text )
        {
            form.find('input[name="paging"]').val('1');
            button.click();
            config.table.search_text = input.val();
        }
        
        return false;
        
    }
    
    
});

// CLICK BUTTON SEARCH TABLE
$('#form-table button.cmd-search').click(function(e)
{
    e.preventDefault();

    var cmd = $(this),
    area = cmd.parents('.ar-src'),
    form = area.parents('form');

    if( cmd.attr('role') === 'off' && config.table.search_text !== area.find('input.search').val() )
    {
        config.table.search_status = 1;
        area.attr('aria-role', 'true');
        config.table.search_text = area.find('input.search').val();

        // loadtable();
        form.submit();
    }
});

// CLEAR BUTTON SEARCH TABLE
$('#form-table a.cmd-clear-search').click(function(e)
{
    e.preventDefault();

    var cmd = $(this),
    area = cmd.parents('.ar-src'),
    form = area.parents('form');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        area.attr('aria-role', 'false');
        area.find('input[type="text"]').val('');
        cmd.attr('role', 'off');
        area.find('button.cmd-search').attr('role', 'on');
        // loadtable();
        form.submit();
        config.table.search_text = area.find('input[type="text"]').val();
        config.table.search_status = 0;
        
    }
});



// ===========> SORT TABLE
function sorttable(e,n)
{
    e.preventDefault();

    var cmd = n,
    name = cmd.attr('data-name'),
    artable = cmd.parents('.ar-table'),
    form = artable.find('form'),
    sort = cmd.attr('aria-sort');

    if( cmd.attr('role') === 'off' && config.table.sort === 1)
    {
        cmd.attr('role', 'on');

        if( sort === 'desc')
        {
            cmd.attr('aria-sort', 'asc');
        }
        else
        {
            cmd.attr('aria-sort', 'desc');
        }

        //
        form.find('input[name="'+name+'"]').val(cmd.attr('aria-sort'));

        // loadtable();
        form.submit();
        cmd.attr('role', 'off');
    }

}

// ======================> END FUNCTION FOR TABLE


// function selectGender(e,n)
// {
//     e.preventDefault();
    
//     var cmd = n,
//     dataid = cmd.attr('dataid'),
//     role = cmd.attr('data-role'),
//     area = cmd.parents('.area-gender'),
//     form = cmd.parents('form');


//     if( cmd.attr('role') === 'off')
//     {
//         area.find('.cmd-gender').attr('role', 'off');
//         cmd.attr('role', 'on');
//         area.attr('data-role', role);
//     }

//     form.find('input[name="gender"]').val(dataid);
// }

// function formatRupiah(angka, prefix)
// {
//     var number_string = angka.toString(),
//     split   		= number_string.split(','),
//     sisa     		= split[0].length % 3,
//     rupiah     		= split[0].substr(0, sisa),
//     ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

//     // tambahkan titik jika yang di input sudah menjadi angka ribuan
//     if(ribuan){
//         separator = sisa ? '.' : '';
//         rupiah += separator + ribuan.join('.');
//     }

//     rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
//     return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
// }

// function formatNumber(angka)
// {
//     var number_string = angka.toString(),
//     split   		= number_string.split(','),
//     sisa     		= split[0].length % 3,
//     rupiah     		= split[0].substr(0, sisa),
//     ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

//     // tambahkan titik jika yang di input sudah menjadi angka ribuan
//     if(ribuan){
//         separator = sisa ? '.' : '';
//         rupiah += separator + ribuan.join('.');
//     }

//     rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

//     return rupiah;
// }

// function tnumabjs(q)
// {
//     var x = q.val();
//     var xy = x.replace(/[^0-9a-zA-Z' ']/g,'');
//     q.val( xy );

//     // return xy;

// }


// function formdatasend(e)
// {
//     var unindexed_array = e.serializeArray();
//     var datasend = {};

//     $.map(unindexed_array, function(n, i){
//         datasend[n['name']] = n['value'];
//     });

//     return JSON.stringify(datasend);
// }
    

// document

// ======
// EXPORT TO EXCEL ======>

// load proses export
function loadprocess(e)
{
    $('body').css({'overflow':'hidden'});
    $('body').append('<div class="layer-black"><div class="in-layer-center"><div class="tbl"><div class="intbl"><div class="div"><div class="div"><img src="'+config.apps.URL+'/assets/svg/loading.white.svg" alt="loading"></div><div class="div">'+e+'</div></div></div></div></div></div>');
}


// hide process export
function hideloadprocess()
{
    $('body').attr('style','');
    $('body .layer-black').remove();
}


//export excel
function exporttoexcel(e)
{
    var data = e;
    var title = data['title'];

    var tableData = [
        {
            "sheetName": "Sheet1",
            "data" : data['data']
        }
    ];
        

    var options = {
        fileName: title
    };
    Jhxlsx.export(tableData, options);
    
    hideloadprocess();

}

// EXPORT TO EXCEL ======>
// ======


$('body').find('.typefalse').keydown(function(e)
{
    return false;
});




$('body').on('change', '.selectpicker', function(e)
{
    var select = $(this);

    if( select.val() !== '-1')
    {
        select.removeClass('error');
        select.parents('.alist').find('label.error').remove();
        
    }
})

$('body').on('click', '.afalse', function(e)
{
    return false;
});

$('body').find('form').submit(function()
{
    return false;
})





// $('body').on('click', '[data-target]', function(e)
// {

    // var cmd = $(this),
    // target = cmd.attr('data-target'),
    // title = cmd.attr('data-title'),
    // type = cmd.attr('data-type');

    // contentModal($(this));

// });



// CHECKBOX VALUE
$('body').on('click', '.cmd-check-box', function(e){
    e.preventDefault();

    var cmd = $(this),
    area = cmd.parents('.area-check');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        area.find('input.value').val('1');
    }
    else
    {
        cmd.attr('role', 'off');
        area.find('input.value').val('0');
    }
})


// DROPDOWN SEARCH
$('body').on('keyup', '.tsrc-dropdown', function(e)
{
    var text = $(this),
    area = text.parents('.area-tsrc-dropdown'),
    form = text.parents('form'),
    doneTypingInterval = parseFloat(area.attr('datatimer'));

    //
    
    confTextSrc.status = 'false';
    if( $.trim( text.val() ).length >= 3 && confTextSrc.label !== text.val())
    {
        area.find('ul').html('<li class="empty">Memuat...</li>');
        area.attr('role', 'true');
        area.find('.label.error').remove();

        // getcitykecamatan(area,text,form);
        area.find('input.value-dropdown').val('');
        confTextSrc.text = text.val();
        confTextSrc.area = area;

        clearTimeout(typingTimer);
        typingTimer = setTimeout(getCityKecamatan, doneTypingInterval);
    }
    else
    {
        
        confTextSrc.text = text.val();
        confTextSrc.area = '';
        area.find('input.value-dropdown').val('');
        area.attr('role', 'false');
        area.find('ul').html('');
    }

    // console.log(confTextSrc.label);

});


$('body').on('keydown', '.tsrc-dropdown', function(e)
{

    clearTimeout(typingTimer);

});

//setup before functions
var typingTimer;
var confTextSrc = 
{
    'form' :   '',
    'area' :   '',
    'text' :   '',
    'label':   '',
    'status':   'false'
}

function getCityKecamatan()
{
    var form = confTextSrc.form,
    area = confTextSrc.area,
    text = confTextSrc.text;

    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/data/srckotakecamatan?p=1&q=' + text,
        cache: false,
        timeout: 18000,
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            var response = n.response;

            console.log(response);

            var li = '';
            $.each(response.list, function(i, item)
            {
                li += '<li class="selected cmd-selected-dropdown" dataid="'+item.id+'" role="off">'+item.label+'</li>';
            });

            area.find('ul').html(li);

            confTextSrc.status = 'true';
        },
        error: function(n)
        {
            area.find('ul').html('<li class="notfound">Data tidak ditemukan</li>');
            area.find('input.label-dropdown').addClass('error');
            confTextSrc.label = area.find('input.label-dropdown').html();
            confTextSrc.status = 'false';
            // console.log(n);
        }

    })
}

$('body').on('click','.cmd-selected-dropdown', function(e)
{
    e.stopPropagation();
    e.preventDefault();
    var cmd = $(this),
    area = cmd.parents('.area-tsrc-dropdown');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        area.attr('role', 'false');

        confTextSrc.label = cmd.html();
        area.find('input.label-dropdown').val(cmd.html());
        area.find('input.value-dropdown').val(cmd.attr('dataid'));
        area.find('button.cls').show();
        area.find('label.error').remove();
        area.find('ul').html('');
        cmd.attr('role', 'off');
        confTextSrc.status = 'false';
    }
});


$('body').on('click','.cmd-clear-tsrc', function(e)
{
    e.stopPropagation();
    e.preventDefault();
    var cmd = $(this),
    area = cmd.parents('.area-tsrc-dropdown');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        area.attr('role', 'false');

        confTextSrc.label = '';
        area.find('input.label-dropdown').val('');
        area.find('input.value-dropdown').val('');
        

        area.find('button.cls').hide();
        area.find('label.error').remove();
        area.find('ul').html('');
        cmd.attr('role', 'off');
        confTextSrc.status = 'false';
        area.find('input.label-dropdown').focus();
    }
});


$('body').on('blur', '.tsrc-dropdown', function(e)
{
    var text = $(this),
    area = text.parents('.area-tsrc-dropdown'),
    form = text.parents('form');

    if( confTextSrc.status === 'false' && area.find('input.value-dropdown').val() === '')
    {

        
        area.attr('role', 'false');
        area.find('ul').html('');
        if( $.trim( text.val() ).length > 0 && area.find('input.value-dropdown').val() === '')
        {
            area.find('label.error').remove();
            area.find('input.label-dropdown').addClass('error');
            area.append('<label class="error">Pilih Kota atau Kecamatan yang telah ditentukan</label>');
            area.find('input.label-dropdown').focus();
        }
    }

});



// END DROPDOWN SEARCH


// format rupiah keyup
$('body').on('keyup', '.rupiahkeyup', function(e)
{

    var num = $.trim($(this).val());
    var sb = num.slice(0,1);
    
    if( sb === '0')
    {
       var x = num.substring(1);
       this.value = x;
    }

    // this.value = num;
    this.value = formatRupiahKeyup(this.value);
});


//
$('body').on('click', '.cmd-gender', function(e)
{
    selectGender(e,$(this));
});

// END FORM CUSTOMER =================>


// keyup input text
$('body').on('keyup', '.number', function(e)
{
    tnumber($(this));
})

//
function numbFNoZeroWO(e)
{
    var text = e,
    x = text.val();

    var xy = x.replace(/[^0-9]/g,'');
    text.val(xy);

    if( text.val().length === 0)
    {
        text.val('0');
    }

    if( text.val().length > 1 )
    {
        var vtext = Number(text.val());

        text.val( vtext );
    }
}

function numbFNoZero(e)
{
    var text = e,
    x = text.val();

    var xy = x.replace(/[^0-9]/g,'');
    text.val(xy);

    if( text.val().length === 1 )
    {
        if( text.val() === '0')
        {
            text.val('');
        }
    }

    if( text.val().length > 1 )
    {
        var vtext = Number(text.val());

        text.val( vtext );
    }
}

// Notification
var notifPg = 1,
countTotalNotif = 0,
notifLimit = 0;

function runNotif() {
    // runs every 60 sec and runs on init.
    if( notifLimit > 0 )
    {
        // console.log(notifLimit);
        runGetNotification();
    }
    notifLimit = 1;
}
// setInterval(runNotif, 60*1000);

function getNotification()
{
    var $URL = config.apps.URL_NOTIFY;
    $URL += getaccount().level > 0 ? '/api/notification/admin' : '/api/notification/user';
    $URL += '?level=' + getaccount().level + '&slevel=' + getaccount().sublevel + '&id=' + getaccount().id + '&compid=' + getaccount().config.company_id + '&pg=' + notifPg;

    
    // e = data, t = metode, k = type header auth, w = type bundle
    var $te = FormSending("","GET","key","",$URL);
    $te.success(function(n)
    {
        // console.log(n.response.list);
        var anotif = $("body").find(".area-notifications-dd"),
        count = parseFloat(n.response.count),
        vcount = count > 9 ? '9+' : n.response.count;

        anotif.find(".val-notif-label span").html(vcount);
        anotif.attr("aria-status", "true");

        var list = "";
        $.each(n.response.list, function(i, item)
        {
            list += '<li role="'+item.read_date+'"><a href="'+( config.apps.URL + item.content.link )+'" class="ca-notify cmd-read-notify" role="off" area-read="'+item.read_date+'" dataid="'+item.id+'"><span class="user-avatar avatar avatar-img"><span class="sli_icon-bag"></span></span><div class="notification-list-content"><h3 class="title fsize13">'+(item.content.title)+'</h3><span class="label fsize12">'+(item.content.body)+'</span><span class="dt"><span class="fsize11"><span class="fa flaticon-calendar-with-a-clock-time-tools"></span> '+ (item.date) +'</span></span></div></a></li>';
        })
        anotif.find(".notfication-list").html(list);


        notifTitlePage(count);
        countTotalNotif = count;

        if( config.apps.NOTIFY_STATUS === "true")
        {
            setInterval(runNotif, 60*1000);
        }
    }),
    $te.error(function(n)
    {
        var anotif = $("body").find(".area-notifications-dd");
        // console.log(n.responseJSON);
        if(n.status === 404)
        {
            // countTotalNotif = 0;
            var list = '';
            if(n.responseJSON.response.list !== "")
            {
                
                $.each(n.responseJSON.response.list, function(i, item)
                {
                    list += '<li role="'+item.read_date+'"><a href="'+( config.apps.URL + item.content.link )+'" class="ca-notify cmd-read-notify" role="off" area-read="'+item.read_date+'" dataid="'+item.id+'"><span class="user-avatar avatar avatar-img"><span class="sli_icon-bag"></span></span><div class="notification-list-content"><h3 class="title fsize13">'+(item.content.title)+'</h3><span class="label fsize12">'+(item.content.body)+'</span><span class="dt"><span class="fsize11"><span class="fa flaticon-calendar-with-a-clock-time-tools"></span> '+ (item.date) +'</span></span></div></a></li>';
                })
                
            }
            else
            {
                list += '<li class="empty"><div class="notification-list-content"><div class="div"><span>Tidak ada notifikasi</span></div></div></li>';
            }

            anotif.find(".notfication-list").html(list);

            anotif.find(".val-notif-label span").html(0);
            anotif.attr("aria-status", "false");
        }
        notifTitlePage(0);
        if( config.apps.NOTIFY_STATUS === "true")
        {
            setInterval(runNotif, 60*1000);
        }
    });
}

function runGetNotification()
{
    var $URL = config.apps.URL_NOTIFY;
    $URL += getaccount().level > 0 ? '/api/notification/admin' : '/api/notification/user';
    $URL += '?level=' + getaccount().level + '&slevel=' + getaccount().sublevel + '&id=' + getaccount().id + '&compid=' + getaccount().config.company_id + '&pg=' + notifPg;

    
    // e = data, t = metode, k = type header auth, w = type bundle
    var $te = FormSending("","GET","key","",$URL);
    $te.success(function(n)
    {
        // console.log(n.response);
        var anotif = $("body").find(".area-notifications-dd"),
        count = parseFloat(n.response.count),
        vcount = count > 9 ? '9+' : n.response.count;

        anotif.find(".val-notif-label span").html(vcount);
        anotif.attr("aria-status", "true");

        var list = "";
        $.each(n.response.list, function(i, item)
        {
            list += '<li role="'+item.read_date+'"><a href="'+( config.apps.URL + item.content.link )+'" class="ca-notify cmd-read-notify" role="off" area-read="'+item.read_date+'" dataid="'+item.id+'"><span class="user-avatar avatar avatar-img"><span class="sli_icon-bag"></span></span><div class="notification-list-content"><h3 class="title fsize13">'+(item.content.title)+'</h3><span class="label fsize12">'+(item.content.body)+'</span><span class="dt"><span class="fsize11"><span class="fa flaticon-calendar-with-a-clock-time-tools"></span> '+ (item.date) +'</span></span></div></a></li>';
        })
        anotif.find(".notfication-list").html(list);

        notifTitlePage(count);
        countTotalNotif = count;
    }),
    $te.error(function(n)
    {
        var anotif = $("body").find(".area-notifications-dd");
        // console.log(n.responseJSON);
        if(n.status === 404)
        {
            // countTotalNotif = 0;
            anotif.find(".val-notif-label span").html(0);
            anotif.attr("aria-status", "false");
        }
        notifTitlePage(0);
    });
}

function notifTitlePage(e)
{
    var defaultTitle = config.page.TITLE;

    var chTitle = parseFloat(e) > 0 ? '(' + e + ') Pemberitahuan Baru | ' + config.apps.name : defaultTitle;

    document.title = chTitle;
    
}

function openNotif()
{

    var form = $("body").find("form#form-open-notif");
    var $URL = config.apps.URL_NOTIFY + form.attr("action");
    $URL += getaccount().level > 0 ? '/admin' : '/user';


    var $te = FormSending(form,"POST","key","",$URL);
    $te.success(function(n)
    {
        var anotif = $("body").find(".area-notifications-dd");

        anotif.find(".val-notif-label span").html(0);
        anotif.attr("aria-status", "false");
        notifTitlePage(0);
        countTotalNotif = 0;
    }),
    $te.error(function(n)
    {
        console.log(n.responseJSON);
        var anotif = $("body").find(".area-notifications-dd"); 
        if(n.status === 404)
        {
            countTotalNotif = 0;
            anotif.find(".val-notif-label span").html(0);
            anotif.attr("aria-status", "false");
        }
        notifTitlePage(0);
    });

}


function readNotif()
{
    var form = $("body").find("form#form-read-notif");
    var $URL = config.apps.URL_NOTIFY + form.attr("action");
    $URL += getaccount().level > 0 ? '/admin' : '/user';

    var $te = FormSending(form,"POST","key","",$URL);
    $te.success(function(n)
    {
        // console.log(n);
        // if( window.location.href !== form.find("input[name='href']").val() )
        // {
            window.location.href = form.find("input[name='href']").val();
        //     return;
        // }

    }),
    $te.error(function(n)
    {
        console.log(n.responseJSON);
        // if( window.location.href !== form.find("input[name='href']").val() )
        // {
            window.location.href = form.find("input[name='href']").val();
            // console.log('tidak sama');
            // return;
        // }
        
    });
}



// inactive detect and refresh token if status false
// var timeoutInMiliseconds = 10000;
var timeoutInMiliseconds = config.apps.confTimeMSCHToken ;
var timeoutIdCHToken; 
var timeStatusCHToken = 'true';

// active page
function startTimerCHToken()
{ 
    
   if( timeStatusCHToken === 'false')
   {
       
       var token = getToken();
        getRefreshCookie(token);

   }

   
    timeStatusCHToken = 'true';
    // console.log(timeStatusCHToken);
    timeoutIdCHToken = window.setTimeout(doInActiveCHToken, parseFloat(timeoutInMiliseconds));   
}



// noactive page
function doInActiveCHToken()
{

    timeStatusCHToken = 'false';
}

function resestTimerCHToken() { 
    window.clearTimeout(timeoutIdCHToken)
    startTimerCHToken();
}

 
function setupTimeCHToken () {
    document.addEventListener("mousemove", resestTimerCHToken, false);
    document.addEventListener("mousedown", resestTimerCHToken, false);
    document.addEventListener("keypress", resestTimerCHToken, false);
    document.addEventListener("touchmove", resestTimerCHToken, false);

    startTimerCHToken();
}

