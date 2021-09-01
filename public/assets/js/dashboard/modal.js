// script for modal

// config modal
var confModal = 
{
    'modaladdress'  :   {
        'title'                 :   'Alamat',
        'headerIcon'            :   'fa flaticon2-pin-1',
        'width'                 :   'w520',
        'load'                  :   'true',
    },
    'modalcustomers' : {
        'title'                 :   'Customer',
        'headerIcon'            :   'sli_icon-user-follow',
        'width'                 :   'w520',
        'load'                  :   'true',
    },
    'msgboxDelOrder'        :   {
        'title'                 :   'Hapus Order',
        'headerIcon'            :   'fa flaticon-danger',
        'width'                 :   'w420',
        'load'                  :   'false'
    },
    'modalpengguna' : {
        'title'                 :   'Pengguna',
        'headerIcon'            :   'sli_icon-user-follow',
        'width'                 :   'w420',
        'load'                  :   'true',
    },
}




// MODAL =============== >

//
$('body').on('click', '[data-togglex="modal"]', function(e)
{
    e.stopPropagation();
    e.preventDefault();
    var cmd = $(this),
    target = cmd.attr('data-target'),
    el = target.replace('#', '');

    //remove before append
    $('body').find('.create-modal').remove();


    var configMDL = confModal[el];
    // create template modal

    var createModal = '';
    createModal += '<div class="modal fade new-modal modal-create" id="'+el+'" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false" aria-load="'+configMDL['load']+'" aria-delete="false" aria-alert="false"><div class="modal-dialog '+(configMDL['width'])+'" role="document">';

    createModal += '<div class="modal-content">';
    
    createModal += '<div class="msg-modal alert" data-role="success"><div class="inalert"><a href="#" class="close" role="off"><span class="flaticon2-cancel-music"></span></a><div class="div"><span class="ic danger flaticon-danger"></span><span class="ic check sli_icon-check"></span></div><div class="div msg">message</div></div></div>';

    createModal += '<div class="modal-inload"><img src="/assets/svg/loading.blue.svg" alt="loading"></div>';

    createModal += '<div class="div inmodal-content">';

    // header
        createModal += '<div class="modal-header"><h4 class="modal-title"><span class="ic modal-icon '+configMDL['headerIcon']+'"></span><span class="title-label">'+configMDL['title']+'</span></h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>';

        createModal += '<div class="modal-inbody">';

            // body
            createModal += '<div class="modal-body"></div>';

            // footer
            createModal += '<div class="modal-footer"><button type="button" role="off" class="btn del modal-submit-del is-loading" ><span class="ic flaticon2-trash"></span> <span class="lbl">HAPUS</span></button>';

            createModal += '<button type="button" class="btn green is-loading modal-submit" role="off"><span class="ic flaticon2-check-mark"></span> <span class="lbl">SIMPAN</span></button></div>';

        createModal += '</div>';

    createModal += '</div>';

    createModal += '</div></div></div>';

    //
    $('body').append(createModal);

    //
    $(target).modal();


});

function contentModal(e)
{
    var target = e,
    fcontent = $('body').find('.incontent-modal'),
    el = target.replace('#', ''),
    inbody = fcontent.find('.' + el).html();


    return inbody;

}



// ALERT ======= >
$('body').on('click', '.new-modal.show .msg-modal a.close', function(e)
{
    e.preventDefault();

    var cmd = $(this),
    modal = cmd.parents('.new-modal.show'),
    msgbox = cmd.parents('.msg-modal');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        // msgbox.removeClass('show');
        modal.attr('aria-alert', 'false');
        cmd.attr('role', 'off');
    }
    
});

function defaultmodalform(e)
{
    var modal = e,
    form = modal.find('form');

    //
    form.find('.txt-def-empty').val('');
    form.find('.txt-def-nol').val('0');
    form.find('.txt-def-gender').val('1');
    form.find('.area-gender').attr('data-role', 'male');
    form.find('.area-gender a').attr('role', 'off');
    form.find('.area-gender a[data-role="male"]').attr('role', 'on');
    form.find('.selectmin1').val('-1');
    form.find('.selectpicker').selectpicker('refresh');
    form.find('.cmd-check-box').attr('role', 'off');
    form.find('.cmd-check-box .value').val('0');

    //
    modal.find('label.error').remove();
    modal.find('span.error').remove();
    modal.find('.br-error').removeClass('br-error');
    modal.find('.error').removeClass('error');
    modal.find('button.modal-submit').attr('role','off');
    modal.find('button.modal-submit').addClass('is-loading');


}

