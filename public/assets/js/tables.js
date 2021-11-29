// sort table
var configTable = {
    sort: 1,
    countpage: 0
}

function sorttable(e,n)
{
    e.preventDefault();

    var cmd = n,
    name = cmd.attr('data-name'),
    artable = cmd.parents('.area-tables'),
    form = artable.find('form'),
    sort = cmd.attr('aria-sort');

    if( cmd.attr('role') === 'off' && configTable.sort === 1)
    {
        cmd.attr('role', 'on');
        configTable.sort = 0;

        //
        var valsort = sort === 'desc' ? 'asc' : 'desc';
        cmd.attr('aria-sort',valsort);

        //
        form.find('input[name="'+name+'"]').val(valsort);

        // loadtable();
        form.find('button.submit').click();

        configTable.sort = 1;
        cmd.attr('role', 'off');
    }

}


//
function tableempty(e)
{
    var li = '<div class="tr empty"><div class="tbody"><div class="div"><div class="div"><span class="icon flaticon2-warning"></span></div><div class="div">'+e+'</div></div></div></div>';

    return li;
}


function exePaging(e,a)
{

    e.preventDefault();
    var cmd = a,
    table = a.parents('.area-tables'),
    form = table.find('#form-table'),
    paging = parseFloat( form.find('input[name="paging"]').val() );

    if( cmd.attr('role') === 'off' )
    {
        cmd.attr('role','on');

        //next
        if( cmd.attr('data-area') === 'next')
        {
    
            
            if( paging < configTable.countpage )
            {
                paging += 1;
                form.find('input[name="paging"]').val(paging)
    
                //submit
                // form.find('button.submit').click();
                exeTable(form);
    
            }
            
            if( paging > 1 )
            {
                table.find('.cmd-paging[data-area="back"]').removeAttr("disabled");
            }
    
            if( paging >= configTable.countpage)
            {
                cmd.attr("disabled", "disabled");
            }
        }
        else
        {
            if( paging > 1)
            {
                paging -= 1;
                form.find('input[name="paging"]').val(paging);
                //submit
                // form.find('button.submit').click();
                exeTable(form);
    
            }
    
            if( paging === 1 )
            {
                cmd.attr("disabled", "disabled");
            }
            if( paging < configTable.countpage )
            {
                table.find('.cmd-paging[data-area="next"]').removeAttr("disabled");
            }
        }

        cmd.attr('role','off');
    }


}


function exeTable(e)
{
    var form = e,
    table = form.parents('.tables'),
    body = table.find('.atable.table-body'),
    head = table.find('.table-header'),
    footer = table.find('.foot-tables');

    //template
    var temp = $('#' + form.attr('aria-temp')).html();

    //loading
    table.attr('aria-load','true');

    var $URL = config.apps.URL_API + form.attr('action') + '?' + form.serialize();
    var $t = FormSending("","GET","key","",$URL);

    // console.log($URL);
    $t.success(function(n)
    {
        var rsp = n.response;
        // LIST
        var list = createTempTable(rsp,temp);

        //
        var countpage = parseFloat(rsp.countpage),
        paging = parseFloat(rsp.paging);

        configTable.countpage = countpage;
        //
        if( countpage > 1)
        {
            if( paging === countpage)
            {
                footer.find('button[data-area="next"]').attr('disabled','disabled');
            }
            else
            {
                footer.find('button[data-area="next"]').removeAttr('disabled');
            }
        }
        else
        {
            footer.find('button[data-area="next"]').attr('disabled','disabled');
        }

        if( paging < 2 )
        {
            footer.find('button[data-area="back"]').attr('disabled','disabled');
        }

        //
        footer.find('.cpagetotal').html(rsp.total);
        footer.find('.cpageoff').html(countpage);
        footer.find('.cpage').html(paging);
        footer.removeClass('hide');
        head.removeClass('hide');
        body.html(list);
        table.attr('aria-load','false');

        // console.log(rsp);
        
    });
    $t.error(function(n)
    {
        console.log(n);
        console.log('no table');
        var rsp = n.responseJSON;

        table.attr('aria-load','false');
        var list = tableempty(rsp.message);
        body.html(list);
        head.addClass('hide');
        // body.addClass('hide');
        footer.addClass('hide');
    });
}


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