
// DROPDOWN FILTER
function showDdwnHd(e,w)
{
    // e.preventDefault();
    e.stopPropagation();
    var cmd = w;

    if(cmd.attr('role') === 'off')
    {
        $('body').find('.cmd-ddwn-hd[role="on"]').click();
        cmd.attr('role','on');
        cmd.parent('div').addClass('open');
        if( cmd.attr('data-type') !== '')
        {
            $('body').find('.overlay-screen').remove();
            $('body').append('<div class="overlay-screen blk keep"></div>');
            cmd.parent('div').removeClass('overlay-fix');
            cmd.parent('div').addClass('overlay-fix');
        }
    }
    else
    {
        cmd.attr('role','off');
        cmd.parent('div').removeClass('open');
        if( cmd.attr('data-type') !== '')
        {
            $('body').find('.overlay-screen').remove();
            cmd.parent('div').removeClass('overlay-fix');
        }
    }

    return false;
}


// SEARCH ON TABLE
var confSrcHdForm = {
    'text'      :   '',
    'status'    :   'false',
    'timer'     :   1000
}

function srcHdForm(w)
{

    var text = w,
    area = text.parent('div'),
    form = text.parents('form'),
    txt = text.val();

    if( $.trim(txt).length >= 3 && confSrcHdForm.text !== txt )
    {
        confSrcHdForm.text = txt;
        form.find('button.submit').click();
        area.find('a.cls').removeClass('hide');
    }

    return false;
}

function clsHdForm(e,w)
{
    e.preventDefault();
    var cmd = w,
    area = cmd.parent('div'),
    form = cmd.parents('form');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        cmd.addClass('hide');
        confSrcHdForm.text = '';
        area.find('input').val('');
        form.find('button.submit').click();
        cmd.attr('role', 'off');
        area.find('input').focus();
    }
}