function textDefEmpty(e)
{
    var modal = e,
    form = modal.find('form');

    form.find('.txt-def-empty').val('');
}



// MODAL FORM CLOSE
// $('body').on('click', 'button[data-dismiss="modal"]', function(e)
// {
//     var button = $(this),
//     modal = button.parents('.modal');

//     defaultmodalform(modal);

// });

// CLOSE MODAL
$('body').on('click', 'button[data-dismiss="modal"]', function(e)
{

    var button = $(this),
    modal = button.parents('.modal');

    //
    modal.attr('aria-alert','false');
    modal.find('label.error').remove();
    modal.find('.error').removeClass('error');
    modal.find('button.modal-submit').removeClass('is-loading');
    modal.find('button.modal-submit').attr('role', 'on');

    defaultmodalform(modal);
    
});


// VALIDATE
var r = function(t)
{
    return t.trim()
}


// FORM ADDRESS  =================== >

// click modal 
$('body').on('click', '[data-target="#modaladdress"]', function(e)
{

    var cmd = $(this),
    target = cmd.attr('data-target'),
    el = target.replace('#', ''),
    title = cmd.attr('data-title'),
    type = cmd.attr('data-type'),
    open = cmd.attr('data-open');

    var content = contentModal(target);

    $(target).find('.modal-body').html( content );

    
    //
    var configModal = confModal[el];
    
    title = type === 'add' ? 'Tambah ' + configModal.title : 'Ubah ' + configModal.title;

    $(target).find('.title-label').html(title);
    $(target).find('input[name="type"]').val(type);
    
    //clear error on slide
    clearslideerror()
    //
    
    //open in slide
    if( open === 'slide-checkout' || open === 'list-address')
    {

        var widget = $('body').find('.area-widget.show'),
        form = widget.find('#form-order');

        $(target).find('input[name="open"]').val(open);
        $(target).find('input[name="customer_id"]').val(form.find('input[name="customer_id"]').val());
        $(target).find('input[name="order_id"]').val(form.find('input[name="order_id"]').val());

        if( type === 'add')
        {

            $(target).attr('aria-load', 'false');
        }
        //

        if( type === 'edit')
        {
            $(target).attr('aria-delete', 'true');
            $(target).find('input[name="address_id"]').val(cmd.attr('dataid'));
            getsingleaddr(cmd.attr('dataid'), target);
        }
    }

    
});


//get data address
function getsingleaddr(e,el)
{
    var addressid = e,
    area = el;

    //
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/customers/address/single?addressid=' + addressid,
        headers: {
            'Content-Type':'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        dataType: 'JSON',
        success: function(n)
        {
            var response = n.response;
            console.log(n);

            $(el).find('input[name="label"]').val( response.label );
            $(el).find('input[name="name"]').val( response.name );
            $(el).find('input[name="phone"]').val( response.phone );
            $(el).find('input[name="city"]').val( response.address_label );
            $(el).find('input[name="address_array"]').val( response.address_array );
            $(el).find('input[name="kodepos"]').val( response.kodepos );
            $(el).find('textarea[name="address"]').val( response.address );

            $(el).find('input[name="keep"]').val( response.keep );


            $(el).find('.cmd-check-box').attr('role', parseFloat( response.keep ) === 1 ? 'on' : 'off')
            
            $(el).attr('aria-load', 'false');
        },
        error: function(n)
        {
            console.log(n);
        }
    });

    //
}



// submit 
$('body').on('click', '#modaladdress button.modal-submit', function(e)
{
    e.preventDefault();

    var cmd = $(this),
    modal = cmd.parents('.modal.show'),
    form = modal.find('form');
    
    //
    form.find('input[name="address_array"]').val() === '' ? form.find('input.label-dropdown').addClass('error') : form.find('input.label-dropdown').removeClass('error');
    

    form.validate(addressvalidate);
    
    form.valid();
    var cekingsubmit = form.valid();

    if( cekingsubmit )
    {

        ceksubmitaddress(form);
    }
    
});

// validator address

$.validator.addMethod("notnullhidden", function(value, element, arg)
{
   return arg !== value;

}, "Value must not equal arg.");

var addressvalidate = 
{
    ignore:"",
    rules:{
        label:{
            required:!0,
            minlength:3,
            normalizer:r,
        },
        name:{
            required:!0,
            minlength:3,
            normalizer:r,
        },
        phone:{
            required:!0,
            normalizer:r,
            number: true,
            minlength:8
        },
        address_array:{
            notnullhidden : '',
        },
        city:{
            required:!0,
            normalizer:r
        },
        address:{
            required:!0,
            minlength:10,
            normalizer:r,
        },
        kodepos:{
            required:!0,
            minlength:5,
            normalizer:r,
        }
    },
    messages:{
        label: "Label Alamat harus diisi",
        name:'Diisi sekurangnya 3 karakter',
        phone: 'Diisi dengan benar',
        address_array: "Pilih Kota atau Kecamatan",
        city: "Pilih Kota atau Kecamatan",
        kodepos: "Harus diisi",
        address: "Diisi Alamat lengkap"
    },
    errorPlacement:function(t,n)
    {
        $(n).parents('.alist').find('label.error').remove();
        $(n).parents('.alist').append(t);
        // console.log(n);
    }
}


function ceksubmitaddress(e)
{

    var form = e,
    modal = form.parents('.new-modal.show'),
    alert = modal.find('.msg-modal'),
    type = form.find('input[name="type"]').val(),
    open = form.find('input[name="open"]').val(),
    destiname = form.find('input[name="city"]').val().split(',');

    modal.find('button.modal-submit').attr('role', 'on');

    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        headers: {
            'Content-Type':'application/json',
            // "Authorization": "Bearer " + getToken()
            "key":getaccount().key
        },
        data: formdatasend(form),
        dataType: 'JSON',
        success: function(n)
        {

            var response = n.response;

            //refresh
            // refreshCookie(n.refresh);

            if( open === 'slide-checkout')
            {

                
                var widget = $('#' + open ).parents('.area-widget.show');

                widget.find('#form-order').find('input[name="destination_id"]').val( response.id );

                var li = '<div class="div"><b class="clr-b">'+$.trim(form.find('input[name="name"]').val())+'</b><span class="label">('+$.trim(form.find('input[name="label"]').val())+')</span>';

                //keep
                if( form.find('input[name="keep"]').val() === '1')
                {
                    widget.find('.list-checkout.area-address').attr('data-keep', 'true');

                    li += '<span class="utama">Utama</span>';
                }

                li += '</div><div class="div clr-b">'+ $.trim( form.find('input[name="phone"]').val() ) +'</div><div class="div"><span>'+ $.trim( form.find('input[name="address"]').val() ) +'</span></div><div class="div">'+destiname[2]+' - '+destiname[1]+'</div><div class="div">'+destiname[0]+' ('+ form.find('input[name="kodepos"]').val() +')</div>';

                widget.find('.list-checkout .ar-address').html(li);
                widget.find('.list-checkout.area-address').attr('role', 'true');

                // console.log(open);

            }
            else if( open === 'list-address')
            {
                // load widget
                imwg_address_list( $('body').find('.area-widget.show') );
            }

            modal.attr('aria-alert', 'true');
            alert.attr('data-role', 'success');
            alert.find('.msg').html(n.message);
            defaultmodalform(modal);
            modal.find('button.modal-submit').attr('role', 'off');
            modal.find('button[data-dismiss="modal"]').click();

        },
        error: function(n)
        {
            console.log(n);
            // refreshCookie(n.responseJSON.refresh);
            modal.attr('aria-alert', 'true');
            alert.attr('data-role', 'error');
            alert.find('.msg').html(n.responseJSON.message);
            modal.find('button.modal-submit').attr('role', 'off');
        }
    });

}


// END FORM ADDRESS




// FORM CUSTOMER ==================> 

$('body').on('click', '[data-target="#modalcustomers"]', function(e)
{

    var cmd = $(this),
    target = cmd.attr('data-target'),
    el = target.replace('#', ''),
    type = cmd.attr('data-type'),
    open = cmd.attr('data-open'),
    title = '';

    var configModal = confModal[el];
    var content = contentModal(target);

    
    $(target).find('.modal-body').html( content );

    title = type === 'add' ? 'Tambah ' + configModal.title : 'Sunting ' + configModal.title;

    

    $(target).find('.title-label').html(title);
    $(target).find('input[name="type"]').val(type);
    $(target).find('input[name="open"]').val(open);
    

    // get source
    var source = '<select name="source" class="selectpicker form-control selectmin1">';
    source += '<option value="-1">Source</option><option value="1">Facebook</option><option value="2">Google</option><option value="3">Tik-Tok</option><option value="4">Instagram</option><option value="5">Teman</option><option value="6">Lainnya</option>';
    source += '</select>';
    
    $(target).find('.area-source').html(source);
    
    

    if( type === 'add')
    {
        $(target).find('.selectmin1').val('-1');
        $(target).find('.selectpicker').selectpicker('refresh');
        $(target).attr('aria-load', 'false');
    }
    else
    {
        var $URL = config.apps.URL_API + '/api/customers/vs-edit?token=' + cmd.attr('data-token');

        var $t = FormSending('','GET','key','',$URL);
        $t.success(function(n)
        {
            // console.log(n);
            var resp = n.response;
            
            $(target).find('.area-gender .cmd-gender').attr('role','off');
            if( resp.gender === 1)
            {
                $(target).find('.area-gender').attr('data-role', 'male');
                $(target).find('.area-gender .cmd-gender[data-role="male"]').attr('role','on');
            }
            else
            {
                $(target).find('.area-gender').attr('data-role', 'female');
                $(target).find('.area-gender .cmd-gender[data-role="female"]').attr('role','on');
            }
            
            $(target).find('input[name="customer_id"]').val(resp.id);
            $(target).find('input[name="name"]').val(resp.name);
            $(target).find('input[name="phone"]').val(resp.phone);
            $(target).find('input[name="email"]').val(resp.email);
            $(target).find('input[name="gender"]').val(resp.gender);
            $(target).find('select[name="source"]').val(resp.source);
            $(target).find('.selectpicker').selectpicker('refresh');
            $(target).find('button.modal-submit').attr('role','off');
            $(target).attr('aria-load', 'false');
        });
        $t.error(function(n)
        {
            console.log(n);
            flagnotif('error', 'Opss.. Terjadi kesalahan tidak diketahui, silahkan refresh halaman ini');
        });
    }


});




// function add new  customer and validate
$.validator.addMethod("customemail", function(t, n)
{
        t=t.trim();
        var r= $(n).prop("required"),
        i=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t);
        return r?""!==t&&i:""===t||i
}, "Sorry, I've enabled very strict email validation");

$.validator.addMethod("selectoptmin", function(value, element, arg)
{
    return arg !== value;
}, "Value must not equal arg.");


$('body').on('click', '#modalcustomers button.modal-submit', function(e)
{
    e.preventDefault();

    var cmd = $(this),
    modal = cmd.parents('.modal.show'),
    form = modal.find('form');

    //
    modal.attr('aria-alert', 'false');

    form.validate(customervalidate);

    form.valid();
    cekingsubmit = form.valid();

    if( cekingsubmit )
    {

        ceksubmitcustomers(form);
    }
    
});


var customervalidate = 
{
    
    rules:{
        name:{
            required:!0,
            minlength:3,
            normalizer:r,
        },
        phone:{
            required:!0,
            normalizer:r,
            number: true,
            minlength:8
        },
        email:{
            customemail:!0,
            required:  {
                depends:function(t){
                    return $(t).prop("required")
                }
            }
        },
        source:{
            selectoptmin: "-1"
        }
    },
    messages:{
        name:'Harus diisi sekurangnya 3 karakter',
        phone: 'Whatsapp isi dengan benar',
        // email:"Harus diisi dengan format email yang benar",
        source: "Harap pilih source"
    },
    errorPlacement:function(t,n)
    {
        $(n).parents('.alist').find('label.error').remove();
        $(n).parents('.alist').append(t);
        // console.log(n);
    }
    
}

// validate form
// $('#form-add-customers').validate(
// {
//     rules:{
//         name:{
//             required:!0,
//             minlength:3,
//             normalizer:r,
//         },
//         phone:{
//             required:!0,
//             normalizer:r,
//             number: true,
//             minlength:8
//         },
//         email:{
//             customemail:!0,
//             required:  {
//                 depends:function(t){
//                     return $(t).prop("required")
//                 }
//             }
//         },
//         source:{
//             selectoptmin: "-1"
//         }
//     },
//     messages:{
//         name:'Harus diisi sekurangnya 3 karakter',
//         phone: 'Whatsapp isi dengan benar',
//         // email:"Harus diisi dengan format email yang benar",
//         source: "Harap pilih source"
//     },
//     errorPlacement:function(t,n)
//     {
//         $(n).parents('.alist').find('label.error').remove();
//         $(n).parents('.alist').append(t);
//         // console.log(n);
//     }
// });

//ceking submit
function ceksubmitcustomers(t)
{
    var form = t,
    modal = form.parents('.modal.show'),
    button = modal.find('button.modal-submit'),
    open = form.find('input[name="open"]').val();

    if( button.attr('role') === 'off')
    {
        button.attr('role', 'on');
        form.find('.form-control.error').removeClass('error');
        form.find('label.error').remove();


        // sending
        $.ajax({
            url: config.apps.URL_API + '/api/customers/manage/add',
            type: 'POST',
            timeout: 18000,
            headers:{
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + getToken()
                "key":getaccount().key
            },
            data: formdatasend(form), //JSON.stringify(datasend),
            dataType: 'JSON',
            success: function(n)
            {
                
                // console.log(n);
                // refreshCookie(n.refresh);
                if( form.find('input[name="type"]').val() === 'add')
                {
                    defaultmodalform(modal);
                }
                else
                {
                    modal.find('button[data-dismiss="modal"]').click();
                    $('#form-table').submit();
                    flagnotif('success',n.success);
                    return;
                }
                if( open === 'slide-customer' )
                {
                    modal.find('button[data-dismiss="modal"]').click();
                    // console.log( open )
                    //load get customer in widget
                    var slide = widget.find('li#' + open );
                    getcustomerwidget(slide);
                
                }
                else
                {
                    // modal.find('button[data-dismiss="modal"]').click();
                    // loadtable();
                    $('#form-table').submit();
                    button.attr('role', 'off');
                    flagnotif('success',n.success);
                    
                }
                
                
                
                
            },
            error: function(n)
            {
                // console.log(n);
                // console.log(n.responseJSON.message);
                
                
                // //response
                var response = n.responseJSON;

                button.attr('role', 'off');
                // // refresh
                // refreshCookie(response.refresh);
                

                // //
                form.find('*[name="'+response.error.focus+'"]').removeClass('valid');
                form.find('*[name="'+response.error.focus+'"]').attr('aria-invalid','true');
                form.find('*[name="'+response.error.focus+'"]').addClass('error');
                form.find('*[name="'+response.error.focus+'"]').parents('.alist').append('<label class="error">'+response.error.message+'</label>');
                form.find('*[name="'+response.error.focus+'"]').focus();
                
            }
        });

    }


}


// END FORM CUSTOMERS




// MODAL MESSAGE BOX
$('body').on('click', '[data-target="#msgboxDelOrder"]', function(e)
{

    var cmd = $(this),
    target = cmd.attr('data-target'),
    el = target.replace('#', '');

    var content = contentModal(target);

    $(target).find('.modal-body').html( content );

    $(target).find('.modal-header').addClass('no-br');
    $(target).find('.modal-header button').addClass('hide');
    
    $(target).find('.modal-body').addClass('msg-box-body center fsize15');
    $(target).find('.modal-body').html('Anda yakin ingin menghapus orderan ' + cmd.attr('data-invoice') + '?');
    $(target).find('.modal-footer').addClass('no-br');
    $(target).find('.modal-footer .ic').addClass('hide');
    $(target).find('button.del').addClass('msgbox-close');
    $(target).find('button.del .lbl').html('BATAL');
    $(target).find('button.modal-submit .lbl').html('YA, HAPUS');
    $(target).find('button.modal-submit').attr('dataid',cmd.attr('dataid'));
    $(target).attr('aria-delete', 'true');
    cmd.parents('.dropdown').find('button').click();
    
});


$('body').on('click', '.new-modal.show button.msgbox-close', function(e)
{
    e.preventDefault();

    var cmd = $(this),
    msg = cmd.parents('.new-modal.show');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        msg.find('button[data-dismiss="modal"]').click();
        cmd.attr('role', 'off');
    }


});

