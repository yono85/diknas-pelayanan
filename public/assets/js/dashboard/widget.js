// WIDGET =========>

// CONFIG WIDGET
var confwidget = 
{
    'slide' : {
        'product' : {
            'widthWg'       : 'w680',  
            'loadWg'        : 'false',
            'li'            : 'slide-product',
            'liRole'        : 'off',
            'title'         : 'Produk',
            'titleBack'     :   '',
            'buttonTitle'   :   'Pilih Customer',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'customer',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Produk',
            'buttonBack'    :   'false',
            'load'          :   'true',
            'inarbodyRole'  :   'false'
        },
        'product-stock' : {
            'widthWg'       : 'w680',  
            'loadWg'        : 'false',
            'li'            : 'slide-product-stock',
            'liRole'        : 'off',
            'title'         : 'Produk',
            'titleBack'     :   '',
            'buttonTitle'   :   'Keranjang',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'cart',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Produk',
            'buttonBack'    :   'false',
            'load'          :   'true',
            'inarbodyRole'  :   'false'
        },
        'customer' : {
            'widthWg'       : 'w680', 
            'loadWg'        : 'false',
            'li'            :   'slide-customer',
            'liRole'        :   'on',
            'title'         :   'Customer',
            'titleBack'     :   'Produk',
            'buttonTitle'   :   'Keranjang',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'cart',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Produk',
            'buttonBack'    :   'true',
            'load'          :   'true',
            'inarbodyRole'  :   'false'
        },
        'cart': {
            'widthWg'       : 'w680', 
            'loadWg'        : 'false',
            'li'            : 'slide-cart',
            'liRole'        :   'on',
            'title'         : 'Keranjang',
            'titleBack'     :   'Customer',
            'buttonTitle'   :   'Checkout',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': '',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'checkout': {
            'widthWg'       : 'w680', 
            'loadWg'        : 'false',
            'li'            : 'slide-checkout',
            'liRole'        :  'on',
            'title'         :  'Checkout',
            'titleBack'     :  'Keranjang',
            'buttonTitle'   :  'Pembayaran',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :  'payment',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Keranjang',
            'buttonBack'    :   'true',
            'load'          :  'true',
            'inarbodyRole'  :  'false'
        },
        'payment': {
            'widthWg'       : 'w680', 
            'loadWg'        : 'false',
            'li'            : 'slide-payment',
            'liRole'        :  'on',
            'title'         :  'Pembayaran',
            'titleBack'     :  'Checkout',
            'buttonTitle'   :  'Bayar Sekarang',
            'buttonIcon'    :  '',
            'buttonColor'   :  'orangered',
            'buttonNext'    :  'paid',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Checkot',
            'buttonBack'    :  'false',
            'load'          :  'false',
            'inarbodyRole'  :  'false'
        },
        'preview': {
            'widthWg'       : 'w480',
            'loadWg'        : 'false',
            'li'            : 'slide-preview',
            'liRole'        :  'on',
            'title'         :  'Status Order',
            'titleBack'     :  'Checkout',
            'buttonTitle'   :  'Bayar Sekarang',
            'buttonIcon'    :  '',
            'buttonColor'   :  'orangered',
            'buttonNext'    :  'paid',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Checkot',
            'buttonBack'    :  'false',
            'load'          :  'false',
            'inarbodyRole'  :  'false'
        },
        'checkorders':{
            'widthWg'       : 'w680',
            'loadWg'        : 'false',
            'li'            : 'slide-cart',
            'liRole'        :   'off',
            'title'         : 'Check',
            'titleBack'     :   'Produk',
            'buttonTitle'   :   'Next Check',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Keranjang',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'notfound':{
            'widthWg'       : 'w680',
            'loadWg'        : 'false',
            'li'            : 'slide-cart',
            'liRole'        :   'off',
            'title'         : 'Not Found',
            'titleBack'     :   '',
            'buttonTitle'   :   'Next Check',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Keranjang',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'vcheckverif':{
            'widthWg'       : 'w480',
            'loadWg'        : 'true',
            'li'            : 'Check',
            'liRole'        :  'off',
            'title'         : 'Not Found',
            'titleBack'     :   '',
            'buttonTitle'   :   'Next Check',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Keranjang',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'bulking-new':{
            'widthWg'       : 'w720',
            'loadWg'        : 'false',
            'li'            : 'slide-bulking',
            'liRole'        :  'off',
            'title'         : 'Pembayaran Bulking',
            'titleBack'     :   '',
            'buttonTitle'   :   'Pembayaran',
            'buttonIcon'    :  'flaticon2-right-arrow',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': '',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'partner-new':{
            'widthWg'       : 'w720',
            'loadWg'        : 'false',
            'li'            : 'slide-partner',
            'liRole'        :  'off',
            'title'         : 'Tambah Partner',
            'titleBack'     :   '',
            'buttonTitle'   :   'Simpan',
            'buttonIcon'    :  'sli_icon-check',
            'buttonColor'   :  '',
            'buttonNext'    :   'cmd-create-partner',
            'buttonNextDisabled'    :   'false',
            'buttonBackTitle': '',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'product-new':{
            'widthWg'       : 'w720',
            'loadWg'        : 'false',
            'li'            : 'slide-product',
            'liRole'        :  'off',
            'title'         : 'Tambah Produk',
            'titleBack'     :   '',
            'buttonTitle'   :   'Simpan',
            'buttonIcon'    :  'sli_icon-check',
            'buttonColor'   :  '',
            'buttonNext'    :   'cmd-create-partner',
            'buttonNextDisabled'    :   'false',
            'buttonBackTitle': '',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        'payment-bulking': {
            'widthWg'       : 'w720', 
            'loadWg'        : 'true',
            'li'            : 'slide-payment-bulking',
            'liRole'        :  'on',
            'title'         :  'Pembayaran Bulking',
            'titleBack'     :  'Checkout',
            'buttonTitle'   :  'Bayar Sekarang',
            'buttonIcon'    :  '',
            'buttonColor'   :  'orangered',
            'buttonNext'    :  'paid-bulking',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Checkot',
            'buttonBack'    :  'false',
            'load'          :  'false',
            'inarbodyRole'  :  'false'
        },
        'vcheckbulking':{
            'widthWg'       : 'w720',
            'loadWg'        : 'true',
            'li'            : 'Check',
            'liRole'        :  'off',
            'title'         : 'Not Found',
            'titleBack'     :   '',
            'buttonTitle'   :   'Next Check',
            'buttonIcon'    :  'sli_icon-arrow-right',
            'buttonColor'   :  '',
            'buttonNext'    :   'checkout',
            'buttonNextDisabled'    :   'true',
            'buttonBackTitle': 'Keranjang',
            'buttonBack'    :   'false',
            'load'          :   'false',
            'inarbodyRole'  :   'false'
        },
        // 'veriforder':{
        //     'widthWg'       : 'w520',
        //     'loadWg'        : 'false',
        //     'li'            : 'slide-cart',
        //     'liRole'        :   'off',
        //     'title'         : 'Not Found',
        //     'titleBack'     :   '',
        //     'buttonTitle'   :   'Next Check',
        //     'buttonIcon'    :  'sli_icon-arrow-right',
        //     'buttonColor'   :  '',
        //     'buttonNext'    :   'checkout',
        //     'buttonBackTitle': 'Keranjang',
        //     'buttonBack'    :   'false',
        //     'load'          :   'false',
        //     'inarbodyRole'  :   'false'
        // }
    },
    'component': {
        'textsearch'    :   '',
        'searchstatus'  :   0
    }
}


// WIDGET EL

function widgetEl(el)
{
    //
    var confwg = confwidget.slide[el];

    //
    var widget = '';
    widget += '<div class="new-media area-widget show" aria-load="'+confwg.loadWg+'"><div class="bck"></div>';

        widget += '<div class="inar"> <div class="inar-box"><div class="box '+confwg.widthWg+'">';

        widget += '<div class="load"><div class="tbl"><div class="intbl"><img src="/assets/svg/loading.blue.svg" alt="loading"></div></div></div>';

        widget += '<div class="area-box">';
        
            widget += '<button class="nav l cmd-back-boxslide" role="off" data-role="false"><div class="tbl"><div class="intbl"><span class="fa flaticon2-left-arrow"></span><span class="nav-title"></span></div></div></button>';

            widget += '<button class="nav r cmd-close-boxslide" role="off" data-role="true"><div class="tbl"><div class="intbl"><span class="fa flaticon2-cross"></span></div></div></button>';

            widget += '<ul class="ul-slide"></ul>';

            widget += '<div class="area-form hide"></div>';

        widget += '</div>';

        widget += '</div></div></div></div>';

    $('body').append(widget);
}



// END WIDGET EL

//BOX SLIDE 
function boxslideli(e,w)
{

    var confwg = confwidget.slide[e];

    //
    w.find('button.nav.l span.nav-title').html( confwg.buttonBackTitle );
    w.find('button.nav.l').attr('data-role', confwg.buttonBack);

    var li = '';
        li += '<li role="'+confwg.liRole+'" class="slide" id="'+confwg.li+'" aria-load="'+confwg.load+'" data-title-back="'+confwg.titleBack+'"><div class="in-slide">';
        li += '<div class="head"><div class="tbl"><div class="intbl"><b>'+confwg.title+'</b></div></div></div>';
        li += '<div class="in-body">';
            // li += '<div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';
            li += '<div class="ar-body">';
                li += '<div class="inar-body" role="'+confwg.inarbodyRole+'">';

                    // inbody slide widget

                    // li += '<div class="ar-card-r10"><div class="ar-card area-product">';

                    //     li += '<div class="x-card c3"><a href="#" class="afalse in-card cmd-select-pd" dataid="1" role="off">';
                    //         li += '<div class="scrn"></div>';
                    //         li += '<div class="card-top">';
                    //                 li += '<div class="selected"><div class="tbl"><div class="intbl"><span class="fa flaticon2-check-mark"></span></div></div></div>';

                    //                 li += '<div class="inar-top"><div class="ar-img"><img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/10/6079421/6079421_52a030dc-5947-43ba-b5a7-43603e87c75d_1152_1152" alt="" ></div></div>';

                    //         li += '</div>';

                    //         li += '<div class="card-bottom"><div class="div"><b>Magastrol</b></div><div class="div"><span class="price">Rp140.000</span><span class="price-dash">Rp160.000</span></div></div>';

                    //     li += '</a></div>';

                    // li += '</div></div>';

                li += '</div>';

                li += '<div class="navi area-navi">';
                    li += '<div class="fl-left">';

                        // footer widget left
                        // li += '<div class="div ar-info"><div class="div"><b class="value-item">0</b> <span class="label">item</span></div><div class="div"><span>Produk terpilih</span></div></div>';

                    li += '</div>';

                    li += '<div class="fl-right"><button class="wic cmd-next-slide '+confwg.buttonColor+'" data-next="'+confwg.buttonNext+'" data-back="'+confwg.buttonBackTitle+'" role="off" '+(confwg.buttonNextDisabled === 'true' ? 'disabled="disabled"' : '')+'><span>'+confwg.buttonTitle+'</span><span class="ic '+confwg.buttonIcon+'"></span></button></div>';

                li += '</div>';
            li += '</div>';
        li += '</div>';
        li += '</div></li>';

    return li;
}



// BOX SLIDE NEW
function boxSlideLiNew(e,w)
{

    var confwg = confwidget.slide[e];

    //
    w.find('button.nav.l span.nav-title').html( confwg.buttonBackTitle );
    w.find('button.nav.l').attr('data-role', confwg.buttonBack);

    var li = '';
        li += '<li role="'+confwg.liRole+'" class="slide" id="'+confwg.li+'" aria-load="'+confwg.load+'" data-title-back="'+confwg.titleBack+'"><div class="in-slide">';
        li += '<div class="head"><div class="tbl"><div class="intbl"><b>'+confwg.title+'</b></div></div></div>';
        li += '<div class="in-body">';
            // li += '<div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';
            li += '<div class="ar-body">';
                li += '<div class="inar-body" role="'+confwg.inarbodyRole+'">';

                    // inbody slide widget

                    // li += '<div class="ar-card-r10"><div class="ar-card area-product">';

                    //     li += '<div class="x-card c3"><a href="#" class="afalse in-card cmd-select-pd" dataid="1" role="off">';
                    //         li += '<div class="scrn"></div>';
                    //         li += '<div class="card-top">';
                    //                 li += '<div class="selected"><div class="tbl"><div class="intbl"><span class="fa flaticon2-check-mark"></span></div></div></div>';

                    //                 li += '<div class="inar-top"><div class="ar-img"><img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/4/10/6079421/6079421_52a030dc-5947-43ba-b5a7-43603e87c75d_1152_1152" alt="" ></div></div>';

                    //         li += '</div>';

                    //         li += '<div class="card-bottom"><div class="div"><b>Magastrol</b></div><div class="div"><span class="price">Rp140.000</span><span class="price-dash">Rp160.000</span></div></div>';

                    //     li += '</a></div>';

                    // li += '</div></div>';

                li += '</div>';

                li += '<div class="navi area-navi">';
                    li += '<div class="fl-left">';

                        // footer widget left
                        // li += '<div class="div ar-info"><div class="div"><b class="value-item">0</b> <span class="label">item</span></div><div class="div"><span>Produk terpilih</span></div></div>';

                    li += '</div>';

                    li += '<div class="fl-right"><button class="green wic cmd-next-slide is-loading '+confwg.buttonColor+'" data-next="'+confwg.buttonNext+'" data-back="'+confwg.buttonBackTitle+'" role="off" '+(confwg.buttonNextDisabled === 'true' ? 'disabled="disabled"' : '')+'><span>'+confwg.buttonTitle+'</span><span class="ic '+confwg.buttonIcon+'"></span></button></div>';

                li += '</div>';
            li += '</div>';
        li += '</div>';
        li += '</div></li>';

    return li;
}


function fromInWidget(e,el)
{
    var widget = e;

    if( el === 'orders')
    {

        var frm = '';
            frm += '<form action="/api/orders/widget/new" class="hide" id="form-order">';
    
                frm += '<input type="hidden" value="" name="order_type" >';
                frm += '<input type="hidden" value="" name="order_item">';
                frm += '<input type="hidden" value="" name="customer_id">';
                frm += '<input type="hidden" value="" name="order_id" >';
    
                // <!-- shiping -->
                frm += '<input type="hidden" value="0" name="origin_id" >';
                            
                            
                frm += '<input type="hidden" value="0" name="weight_calc">';
    
                // <!-- courier -->
                frm += '<input type="hidden" value="0" name="courier_id" >';
                frm += '<input type="hidden" value="0" name="courier_price" >';
                frm += '<input type="hidden" value="0" name="weight">';
                frm += '<input type="hidden" value="no" name="cod_status" >';
    
                // payment
                frm += '<input type="hidden" value="0" name="payment_id">';
    
                // voucher / promo
                frm += '<input type="hidden" value="0" name="voucher_id">';
                frm += '<input type="hidden" value="0" name="potongan">';
    
                // <!-- checkout -->
                frm += '<input type="hidden" value="0" name="total">';
                frm += '<input type="hidden" value="0" name="uniq">';
                            
                frm += '<input type="hidden" value="0" name="destination_id">';
            frm +='</form>';
    }

    return widget.find('.area-form').html(frm);
}

// MODAL IN WIDGET ====================>

//open modal in widget
var confinmodalwidget = 
{
    'product' : {
        'title'         :   'Produk',
        'load'          :   'true',
        'header'        :   'true',
        'foot'          :   'true',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-product'
    },
    'courier': {
        'title'         :   'Kurir Pengiriman',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-courier'
    },
    'address':{
        'title'         :   'Alamat Pengiriman',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-address'
    },
    'voucher' : {
        'title'         :   'Promo',
        'load'          :   'false',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-voucher'
    },
    'detail-payment' : {
        'title'         :   'Detail Pembayaran',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-detail-payment'
    },
    'detail-order-bulking' : {
        'title'         :   'Daftar Order',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-detail-payment'
    },
    'method-payment':{
        'title'         :   'Metode Pembayaran',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-method-payment'
    },
    'method-payment-bulking':{
        'title'         :   'Metode Pembayaran',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-method-payment'
    },
    'origin':{
        'title'         :   'Lokasi Pengiriman',
        'load'          :   'true',
        'header'        :   'false',
        'foot'          :   'false',
        'buttonLabel'   :   'simpan',
        'id'            :   'inmodal-origin'
    }
}


// template inmodal widget
function inmodalwidget(e)
{
    var conf = confinmodalwidget[e];


    var inmodal = '';

    inmodal += '<div class="inmodal modal-widget" aria-load="'+conf.load+'"><div class="boxmodal"><div class="inboxmodal inmodal-widget"  id="'+conf.id+'"><div class="arboxmodal" data-foot="'+conf.foot+'">';

    inmodal += '<div class="head"><div class="tbl"><div class="intbl"><div class="div"><span class="wg-modal-title">'+conf.title+'</span><button role="off" class="cmd-close-mw br-rds8 nobr"><span class="fa flaticon2-down"></span></button></div></div></div></div>';

    inmodal += '<div class="bdy" aria-hd="'+conf.header+'">';
    
        inmodal += '<div class="header">';
            inmodal += '<div class="tbl"><div class="intbl"><div class="ar-text area-search"><input type="text" placeholder="Cari..." class="search-inmodal"><button role="off" class="cmdclear-srcinmodal"><span class="sli_icon-close"></span></button></div></div></div>';
        inmodal += '</div>';

        inmodal += '<div class="inbdy">';

            inmodal += '<div class="inload"><img src="/assets/svg/loading.blue.svg" alt="loading"></div>';
            
            inmodal += '<ul class="ul-inmodal area-inmodal-list"></ul>';

        inmodal += '</div>';

    inmodal += '</div>';

    // footer
    inmodal += '<div class="foot">';

        inmodal += '<form action="/api/orders/widget/additem" class="hide"><input name="inmodal_item" value="" /></form>';
        inmodal += '<div class="tbl"><div class="intbl"><div class="div clr-float"><button role="on" class="cmd-submit-inmodal"><span class="ic flaticon2-check-mark"></span> <span>'+conf.buttonLabel+'</span></button></div></div></div>';
    
    inmodal += '</div>';

    inmodal += '</div></div></div></div>';

    return inmodal;
}


// MODAL - SLIDE PAYMENT ===>




// FUNCTION ALL ORDERS ====>

//
// SLIDE PRODUCT ===>
// ===

// get product in modal iner widget
function getproductinmodal(e)
{
    var widget = e,
    modal = widget.find('.modal-widget'),
    form = widget.find('form#form-order');

    //
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/product/list/widgetmodal?id=' + form.find('input[name="order_id"]').val() + '&level=' + getaccount().level,
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
            // console.log(response);

            var li = '';
            $.each(response.list, function(i, item)
            {
                // var price = item.price_show === 'p' ? item.price : item.price_reseller;


                var price = form.find('input[name="order_type"]').val() === '3' ? item.price_reseller : item.price;

                li += '<li class=""><a href="#" class="';
                li += i % 2 === 0 ? '' : 'sling';
                li += ' cmd-select-inmodal" role="off" dataid="'+item.id+'"><table><tbody><tr>';

                li += '<td class="w-check"><span class="ar-ic"><div class="tbl"><div class="intbl"><span class="ic flaticon2-check-mark"></span></div></div></span></td>';

                li += '<td class="w-img-p"><div class="ar-img"><div class="arimage-resize"><img src="'+item.image+'" alt="image"></div></div></td>';

                li += '<td class="w-full info"><div class="tbl"><div class="intbl"><div class="div"><div class="div"><span class="name">'+item.name+'</span></div><div class="div price"><span>'+formatRupiah(price, 'Rp')+'</span></div></div></div></div></td>';

                li += '</tr></tbody></table></a></li>';
            });

            // console.log(n);
            modal.find('.area-inmodal-list').html(li);

            //
            modal.attr('aria-load', 'false');
        },
        error: function(n)
        {
            
            console.log(n);
            modal.find('.inbdy').append('<div class="empty"><div class="div"><span class="ic sli_icon-bag"></span></div><div class="div"><span>'+n.responseJSON.message+'</span></div></div>');
            modal.attr('aria-load', 'false');
        }
    })
}

function elproductwidget(e)
{
    var confwg = confwidget.slide[e];
    var area = $('body').find('li#'+confwg.li),
    body = area.find('.inar-body'),
    foot = area.find('.area-navi');

    
    var inbody = '';
    inbody += '<div class="ahead"><div class="fl-left"><div class="div"><div class="asrc clr-float area-search" role="false"><div class="iasrc"><input type="text" placeholder="Cari..." name="search_wg" aria-filnum="true"><button role="off" class="clear cmdclear-search-wg"><span class="sli_icon-close"></span></button></div><button role="off" class="search-wg cmdsearch-wg grey"><span class="sli_icon-magnifier"></span></button></div></div></div></div>';

    inbody += '<div class="insed-body"><div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div><div class="arinsed"><div class="div"><div class="ar-card-r15"><div class="ar-card area-product"></div></div></div></div></div>';

    var infoot = '';
    infoot += '<div class="div ar-info"><div class="tbl"><div class="intbl"><div class="div"><b class="value-item">0</b> <span class="label">Produk dipilih</span></div></div></div></div>';

    area.find('.inar-body').html(inbody);
    
    foot.find('.fl-left').html(infoot);


    //get product
    getproductwidget(area)
    
    
}



function getproductwidget(e)
{
    var slide = e,
    area = slide.find('.area-product'),
    src = slide.find('input[name="search_wg"]').val(),
    paging = slide.find('input[name="paging_wg"]').val(),
    companyid = getaccount().config.company_id,
    widget = slide.parents('.area-widget'),
    type = widget.find('form input[name="order_type"]').val();


    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/product/list/widget?type='+type+'&companyid='+companyid+'&src=' + src + '&paging=' + paging + '&level=' + getaccount().level,
        cache: false,
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            slide.attr('aria-load', 'false');
            
            // console.log(slide.attr('id'));

            var li = '';
            $.each(n.response.list, function(i, item)
            {
                // var price = item.price; //item.price_show === 'p' ? item.price : item.price_reseller;

                var price = type === '3' ? item.price_reseller : item.price;


                li += '<div class="x-card c3"><a href="#" class="afalse in-card cmd-select-pd" dataid="'+item.id+'" role="off">';
                li += '<div class="scrn"></div>';
                li += '<div class="card-top">';

                    li += '<div class="selected"><div class="tbl"><div class="intbl"><span class="fa flaticon2-check-mark"></span></div></div></div>';

                    li += '<div class="inar-top"><div class="ar-img"><img src="'+item.image+'" alt="" ></div></div>';

                li += '</div>';

                li += '<div class="card-bottom"><div class="div area-name"><div class="tbl"><div class="intbl"><div class="div"><b>'+item.name+'</b></div></div></div></div><div class="div area-price"><span class="price-dash"></span><span class="price">'+formatRupiah( parseFloat(price) ,'Rp')+'</span></div></div>';

                li += '</a></div>';

            });

            area.html(li);
            
        },
        error: function(n)
        {

            console.log(n);
            slide.attr('aria-load', 'false');

            area.html('<div class="card-error"><div class="div"><span class="ic fa flaticon-danger"></span></div><div class="div">'+ ( n.status === 404 ? n.responseJSON.message : config.error.message_refresh ) +'</div></div>');
            
        }
    });

}

//==
// END SLIDE PRODUCT ===>



// ==
// SLIDE CUSTOMERS ===>

// element customer
function elcustomerwidget(e)
{

    var widget = e,
    area = widget.find('li#slide-customer'),
    body = area.find('.inar-body');
    // foot = area.find('.area-navi');


    var inbody = '';
    inbody += '<div class="ahead">';
    inbody += '<div class="fl-left"><div class="div"><div class="asrc clr-float area-search" role="false"><div class="iasrc"><input type="text" placeholder="Cari..." name="search_wg" aria-filnum="true"><button role="off" class="clear cmdclear-search-wg"><span class="sli_icon-close"></span></button></div><button role="off" class="search-wg cmdsearch-wg grey"><span class="sli_icon-magnifier"></span></button></div></div></div>';
    inbody += '<div class="fl-right"><button role="off" class="new-add orange cmd-add-customer rds4" role="off" data-togglex="modal" data-target="#modalcustomers" data-open="slide-customer" data-type="add"><div class="div"><div class="sli_icon-user"></div><span class="ic-abs fas fa-plus"></span></div></button></div>';
    inbody +='</div>';

    inbody += '<div class="insed-body"><div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div><div class="arinsed"><div class="div"><div class="ar-card-r10"><div class="ar-card area-customer"></div></div></div></div></div>';


    body.html(inbody);
    
    // console.log('customers xxx');

    //get product
    getcustomerwidget(area);
    
}


function getcustomerwidget(e)
{

    var slide = e,
    area = slide.find('.area-customer'),
    src = slide.find('input[name="search_wg"]').val(),
    paging = slide.find('input[name="paging_wg"]').val(),
    companyid = getaccount().config.company_id;


    //get
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/customers/list/widget?companyid='+companyid+'&src=' + src + '&pg=' + paging + '&level=' + getaccount().level + '&sublevel=' + getaccount().sublevel + '&id=' + getaccount().id,
        cache: false,
        headers: {
            'Content-Type': 'application/json',
            'key':getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);

            slide.attr('aria-load', 'false');
            
            var li = '';
            $.each(n.response.list, function(i, item)
            {

                li += '<div class="x-card c2"><a href="#" class="afalse in-card cmd-select-customer pd15" dataid="'+item.id+'" role="off"><div class="scrn"></div>';

                    li += '<div class="selected"><div class="tbl"><div class="intbl"><span class="fa flaticon2-check-mark"></span></div></div></div>';

                    li += '<div class="div clr-float"><div class="fl-left"><div class="img-box"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div></div>';

                    li += '<div class="fl-left inf-box"><div class="tbl"><div class="intbl"><div class="div"><div class="div"><b>'+item.name+'</b></div><div class="div"><span class="ic sli_icon-screen-tablet"></span><span>'+item.phone+'</span></div></div></div></div></div></div>';

                li += '</a></div>';
                
            });

            area.html(li);
            //
            // console.log(n);
        },
        error: function(n)
        {

            slide.attr('aria-load', 'false');

            area.html('<div class="card-error"><div class="div"><span class="ic fa flaticon-danger"></span></div><div class="div">'+ ( n.status === 404 ? n.responseJSON.message : config.error.message_refresh ) +'</div></div>');
            //
            console.log(n);
        }
    });

}

// END SLIDE CUSTOMERS ===>
// ==


//
// SLIDE CART ==>
//


var configorders = {
    'status'       : 1
}

function elcartwidget(e,type,n)
{

    

    var widget = e,
    form = widget.find('#form-order'),
    slide = widget.find('li#slide-cart');

    widget.attr('aria-load', 'true');

    //
    var area = e.find('li#slide-cart'),
    body = area.find('.inar-body'),
    foot = area.find('.area-navi');

    //
   

    //
    var inbody = '';
    inbody += '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

            inbody += '<div class="fl-left"><div class="ximg"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div><div class="fl-left"><div class="div"><div class="div name customer_name"><b>customer_name</b></div><div class="div label num"><span class="ic sli_icon-screen-tablet"></span><span class="customer_phone">0</span></div></div></div></div>';

            inbody += '<div class="fl-right"><button role="off" class="new-add cmd-modal-inwidget orange rds4" data-modal="product"><div class="div"><div class="sli_icon-bag"></div><span class="ic-abs fas fa-plus"></span></div></button></div>';

    inbody += '</div></div></div></div></div>';

    inbody += '<div class="insed-body"><div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';

        inbody += '<div class="arinsed"><ul class="area-list-cart"></ul></div>';

    inbody += '</div></div>';

    body.html(inbody);
    

    var infoot = '<div class="div ar-info"><div class="tbl"><div class="intbl"><div class="div price"><div class="div label">TOTAL HARGA</div><div class="div cart_total"><b>0</b></div></div></div></div></div>';

    foot.find('.fl-left').html(infoot);


    if( type === 'get')
    {
        li_cart(widget,form,slide,n);
    }
    else if( type === 'preview')
    {

        widget.find('.inar-body').addClass('h-full');
        widget.find('.area-navi').remove();
        var view = preview_slide(n.response);
        widget.find('.inar-body').html(view);
        widget.attr('aria-load', 'false');

    }
    else
    {
        cart_neworder(e);
    }
    // =========>
    //new
    // send new orders
    


    
}



function cart_neworder(e)
{
    var widget = e,
    form = widget.find('form#form-order');
    

    if( configorders.status === 1)
    {
        configorders.status = 0;

        //
        var slide = widget.find('li#slide-cart'),
        arealist = slide.find('ul.area-list-cart');

        $.ajax({
            type: "POST",
            url: config.apps.URL_API + form.attr('action'),
            headers: {
                'Content-Type': 'application/json',
                'key': getaccount().key
            },
            cache: false,
            timeout: 18000,
            data: formdatasend(form),
            dataType: 'JSON',
            success: function(n)
            {
                // console.log(n);
                li_cart(widget,form,slide,n.response);
                loadtableorder();
            },
            error: function(n)
            {
                console.log(n.responseJSON);
                configorders.status = 1;
            }
        });

    }
    //
    // console.log('creat new orders');
    
}

function li_cart(widget,form,slide,response)
{
    //
    var response = response,
    cart = response.cart;

    // console.log(response);

    // var paytotal = cart.payment.total; //cart.price_show === 'p' ? cart.payment.total : cart.payment.total_reseller;

    var paytotal = cart.type === 3 ? cart.payment.total_reseller : cart.payment.total;

    slide.find('.customer_name b').html(cart.customer.name);
    slide.find('.customer_phone').html(cart.customer.phone);
    slide.find('.cart_total').html( formatRupiah(paytotal, 'Rp'));

    var list = '';
    $.each(cart.item, function(i, item)
    {
        // var pprice = item.price; //cart.price_show === 'p' ? item.price : item.price_reseller;

        var pprice = cart.type === 3  ? item.price_reseller : item.price;

        list += '<li class="list-cart" dataid="'+item.id+'"><div class="div">';

            list += '<div class="div up"><div class="div clr-float">';

                list += '<div class="arimg"><div class="arimage-resize"><img src="'+item.product_image+'" alt="image"></div></div>';

                list += '<div class="arinfo"><div class="div top">'+item.product_name+'</div><div class="div"><span class="price"><b>'+( formatRupiah(pprice, 'Rp') )+'</b></span><span class="label">('+item.product_weight+' '+item.product_weight_type+')</span></div></div>';

            list += '</div></div>';

            list += '<div class="div btm"><div class="div clr-float"><div class="fl-right">';

                list += '<button class="del cmd-deleteitem rds4" role="off"><div class="fa flaticon2-trash"></div></button>';

                list += '<div class="fl-left"><div class="area-quantity">';
                
                    list += '<div class="div clr-float">';
                            list += '<button class="upt cmd-updateqtycart"';
                            list += parseFloat( item.quantity) > 1 ? '' : 'disabled="disabled"' ;
                    list += 'data-type="min" role="off">-</button>';
                            list += '<input type="text" value="'+item.quantity+'" max="'+item.product_max+'">';
                            list += '<button class="upt cmd-updateqtycart" data-type="add" role="off">+</button>';
                    list += '</div>';
                    list += '<div class="div error-qty"></div>';

                list += '</div></div>';

            list += '</div></div></div>';
        list += '</div></li>';
    });

    slide.find('ul.area-list-cart').html(list);

    form.find('input[name="order_id"]').val(response.order_id);
    form.find('input[name="customer_id"]').val(cart.customer.id);
    form.find('input[name="destination_id"]').val(cart.destination);
    form.find('input[name="total"]').val(paytotal);
    slide.find('.cmd-next-slide').removeAttr('disabled');
    configorders.status = 1;

    //load table orders
    widget.attr('aria-load', 'false');
    
}


// get cart list
function cart_getlist(e)
{
    var widget = e, //$('body').find('.area-widget.show'),
    slide = widget.find('li#slide-cart'),
    arealist = slide.find('ul.area-list-cart');

    //loading
    widget.attr('aria-load', 'true');

    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/orders/widget/cart?orderid=' + widget.find('form#form-order input[name="order_id"]').val(),
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        dataType: 'JSON',
        success: function(n)
        {

            //
            var response = n.response;

            // console.log(response);

            var total = response.payment.total; //response.price_show === 'p' ? response.payment.total : response.payment.total_reseller;

            slide.find('.customer_name b').html(response.customer.name);
            slide.find('.customer_phone').html(response.customer.phone);
            slide.find('.cart_total').html( formatRupiah(total, 'Rp'));
            widget.find('#form-order input[name="total"]').val(total);

            var list = '';
            $.each(response.item, function(i, item)
            {
                var price = item.price; //response.price_show === 'p' ? item.price : item.price_reseller;

                list += '<li class="list-cart" dataid="'+item.id+'"><div class="div">';

                    list += '<div class="div up"><div class="div clr-float">';

                        list += '<div class="arimg"><div class="arimage-resize"><img src="'+item.product_image+'" alt="image"></div></div>';

                        list += '<div class="arinfo"><div class="div top">'+item.product_name+'</div><div class="div"><span class="price"><b>'+( formatRupiah(price, 'Rp') )+'</b></span><span class="label">('+item.product_weight+' '+item.product_weight_type+')</span></div></div>';

                    list += '</div></div>';

                    list += '<div class="div btm"><div class="div clr-float"><div class="fl-right">';

                        list += '<button class="del cmd-deleteitem rds4" role="off"><div class="fa flaticon2-trash"></div></button>';

                        list += '<div class="fl-left"><div class="area-quantity">';
                        
                            list += '<div class="div clr-float">';
                                    list += '<button class="upt cmd-updateqtycart"';
                                    list += parseFloat( item.quantity) > 1 ? '' : 'disabled="disabled"' ;
                            list += 'data-type="min" role="off">-</button>';
                                    list += '<input type="text" value="'+item.quantity+'" max="'+item.product_max+'">';
                                    list += '<button class="upt cmd-updateqtycart" data-type="add" role="off">+</button>';
                            list += '</div>';
                            list += '<div class="div error-qty"></div>';

                        list += '</div></div>';

                    list += '</div></div></div>';
                list += '</div></li>';
            });

            arealist.html(list);

            // slide.find('.cmd-next-slide').removeAttr('disabled');
            //false load
            widget.attr('aria-load', 'false');

        },
        error: function(n)
        {
            console.log(n);
        }
    });


}

// update qty cart
function cart_qtywg(e)
{
    var cmd = e,
    area = cmd.parents('.area-quantity'),
    type = cmd.attr('data-type'),
    text = parseFloat(area.find('input[type="text"]').val()),
    max = parseFloat( area.find('input[type="text"]').attr('max') );

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');


        //add
        if( type === 'add')
        {

            if( text < max)
            {
                text = text + 1;
                area.find('input[type="text"]').val( text );
            }
            
            if( text === max)
            {
                cmd.attr('disabled', 'disabled');
            }
            
            if( text > 1)
            {
                area.find('button[data-type="min"]').removeAttr('disabled');
            }

            // send update cart 
            cart_updateqtywg(area);
            
        }
        else
        {
            if( text > 1)
            {
                text = text - 1;
                area.find('input[type="text"]').val( text );
                
            }

            if( text === 1)
            {
                cmd.attr('disabled', 'disabled');
            }

            if( text < max)
            {
                area.find('button[data-type="add"]').removeAttr('disabled');
            }

            // send update cart 
            cart_updateqtywg(area);
        }


        cmd.attr('role', 'off');
    }

}

// function update cart
function cart_updateqtywg(e)
{
    var area = e,
    li = area.parents('li.list-cart'),
    slide = li.parents('li#slide-cart'),
    widget = slide.parents('.area-widget.show'),
    form = widget.find('#form-order');

    // value
    var quantity = area.find('input[type="text"]').val(),
    item_id = li.attr('dataid'),
    order_id = widget.find('form input[name="order_id"]').val();

    var datasend = {'order_id': order_id,'item_id': item_id,'quantity': quantity};

    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/widget/updateqty',
        cache: false,
        timeout: 18000,
        headers: {
            'Content-Type':'application/json',
            'key':getaccount().key
        },
        data: JSON.stringify(datasend),
        dataType:'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n.response;

            // var total = response.total ; //response.price_show === 'p' ? response.total : response.total_reseller;

            var total = form.find('input[name="order_type"]').val() === '3' ? response.total_reseller : response.total;


            slide.find('.cart_total').html(formatRupiah(total,'Rp'));
            widget.find('#form-order input[name="total"]').val( total );
            
        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }
    })
    
}

// function delete item cart
function cart_deletewg(e)
{
    var cmd = e,
    area = cmd.parents('ul.area-list-cart'),
    li = cmd.parents('li.list-cart');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');

        cart_cekitem(li);
        
    }
}

function cart_cekitem(e)
{
    var li = e,
    area = li.parents('ul.area-list-cart'),
    widget = li.parents('.area-widget.show');

    //
    li.addClass('focus');


    //send info delete
    var item_id = li.attr('dataid'),
    order_id = widget.find('form input[name="order_id"]').val();

    var datasend = {'order_id': order_id,'item_id': item_id};

    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/widget/delete/item',
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        dataType: 'JSON',
        data: JSON.stringify(datasend),
        success: function(n)
        {
            // console.log(n);
            if( area.find('li').length === 1 )
            {
                var empty = '';
                empty += '<div class="cart-empty">';
                empty += '<div class="div">';
                empty += '<div class="div ic"><span class="sli_icon-bag"></span></div>';
                empty += '<div class="div"><span>Opss... Keranjang belanja kosong</span></div>';
                empty += '</div>';
                empty += '</div>';

                widget.find('.ar-body').html(empty);
            }
            else
            {

                //widget total cart
                widget.find('.cart_total').html(formatRupiah(n.total, 'Rp'));
                widget.find('#form-order input[name="total"]').val( n.total );

                li.fadeOut(500, function()
                {
                    li.remove();
                });
            }
        
             //load table orders
            loadtableorder();
        },
        error: function(n)
        {
            console.log(n.responseJSON);
            if( n.status === 404)
            {
                message = n.responseJSON.message;
            }
            else
            {
                message = '';
            }
            flagnotif({'message':message,'type':'error'});
            li.removeClass('focus');
            // li.find('button.cmd-deleteitem').attr('role', 'off');
            // console.log(n);
        }
    });
    
}
    


// END SLIDE CART


// 
// SLIDE PAID ===>

//SUBMIT PAID
function submitpaid(e)
{
    var cmd = e,
    widget = cmd.parents('.area-widget.show');

    cmd.attr('role', 'on');
    var formupload = widget.find('#form-order-confirmation');
    formupload.find('.br-error').removeClass('br-error');
    formupload.find('label.error').remove();

    widget.find('.insed-body').append('<div class="bck-white"></div>');

    //check
    if( formupload.find('input[name="confirmation_type"]').val() === '1' )
    {
        // check form upload
        if( formupload.find('input[name="file"]').val() === '')
        {
            formupload.find('.ar-img-up').addClass('br-error');
            formupload.find('.ar-img-up').parents('.lst').append('<label class="error">Harap sertakan bukti bayar</label>');
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();
            formupload.find('.ar-img-up').find('a.cmd-img-upload ').focus();
            return;
        }

        if(formupload.find('select[name="confirmation_bank"]').val() === '-1' )
        {
            formupload.find('select[name="confirmation_bank"]').parents('.lst').find('button.btn').addClass('br-error');
            formupload.find('select[name="confirmation_bank"]').parents('.lst').append('<label class="error">Pilih Transfer dari Bank</label>');
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();
            formupload.find('select[name="confirmation_bank"]').parents('.lst').find('button.btn').focus();
            return;
        }

        if( $.trim(formupload.find('input[name="confirmation_total"]').val()) === '' )
        {
            formupload.find('input[name="confirmation_total"]').addClass('br-error');
            formupload.find('input[name="confirmation_total"]').parents('.lst').append('<label class="error">Isi nominal dibayarkan</label>');
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();
            formupload.find('input[name="confirmation_total"]').focus();
            return;
        }
    }


    //
    dt_orderid = formupload.find('input[name="order_id"]').val();
    dt_file = formupload.find('input[name="file"]')[0].files[0];
    dt_name = formupload.find('input[name="confirmation_name"]').val();
    dt_type = formupload.find('input[name="confirmation_type"]').val();
    dt_bank = formupload.find('select[name="confirmation_bank"]').val();
    dt_total = formupload.find('input[name="confirmation_total"]').val();
    dt_date = formupload.find('input[name="confirmation_date"]').val();
    
    var xdt_total = dt_total !== '' ? cnumber(dt_total) : 0;

    var formData = new FormData();
    formData.append('order_id', dt_orderid);
    formData.append('file', dt_file);
    formData.append('name', dt_name);
    formData.append('bank', dt_bank);
    formData.append('type', dt_type);
    formData.append('total', xdt_total);
    formData.append('date', dt_date);

    // console.log(formData);
    $.ajax({
        type: 'POST', 
        url: config.apps.URL_API + '/api/orders/upload',
        headers:{
            // "Authorization": "Bearer " + getToken()
            // "Content-Type":"application/json",
            "key":getaccount().key
        },
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        dataType:"JSON",
        success: function(n)
        {
            // console.log(n);
            var response = n.response;
            // refreshCookie(n.refresh);


            var preview = preview_slide(response);
            widget.find('.box').addClass('w480');
            widget.find('li.slide .inar-body').html(preview);
            widget.find('.head .intbl b').html('Status Order');
            widget.find('li.slide .in-body').addClass('h-full');
            widget.find('li.slide .inar-body').addClass('h-full');
            widget.find('li.slide').find('.area-navi').remove();

            // loadtableorder();
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();
        },
        error: function(n)
        {
            console.log(n.responseJSON);
            var response = n.responseJSON;

            // // refreshCookie(response.refresh);
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();

            flagnotif('error','n',response.message);
        }
    });

    //send info paid
}

// DETAIL PAYMENT
// THIS REMOVE
function viewDetailPayment(e)
{
    var widget = e,
    form = widget.find('#form-order-confirmation');


    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/orders/vdetail?id=' + form.find('input[name="order_id"]').val(),
        headers: {
            "Content-Type":"application/json",
            "key": getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            console.log(n.response);
            var response = n.response;

            var total = response.order.type === 3 ? response.total_reseller : response.total;

            var li = '';
            li += '<li class="list-dp"><div class="div clr-float"><div class="fl-left"><span class="label">Metode Pembayaran</span></div><div class="fl-right"><span>'+response.metode+'</span></div></div></li>';

            li += '<li class="list-dp">';
                li += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Harga</span></div><div class="fl-right"><span>'+( formatRupiah( total , 'Rp') )+'</span></div></div>';

                li += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Ongkir</span></div><div class="fl-right"><span>'+( formatRupiah( response.courier.price , 'Rp') )+'</span></div></div><div class="div bx"></div>';

                
                li += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Anka uniq</span></div><div class="fl-right"><span>-'+formatRupiah(response.order.uniq, 'Rp')+'</span></div></div><div class="div bx"></div>';

                li += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Potongan</span></div><div class="fl-right"><span>Rp0</span></div></div><div class="div bx br"></div>';

                li += '<div class="div clr-float bx f14"><div class="fl-left"><b>Total Bayar</b></div><div class="fl-right color-orangered"><b>'+( formatRupiah( (parseFloat( total) + parseFloat( response.courier.price) ) , 'Rp') )+'</b></div></div>';

            li += '</li>';

            li += '<li class="list-dp">';

                li += '<div class="div ttl">Barang</div>';
                    $.each(response.item, function(i, item)
                    {
                        var itemprice = response.order.type === 3 ? item.price_reseller : item.price;
                        var totalprice = response.order.type === 3 ? item.total_reseller : item.total;

                        li += '<div class="div bx"><div class="li"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.product_name+'</span></div><div class="fl-right"><span>'+(formatRupiah( totalprice, 'Rp'))+'</span></div></div><div class="div"><span class="label">'+(item.qty)+'x '+(formatRupiah( itemprice, 'Rp'))+'</span></div></div>';
                    })
                li += '</div>';

                li += '<div class="div ttl">Kurir</div><div class="div clr-float bx"><div class="fl-left"><span>'+ response.courier.name + ' (' + response.courier.service + ')</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( response.courier.price ) , 'Rp') )+'</span></div></div>';

                li += '<div class="div ttl">Alamat Pengiriman</div><div class="div clr-float bx"><span>'+ response.address.address+', '+ response.address.kecamatan+', '+ response.address.city+', '+ response.address.provinsi+',' +response.address.kodepos+ '</span></div>';
            li += '</li>';

            widget.find('.modal-widget ul.area-inmodal-list').html(li);
            // console.log(n);
        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }
    });

    
    widget.find('.modal-widget').attr('aria-load','false');
}


// VIEW METHOD PAYMENT
function viewMethodePayment(e,el)
{
    var widget = e,
    form = widget.find('form'),
    inmodal = widget.find('.inmodal'),
    slide = el;

    var $field = config.apps.URL_API + '/api/orders/metodepayment/list?';
    $field += 'id='+form.find('input[name="order_id"]').val();
    $field += '&courier=' + form.find('input[name="courier_id"]').val();
    $field += '&cod=' + form.find('input[name="cod_status"]').val();

    inmodal.attr('aria-load', 'true');
    $.ajax({
        type: 'GET',
        url: $field, //config.apps.URL_API + '/api/orders/metodepayment/list?id=' + form.find('input[name="order_id"]').val(),
        headers: {
            'Content-Type':'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n;

            var li = '';
            $.each(response.list, function(i, item)
            {
                
                li += '<li class="list-bnk">';
                    li += '<a href="#" role="off" data-open="'+slide.attr('id')+'" class="cmd-keep-bank" datatype="'+item.type+'" dataid="'+item.id+'" data-namebank="'+item.name+'" data-name="'+item.account_name+'" data-norek="'+item.account_norek+'">';

                        li += '<span class="flaticon2-right-arrow icon"></span>';
                        li += '<div class="div clr-float">';
                            li += '<div class="aimg"><img src="'+item.images+'" alt="image"></div>';

                            li += '<div class="albl"><div class="tbl"><div class="intbl"><div class="div"><b>'+ ( item.type === 1 ? 'Transfer ' : '') + ' ' +item.name+'</b></div>';
                            
                            li += item.label === '' ? '' : '<div class="div label">'+ item.label +'</div>';

                            li += '</div></div></div>';
                        li += '</div>';
                    li += '</a>';
                li += '</li>';

            });

            

            widget.find('.modal-widget ul.area-inmodal-list').html(li);

        },
        error: function(n)
        {
            console.log(n.responseJSON);
            var response = n.responseJSON;

            var li = '<li class="empty">';
                    li+= '<div class="div"><span class="ic flaticon-danger"></span></div>';
                    li += '<div class="div"><span>'+response.message+'<br/><a href="#" role="off" class="cmd-refresh-metodepayment" >Muat ulang halaman</a></div>';
                li += '</li>';

            inmodal.attr('aria-load', 'false');
            inmodal.find('ul.area-inmodal-list').html(li);
        }
    })

    
    widget.find('.modal-widget').attr('aria-load','false');
}


// END SLIDE PAID ====>


// SLIDE PREVIEW
function preview_slide(n)
{

    console.log(n);
    var response = n;

    var customer = response.customer,
    order = response.order,
    shiping = response.shiping,
    payment = response.payment,
    product = response.item,
    destination = response.destination;

    

    // var total = order.total; // n.price_show === 'p' ? order.total : order.total_reseller;

    var total = order.type === 3 ? order.total_reseller : order.total;

    // console.log(order.type);

    var tagihan = (parseFloat(total) + parseFloat(shiping.courier_price) - parseFloat(order.uniq) );
    //
    var inbody = '';

    // head
    inbody += '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

    inbody += '<div class="fl-left"><div class="ximg"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div>';

    inbody += '<div class="fl-left"><div class="div"><div class="div name customer_name"><b>'+customer.name+'</b></div><div class="div label num"><span class="ic sli_icon-screen-tablet"></span><span class="customer_phone">'+customer.phone+'</span></div></div></div></div>';

    inbody += '</div></div></div></div></div>';


    // body
    inbody += '<div class="insed-body">';

             inbody += '<div class="arinsed">';

             inbody += '<ul class="ulist-chekcout area-list-checkout">';

                    inbody += '<li class="list-checkout area-say" ><div class="div"><div class="boxed" data-status="';
                    inbody += order.paid === 1 ? 'sc' : ( order.payment === 1 ? 'mv' : 'mp');
                    inbody += '"><div class="inboxed"><div class="div"><div class="div"><span class="ic sli_icon-clock mv"></span><span class="ic sli_icon-check sc"></span></div><div class="div lbl"><span>';
                    inbody += order.paid === 1 ? 'Berhasil' : ( order.payment === 1 ? 'Menunggu Verifikasi' : 'Menunggu Pembayaran');
                    inbody +='</span></div></div></div></div></div></li>';

                // title
                inbody += '<li class="list-checkout area-rinci" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">INVOICE</div><span>#'+order.invoice+'</span><span class="a-sel-ttl"><a href="'+order.url_cwa+'" target="_blank" class="ic-btn ic-wa"><span class="flaticon-whatsapp"></span></a><a href="#" role="off" class="ic-btn ic-cp cmd-copy-invoice" data-text="'+config.apps.URL_STORE+'/invoice/v1?token='+order.token+'"><span class="flaticon2-copy"></span></a></span></div></div>';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">TOTAL BAYAR</div><div class="div color-orangered"><b>'+formatRupiah(tagihan + parseFloat(shiping.cod_cost), 'Rp')+'</b></div><a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget" data-modal="detail-payment" dataid="10005"><span>Detail</span> <span class="ic flaticon2-down"></span></a></div></div>';
                                
                inbody += '</div></li>';

                // metode payment
                inbody += '<li class="list-checkout ar-dd-v area-bank" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="fl-left left ar-title"><div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Metode Pembayaran</span></div></div></div>';

                    inbody += '<div class="fl-left right"><div class="div">';

                    inbody += '<div class="div"><div class="div ar-v-out ar-bank-select clr-float"><div class="bank-img"><img src="'+payment.image+'" alt="" class="metode-img"></div><div class="fl-left"><div class="div"><b class="clr-b metode-name">'+payment.name+'</b></div><div class="div clr-b metode-label">'+payment.label+'</div></div></div></div>';

                    inbody += '</div></div>';

                inbody += '</div></li>';

            inbody += '</ul></div>';

    inbody += '</div>';

    
    // detail view order

    inbody += '<div class="hide vdetailorder">';
    inbody += '<li class="list-dp"><div class="div clr-float"><div class="fl-left"><span class="label">Metode Pembayaran</span></div><div class="fl-right"><span>'+payment.name+'</span></div></div></li>';

        inbody += '<li class="list-dp">';
            inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Harga</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( total ) , 'Rp') )+'</span></div></div>';

            inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Ongkir</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( shiping.courier_price ) , 'Rp') )+'</span></div></div><div class="div bx"></div>';

            inbody += '<div class="div clr-float bx '+( payment.type === 2 ? '' : 'hide')+'"><div class="fl-left"><span class="label">Biaya COD</span></div><div class="fl-right"><span>'+( formatRupiah( shiping.cod_cost, 'Rp') )+'</span></div></div><div class="div bx"></div>';

            inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Anka uniq</span></div><div class="fl-right"><span>-'+formatRupiah(order.uniq, 'Rp')+'</span></div></div><div class="div bx"></div>';

            inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Potongan</span></div><div class="fl-right"><span>Rp0</span></div></div><div class="div bx br"></div>';

            inbody += '<div class="div clr-float bx f14"><div class="fl-left"><b>Total Bayar</b></div><div class="fl-right color-orangered"><b>'+( formatRupiah( (tagihan + parseFloat( shiping.cod_cost )) , 'Rp') )+'</b></div></div>';

        inbody += '</li>';

        inbody += '<li class="list-dp">';

            inbody += '<div class="div ttl">Barang</div>';
            $.each(product, function(i, item)
            {
                var itemprice = order.type === 3 ? item.price_reseller : item.price;
                var totalprice = order.type === 3 ? item.total_resller : item.total;

                inbody += '<div class="div bx"><div class="li"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.name+'</span></div><div class="fl-right"><span>'+(formatRupiah( totalprice, 'Rp'))+'</span></div></div><div class="div"><span class="label">'+(item.qty)+'x '+(formatRupiah( itemprice, 'Rp'))+'</span></div></div>';
            })
            inbody += '</div>';

            inbody += '<div class="div ttl">Kurir</div><div class="div clr-float bx"><div class="fl-left"><span>'+ shiping.courier_name + ' (' + shiping.courier_service + ')</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( shiping.courie_price ) , 'Rp') )+'</span></div></div>';

            inbody += '<div class="div ttl">Alamat Pengiriman</div><div class="div clr-float bx"><span>'+ destination.address +', '+ destination.kecamatan+', '+ destination.city+', '+ destination.provinsi+',' +destination.kodepos+ '</span></div>';

        inbody += '</li>';
    inbody += '</div>';

    return inbody;

}




// FUNCTION GET LIST ADDRESS =====>
function imwg_address_list(e)
{
    var widget = e,
    form = widget.find('form#form-order');
    widget.find('.modal-widget').attr('aria-load','true'),
    destination_id = parseFloat(form.find('input[name="destination_id"]').val());

    //getlist address
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/customers/address/list?type='+form.find('input[name="order_type"]').val()+'&customerid=' + form.find('input[name="customer_id"]').val(),
        headers: {
            'Content-Type' : 'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n.response;

            //
            var li = '<li class="ar-add-new ';
            li += form.find('input[name="order_type"]').val() === '3' ? 'hide' : '';
            li += '"><a href="#" role="off" class="add-new" data-togglex="modal" data-target="#modaladdress" data-open="list-address" data-type="add"><span class="fas fa-plus"></span><span>Tambah Alamat Baru</span></a></li>';

            $.each(response, function(i, item)
            {

                li += '<li class="list-address" dataid="'+item.id+'" data-keep="'+ (item.keep === 1 ? 'true' : 'false') +'" data-set="'+ ( destination_id === item.id ? 'true' : 'false') +'"><div class="inr-addr">';

                    li += '<div class="div ar-button"><a href="#" role="off" class="set-addr cmd-set-address"><span>Pilih Alamat</span></a></div>';

                    li += '<div class="div"><div class="div ar-address"><div class="div max-w"><b class="clr-b">'+item.name+'</b><span class="utama">Utama</span></div><div class="div clr-b max-w">'+item.phone+'</div><div class="div"><span>'+item.address+'</span></div><div class="div">'+( item.kecamatan === '' ? '' : item.kecamatan + ' - ' )+ item.city +'</div><div class="div">'+item.provinsi+' '+ ( item.kodepos === '' ? '' : '('+item.kodepos+')') +'</div></div>';

                    li += '<div class="div inr-addr-foot clr-float ';
                    li += form.find('input[name="order_type"]').val() === '3' ? 'hide' : '';
                    li += '"><a href="#" role="off" data-type="edit" data-open="list-address" data-togglex="modal" dataid="'+item.id+'" data-target="#modaladdress">Ubah Alamat</a><a href="#" role="off" class="keep-addr cmd-keep-address">Jadikan Alamat Utama</a></div></div>';
                                                    
                li += '</div></li>';

            });

            widget.find('.modal-widget ul.area-inmodal-list').html(li);
            widget.find('.modal-widget').attr('aria-load','false');

        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }
    });
}

// FUNCTION SET ADDRESS ====>
function setaddress(e)
{
    var cmd = e,
    li = cmd.parents('.list-address'),
    modal = cmd.parents('.inmodal-widget'),
    widget = cmd.parents('.area-widget.show'),
    form = widget.find('#form-order'),
    slide = widget.find('li#slide-checkout'),
    dataid = li.attr('dataid');

    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/destination/set',
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        data: JSON.stringify({
            'order_id'      :   widget.find('form#form-order input[name="order_id"]').val(),
            'address_id'    :   dataid
        }),
        success: function(n)
        {
            // console.log(n);

            //
            slide.find('.list-checkout.area-courier').attr('role', 'false');
            form.find('input[name="destination_id"]').val(dataid);
            form.find('input[name="courier_id"]').val('0');
            form.find('input[name="courier_price"]').val('0');

            //
            totalTagihan(widget);

            //
            modal.find('button.cmd-close-mw').click();
            slide.find('.area-address .ar-address').html( li.find('.ar-address').html() );
        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }

    })
}

// FUNCTION KEEP ADDRESS ===>
function keepaddress(e)
{
    var cmd = e,
    li = cmd.parents('.list-address'),
    widget = cmd.parents('.area-widget.show'),
    dataid = li.attr('dataid');

    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/address/keepinorder',
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        cache: false,
        timeout: 18000,
        data: JSON.stringify({
            'order_id'      :   widget.find('form#form-order input[name="order_id"]').val(),
            'customer_id'   :   widget.find('form#form-order input[name="customer_id"]').val(),
            'address_id'    :   dataid
        }),
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }

    })


}




// SLIDE CHECKOUT ===>

function elCheckOutWg(e)
{
    var widget = e,
    form = widget.find('#form-order'),
    slide = widget.find('li#slide-checkout'),
    slidecart = widget.find('li#slide-cart'),
    body = slide.find('.inar-body'),
    foot = slide.find('.area-navi');

    var inbody = '';

    // head
    inbody += '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

        inbody += '<div class="fl-left">'+slidecart.find('.ahead .fl-left').html()+'</div>';

    inbody += '</div></div></div></div></div>';
    // end head


    // inarbody
    inbody += '<div class="insed-body">';

        inbody += '<div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';

        inbody += '<div class="arinsed"><ul class="ulist-chekcout area-list-checkout"></ul></div>';

    inbody += '</div>';

    var infoot = '<div class="div ar-info"><div class="tbl"><div class="intbl"><div class="div price"><div class="div label">TOTAL TAGIHAN</div><div class="div checkout-tagihan"><b>Rp0</b></div></div></div></div></div>';

    body.html(inbody);
    foot.find('.fl-left').html(infoot);

    getCheckout(slide);
    
}

// GET CHECKOUT
function getCheckout(e)
{
    var slide = e,
    widget = slide.parents('.area-widget.show'),
    form = widget.find('#form-order');


    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/checkout',
        headers: {
            'Content-Type': 'application/json',
            // "Authorization": "Bearer " + getToken()
            "key":getaccount().key
        },
        data: formdatasend(form),
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);

            var response = n.response;
            var total = response.order.type === 3 ? response.order.total_reseller : response.order.total;

            var totaltagih = parseFloat(response.order.uniq) === 0 ? (parseFloat(total) + parseFloat(response.shiping.courier_price)) : ( parseFloat(total) + parseFloat(response.shiping.courier_price) - parseFloat(response.order.uniq)) ;

            slide.find('.checkout-tagihan').html( formatRupiah( (totaltagih + parseFloat(response.shiping.cod_cost)) , "Rp") );

            form.find('input[name="uniq"]').val( response.order.uniq );
            form.find('input[name="origin_id"]').val( response.order.origin_id );
            form.find('input[name="courier_id"]').val( response.shiping.courier_id );
            form.find('input[name="courier_price"]').val( response.shiping.courier_price );
            form.find('input[name="cod_status"]').val( response.shiping.cod );
            form.find('input[name="weight"]').val( response.order.weight );
            form.find('input[name="destination_id"]').val( response.destination.id );
            form.find('input[name="payment_id"]').val( response.payment.id );

            //list
            var list = checkoutlist(response);

            //
            slide.find('.area-list-checkout').html( list );

            //
            slide.attr('aria-load', 'false');
            slide.find('.area-navi .fl-right button').removeAttr('disabled');
            //
            loadtableorder();
        },
        error: function(n)
        {
            console.log(n.responseJSON);
            var response = n.responseJSON;

            //refresh token
            // refreshCookie(response.refresh);

            slide.attr('aria-load', 'false');
        }
    })

    
   
}


// CHECKOUT LIST
function checkoutlist(e)
{

    // console.log(e);
    var data = e;

    // var total = data.order.total; //data.price_show === 'p' ? data.order.total : data.order.total_reseller;

    var total = data.order.type === 3 ? data.order.total_reseller : data.order.total;

    // console.log(data.destination);

    var li = '';
    // ==>
    // list address 


    li += '<li class="list-checkout area-address" dataid="'+data.destination.id+'" role="'+(data.destination.id !== "" ? 'true' : 'false')+'" data-keep="'+( data.destination.keep === null ? 'false' : 'true' )+'"><div class="div clr-float">';

        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="ic fa flaticon2-pin-1"></span><span>Tujuan Pengiriman</span></div></div></div>';

        li += '<div class="fl-left right"><div class="div in-address">';

            li += '<div class="div box-address"><div class="div ar-address"><div class="div"><b class="clr-b">'+data.destination.name+'</b><span class="label">('+data.destination.label+')</span><span class="utama">Utama</span></div><div class="div clr-b">'+data.destination.phone+'</div><div class="div"><span>'+data.destination.address+'</span></div><div class="div">'+data.destination.city+' - '+data.destination.kecamatan+'</div><div class="div"> '+data.destination.provinsi+' ('+data.destination.kodepos+')</div></div><div class="div nav-addr"><button role="off" class="cmd-modal-inwidget" data-modal="address">Pilih Alamat Lain</button></div></div>';
                                                                    
            li += '<div class="div arbtnaddress"><a href="#" role="off" data-togglex="modal" data-target="#modaladdress" data-open="slide-checkout" data-title="Tambah Alamat" data-type="add"><span class="fas fa-plus"></span><span>Tambah Alamat</span></a></div>';

        li += '</div></div>';

    li += '</div></li>';

    // ==>
    // list courier
    li += '<li class="list-checkout area-origin" dataid="1" role="'+ ( data.origin.id === 0 ? 'false' : 'true') +'"><div class="div clr-float">';

        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="fa flaticon2-pin-1"></span><span>Pengiriman Dari</span></div></div></div>';

        li += '<div class="fl-left right area-dropdown" role="false" aria-load="true">';

            li += '<a href="#" class="cd-select cmd-modal-inwidget" role="off" data-modal="origin"><div class="div"><div class="div inlabel"><span class="label-true"><div class="div"><div class="div"><b>'+data.origin.name+'</b></div><div class="div label">'+data.origin.label+'</div></div></span><span class="label-none">Pilih Pengirman</span></div><span class="ic"><span class="i-ddw flaticon2-down"></span><span class="i-check flaticon2-check-mark"></span></span></div></a>';

        li += '</div>';

    li += '</div></li>';


    // ==>
    // list courier
    li += '<li class="list-checkout area-courier" dataid="1" role="'+ ( parseFloat(data.shiping.courier_id) === 0 ? 'false' : 'true') +'"><div class="div clr-float">';

        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="ic fa flaticon-truck"></span><span>Kurir</span></div></div></div>';

        li += '<div class="fl-left right area-dropdown" role="false" aria-load="true">';

            li += '<a href="#" class="cd-select cmd-select-courier" role="off"><div class="div"><div class="div inlabel"><span class="label-true"><span>'+ ( formatRupiah( parseFloat(data.shiping.courier_price), "Rp") ) +'</span><span> - </span><b>'+ ( data.shiping.courier_name ) +'</b><span> ('+ ( data.shiping.courier_service ) +')</span></span><span class="label-none">Pilih Kurir</span></div><span class="ic"><span class="i-ddw flaticon2-down"></span><span class="i-check flaticon2-check-mark"></span></span></div></a>';

            li += '<div class="indropdown area-dropdown-list cmd-keep-stop"><div class="ardropdown"><div class="inload"><img src="/assets/svg/loading.blue.svg" alt="loading"></div><div class="div list-courier"></div></div></div>';

        li += '</div>';

    li += '</div></li>';


    // ==>
    // area payments

    li += '<li class="list-checkout ar-dd-v area-bank" dataid="1" role="'+ (data.payment.type === null ? 'false' : 'true') +'"><div class="div clr-float">';

        li += '<div class="fl-left left ar-title"> <div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Pembayaran</span></div></div></div>';

        li += '<div class="fl-left right"><div class="div">';

            li += '<div class="div"><div class="div ar-v-out ar-bank-select clr-float"><div class="bank-img"><img src="'+data.payment.image+'" alt="image" class="metode-img"></div><div class="fl-left">';

            li += '<div class="div"><b class="clr-b metode-name">'+data.payment.name+'</b></div><div class="div clr-b metode-label">'+data.payment.label+'</div></div></div></div>';
                                                                    
            li += '<div class="div ar-btn-out"><a href="#" role="off" class="cmd-modal-inwidget" data-modal="method-payment"><span>Pilih Pembayaran</span><span class="ic flaticon2-down"></span></a></div>';

        li += '</div></div>';

        li += '<a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget btn-outer" data-modal="method-payment"><span>Lihat Semua</span> <span class="ic flaticon2-down"></span></a>';

    li +=  '</div></li>';
    // ==>
    // area prduct item'
    

    li += '<li class="list-checkout area-listitem" dataid="1"><div class="div clr-float">';

        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="ic sli_icon-bag"></span><span>Barang</span></div></div></div>';

        li += '<div class="fl-left right"><ul>';

            $.each(data.item, function(i, item)
            {
                // var price = item.price; //item.price_show === 'p' ? item.price : item.price_reseller;

                var price = data.order.type === 3 ? item.price_reseller : item.price;

                li += '<li class="list-cart-in" dataid="1"><div class="div"><div class="div up"><div class="div clr-float"><div class="arimg"><div class="arimage-resize"><img src="'+item.image+'" alt="image"></div></div><div class="arinfo"><div class="div top">'+item.name+'</div><div class="div"><span class="price"><b>'+( formatRupiah(price, "Rp") )+'</b></span><span class="label">x'+item.qty+' ('+item.weight+' Gram)</span></div></div></div></div></div></li>';
            });

        li += '</ul></div>';

    li += '</div></li>';


    // ==>
    // area notes
    li += '<li class="list-checkout area-notes" dataid="1" role="false"><div class="div clr-float"><div class="fl-left left ar-title"><div class="tbl"><div class="intbl"><span class="ic fa flaticon-notes"></span> <span>Catatan</span></div></div></div>';

    li += '<div class="fl-left right" role="false" aria-load="true"><div class="div"><textarea name="order_notes" class="form-control" maxlength="150" placeholder="Tambahkan catatan..." autocorrect="off" spellcheck="false" autocomplete="off">'+data.order.notes+'</textarea></div></div></div></li>';


    // ==>
    // area voucher

    li += '<li class="list-checkout area-voucher" dataid="1" role="false"><div class="div clr-float">';

        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="ic fa flaticon2-percentage"></span><span>Promo</span></div></div></div>';

        li += '<div class="fl-left right area-dropdown" role="false" aria-load="true">';

            li += '<a href="#" class="cd-select cmd-modal-inwidget" role="off" data-modal="voucher">';
                li += '<div class="div">';
                    li += '<div class="div inlabel"><span class="label-true"><div class="div"><div class="div"><b>Promo Kode</b></div><div class="div label">Deskripsi</div></div></span><span class="label-none">Cari Promo disini</span></div>';
                    li += '<span class="ic"><span class="i-ddw flaticon2-down"></span><span class="i-check flaticon2-check-mark"></span></span>';
                li += '</div>';
            li += '</a>';

            li += '<div class="indropdown area-dropdown-list cmd-keep-stop"><div class="ardropdown"><div class="inload"><img src="/assets/svg/loading.blue.svg" alt="loading"></div><div class="div list-courier"></div></div></div>';

        li += '</div>';

    li += '</div></li>';

    // ==>
    // area total 
    li += '<li class="list-checkout area-total" dataid="1"><div class="div clr-float">';
            
        li += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Rincian</span></div></div></div>';

        li += '<div class="fl-left right"><div class="div">';

            li += '<div class="div tlist clr-float"><div class="fl-left">Total Harga</div><div class="fl-right checkout-total">'+ ( formatRupiah( parseFloat(total), "Rp") )+'</div></div>';

            li += '<div class="div tlist clr-float"><div class="fl-left">Total Ongkir</div><div class="fl-right checkout-ongkir">'+ ( formatRupiah( parseFloat(data.shiping.courier_price), "Rp") )+'</div></div>';

            li += '<div class="div tlist clr-float '+( data.payment.type === 2 ? '' : 'hide')+'"><div class="fl-left">Biaya COD</div><div class="fl-right checkout-cod">'+(formatRupiah( parseFloat(data.shiping.cod_cost), "Rp") )+'</div></div>';

            li += '<div class="div tlist clr-float ';
            li += data.order.uniq === 0 ? 'hide' : '';
            li +='"><div class="fl-left">Angka unik</div><div class="fl-right">-'+ ( formatRupiah( parseFloat(data.order.uniq), "Rp") )+'</div></div>';


            li += '<div class="div tlist clr-float total-tagihan"><div class="fl-left">Total Tagihan</div><div class="fl-right checkout-tagihan">';
            li += data.order.uniq === 0 ? ( formatRupiah( (parseFloat(total) + parseFloat(data.shiping.courier_price) + parseFloat(data.shiping.cod_cost) ), "Rp") ) : ( formatRupiah( ( (parseFloat(total) + parseFloat(data.shiping.courier_price) + parseFloat(data.shiping.cod_cost) ) - parseFloat(data.order.uniq) ), "Rp") );
            // li += data.order.uniq === 0 ? 'sama' : (parseFloat(data.order.total) + parseFloat(data.shiping.courier_price) - parseFloat(data.order.uniq));

            li += '</div></div>';

        li += '</div></div>';

    li += '</div></li>';


    return li;
}

// GET LIST COURIER
function getlistcourier(e)
{
    var area = e;

    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/courier/list/widget',
        cache: false,
        headers: {
            'Content-Type': 'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);

            var list = n.response;
            var li ='';
            $.each(list, function(i, item)
            {
                li += '<a href="#" role="off" dataid="'+item.id+'" class="cmd-modal-inwidget" data-modal="courier" data-wgup="'+item.weight_up+'" data-wgtype="'+item.weight_type+'"><div class="div"><span>'+item.name+'</span><span class="ic flaticon2-right-arrow"></span></div></a> ';
                
            });

            area.find('.list-courier').html(li);
            area.attr('aria-load', 'false');

            
        },
        error: function(n)
        {
            console.log(n.responseJSON);
        }
    });
}

// GET COST COURIER
function getcostcourier(e)
{
    var widget = e,
    inmodal = widget.find('.inmodal');

    var urlcourier = '';
    urlcourier += '?origin=' + widget.find('input[name="origin_id"]').val();
    urlcourier += '&destination=' + widget.find('input[name="destination_id"]').val();
    urlcourier += '&weight=' + widget.find('input[name="weight_calc"]').val();
    urlcourier += '&courier=' + widget.find('input[name="courier_id"]').val();
    urlcourier += '&otype=' + widget.find('input[name="order_type"]').val();


    // console.log(urlcourier);


    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/courier/cost' + urlcourier,
        headers: {
            'Content-Type' : 'application/json',
            'key' : getaccount().key
        },
        cache: false,
        timeout: 1800,
        dataType:'JSON',
        success: function(n)
        {
            // var response = n;
            // console.log(n);
            inmodal.attr('aria-load', 'false');

            var li = '';
            $.each(n, function(i, item)
            {

                li += '<li class="list-courier"><a href="#" dataid="'+item.courier_id+'" class="cmd-keep-costcourier" role="off" dataname="'+item.name+'" dataprice="'+item.price+'" dataservice="'+item.service+'" datacod="'+( item.cod === true ? 'yes' : 'no')+'"><div class="div clr-float"><div class="fl-left"><b>'+item.name+' - '+item.service+'</b></div><div class="fl-right label">'+formatRupiah(item.price, 'Rp')+'</div></div><div class="div label">Etd: '+item.etd+'</div></a></li>';
            })


            inmodal.find('ul.area-inmodal-list').html(li);
            
            
        },
        error: function(n)
        {  
            console.log(n.responseJSON);
            var response = n.responseJSON;

            var li = '<li class="empty"><div class="div"><span class="ic flaticon-danger"></span><span>'+ (response === undefined ? 'Maaf, Terjadi kesalahan saat memuat halaman ini. <br/><a href="#" role="off" class="cmd-refresh-costcourier" style="color:#333; text-decoration:underline;">Muat ulang halaman</a>' : response.message)+'</span></div></li>';

            inmodal.attr('aria-load', 'false');
            inmodal.find('ul.area-inmodal-list').html(li);

            
        } 
    });
    // console.log('courier selcted');
}



function OriginList(e,el)
{
    var widget = e,
    form = widget.find('#form-order'),
    slide = el,
    inmodal = widget.find('.inmodal');

    inmodal.attr('aria-load', 'true');
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/origin/list?id=' + form.find('input[name="order_id"]').val(),
        headers: {
            'Content-Type':'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n;

            var li = '';
            $.each(response.list, function(i, item)
            {
                
                li += '<li class="list-bnk">';
                    li += '<a href="#" role="off" class="cmd-keep-origin" dataid="'+item.id+'">';

                        li += '<span class="flaticon2-right-arrow icon"></span>';
                        li += '<div class="div clr-float">';

                            li += '<div class="aimg"><span class="fa flaticon2-pin-1"></span></div>';

                            li += '<div class="albl"><div class="tbl"><div class="intbl"><div class="div"><b>'+item.name+'</b></div>';
                            
                            li += '<div class="div label">'+item.label+'</div>';

                            li += '</div></div></div>';
                        li += '</div>';
                    li += '</a>';
                li += '</li>';

            });

            

            widget.find('.modal-widget ul.area-inmodal-list').html(li);
            inmodal.attr('aria-load', 'false');
        },
        error: function(n)
        {
            console.log(n.responseJSON);
            var response = n.responseJSON;

            var li = '<li class="empty">';
                    li+= '<div class="div"><span class="ic flaticon-danger"></span></div>';
                    li += '<div class="div"><span>'+response.message+'<br/><a href="#" role="off" class="cmd-refresh-origin" >Muat ulang halaman</a></div>';
                li += '</li>';

            
            inmodal.find('ul.area-inmodal-list').html(li);
            inmodal.attr('aria-load', 'false');
        }
    });



    
    widget.find('.modal-widget').attr('aria-load','false');
}


function VoucherList(e,el)
{

    var widget = e,
    form = widget.find('#form-order'),
    slide = el,
    inmodal = widget.find('.inmodal');

    inmodal.attr('aria-load', 'true');

    // console.log(getaccount() );
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/voucher/list?level='+getaccount().level+'&compid=' + getaccount().config.company_id + '&produsenid=' + getaccount().config.produsen_id,
        headers: {
            'Content-Type':'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n;

            var li = '';
            $.each(response.list, function(i, item)
            {
                
                li += '<li class="list-bnk">';
                    li += '<div class="ar-load"><div class="tbl"><div class="intbl"><img src="/assets/svg/loading.blue.svg" /></div></div></div>';

                    li += '<a href="#" role="off" class="cmd-keep-voucher" dataid="'+item.id+'">';
                    
                        li += '<span class="flaticon2-right-arrow icon"></span>';
                        li += '<div class="div clr-float">';

                            li += '<div class="aimg"><span class="fa flaticon2-percentage"></span></div>';

                            li += '<div class="albl"><div class="tbl"><div class="intbl"><div class="div"><b>'+item.name+'</b> <span>('+item.code+')</span></div>';
                            
                            li += '<div class="div label">'+item.detail+'</div>';

                            li += '</div></div></div>';
                        li += '</div>';
                    li += '</a>';
                li += '</li>';

            });

            

            widget.find('.modal-widget ul.area-inmodal-list').html(li);
            inmodal.attr('aria-load', 'false');
        },
        error: function(n)
        {
            console.log(n.responseJSON);
            var response = n.responseJSON;

            var li = '<li class="empty">';
                    li+= '<div class="div"><span class="ic fa flaticon2-percentage"></span></div>';
                    li += '<div class="div"><span>'+response.message+'</div>';
                li += '</li>';

            
            inmodal.find('ul.area-inmodal-list').html(li);
            inmodal.attr('aria-load', 'false');
        }
    });

    widget.find('.modal-widget').attr('aria-load','false');
}



// TOTAL TAGIHAN ==============>
function totalTagihan(e,n)
{
    var widget = e,
    slide = widget.find('li#slide-checkout'),
    total = parseFloat( widget.find('input[name="total"]').val() ),
    ongkir = parseFloat( widget.find('input[name="courier_price"]').val() ),
    uniq = parseFloat( widget.find('input[name="uniq"]').val() );

    var tagihan = (( total + ongkir ) - uniq);

    slide.find('.checkout-tagihan').html( formatRupiah(tagihan, 'Rp') )
    widget.find('.checkout-ongkir').html( formatRupiah(ongkir, 'Rp') );
    
}


// clear error on slide
function clearslideerror()
{
    var widget = $('body').find('.area-widget.show');
    widget.find('.btn-error').removeClass('btn-error');
    widget.find('.br-error').removeClass('br-error');
    widget.find('label.error').remove();
}


// END SLIDE CHECKOUT ===>


//==
// SLIDE PAYMENT ===>

function payment_el(el)
{
    var widget = el,
    notes = widget.find('textarea[name="order_notes"]').val();
    
    
    widget.find('ul.ul-slide').html('');

    //
    var li = boxslideli('payment',widget);
    widget.find('ul.ul-slide').html(li);
    widget.find('li.slide').attr('role', 'off');
    

    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/setpayment',
        headers: {
            'Content-Type':'application/json',
            // "Authorization": "Bearer " + getToken()
            "key":getaccount().key
        },
        data: JSON.stringify({
            'order_id':widget.find('input[name="order_id"]').val(),
            'notes': notes
        }),
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n.response;

            //refresh token
            // refreshCookie(n.refresh);

            //
            var inbody = payment_slide(response);
            widget.find('.inar-body').html(inbody);
            
            //
            widget.find('.inar-body select[name="confirmation_bank"]').selectpicker('refresh');

            //
            
            
            //
            widget.find('button[data-next="paid"]').removeAttr('disabled');
            widget.attr('aria-load', 'false');
            loadtableorder();
        },
        error: function(n)
        {
            // console.log(n);
            var response = n.responseJSON;

            //refresh token
            // refreshCookie(response.refresh);

            flagnotif('error', response.message);

            
        }
    });

}

// payment slide
function payment_slide(n)
{

    var response = n,
    customer = n.customer,
    order = n.order,
    shiping = n.shiping,
    payment = n.payment,
    product = n.item,
    destination = n.destination;

    var total = order.type === 3 ? order.total_reseller : order.total;

    var tagihan = (parseFloat(total) + parseFloat(shiping.courier_price) - parseFloat(order.uniq) );

    var inbody = '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

            inbody += '<div class="fl-left"><div class="ximg"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div>';

            inbody += '<div class="fl-left"><div class="div"><div class="div name customer_name"><b>'+customer.name+'</b></div><div class="div label num"><span class="ic sli_icon-screen-tablet"></span><span class="customer_phone">'+customer.phone+'</span></div></div></div></div>';

            inbody += '</div></div></div></div></div>';


            inbody += '<div class="insed-body">';

                inbody += '<div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';

                inbody += '<div class="arinsed"><ul class="ulist-chekcout area-list-checkout">';

                // title
                inbody += '<li class="list-checkout area-rinci" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">INVOICE</div><span>#'+order.invoice+'</span><span class="a-sel-ttl"><a href="'+config.apps.URL_SLINK+'/clickwa/orders/invoice?token='+order.token+'" target="_blank" class="ic-btn ic-wa"><span class="flaticon-whatsapp"></span></a><a href="#" role="off" class="ic-btn ic-cp cmd-copy-invoice" data-text="'+config.apps.URL_STORE+'/invoice/v1?token='+order.token+'"><span class="flaticon2-copy"></span></a></span></div></div>';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">TOTAL BAYAR</div><div class="div color-orangered"><b>'+formatRupiah((tagihan + parseFloat(shiping.cod_cost)), 'Rp')+'</b></div><a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget" data-modal="detail-payment" dataid="10005"><span>Detail</span> <span class="ic flaticon2-down"></span></a></div></div>';
                                
                inbody += '</div></li>';

                // metode payment
                inbody += '<li class="list-checkout ar-dd-v area-bank" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="fl-left left ar-title"><div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Metode Pembayaran</span></div></div></div>';

                    inbody += '<div class="fl-left right"><div class="div">';

                    inbody += '<div class="div"><div class="div ar-v-out ar-bank-select clr-float"><div class="bank-img"><img src="'+payment.image+'" alt="" class="metode-img"></div><div class="fl-left"><div class="div"><b class="clr-b metode-name">'+payment.name+'</b></div><div class="div clr-b metode-label">'+payment.label+'</div></div></div></div>';
                                
                    inbody += '<div class="div ar-btn-out"><a href="#" role="off" class="cmd-modal-inwidget" data-modal="method-payment"><span>Pilih Pembayaran</span><span class="ic flaticon2-down"></span></a></div>';

                    inbody += '</div></div>';

                    inbody += '<a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget btn-outer" data-modal="method-payment" style="display:none !important"><span>Lihat Semua</span> <span class="ic flaticon2-down"></span></a>';

                inbody += '</div></li>';

                inbody += '<li class="list-checkout area-upload" dataid="1" role="';
                inbody += payment.type === 1 ? 'true' : 'false';
                inbody += '">';

                    inbody += '<form action="/api/orders/confirmation" id="form-order-confirmation" enctype="multipart/form-data" novalidate="novalidate">';

                    inbody += '<div class="div clr-float">';

                        inbody += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="flaticon2-information"></span> <span>Konfirmasi Pembayaran</span></div></div></div>';

                            inbody += '<div class="fl-left right box-upload area-img-upload" role="false" aria-upload="false"><div class="div">';

                                inbody += '<div class="div clr-float lst">';
                                            
                                    inbody += '<div class="ar-img-up"><div class="ximg">';

                                        inbody += '<div class="inimg"><div class="arimage-resize"><img src="" alt="" class="img-upload"></div></div>';

                                        inbody += '<a href="#" role="off" class="cmd-img-upload aimg"><div class="tbl"><div class="intbl"><div class="div"><div class="div inhd aload"><img src="/assets/svg/loading.blue.svg" alt=""></div><div class="div inhd alabel"><div class="div"><span class="ic sli_icon-camera"></span></div><div class="div"><span>Pilih Gambar</span></div></div></div></div></div></a>';

                                        inbody += '<input type="file" class="hide file-upload" name="file" accept="image/*">';
                                    inbody += '</div></div>';

                                    inbody += '<div class="div"><button role="off" class="del-img cmd-delimg-upload"><span class="sli_icon-trash"></span><span>Hapus Bukti Bayar</span></button></div>';

                            inbody += '</div>';

                            inbody += '<div class="div lst"><div class="div label">Transfer dari Bank</div><div class="div"><select name="confirmation_bank" class="form-control selectpicker" data-live-search="true" >';
                            inbody += '<option value="-1">Pilih Bank</option>';
                            
                            $.each(n.bank, function(i, item)
                            {
                                inbody += '<option value="'+item.id+'">Bank '+item.label+'</option>';
                            })
                            
                            inbody += '</select></div></div>';

                            inbody += '<div class="div lst"><div class="div label">Nama Pemilik Rekening</div><div class="div"><input type="text" name="confirmation_name" class="form-control" value="" ></div></div>';

                            inbody += '<div class="div lst"><div class="div label">Tanggal Transfer</div><div class="div"><input type="date" name="confirmation_date" class="form-control" value="'+n.config.thisdate+'" date-value="'+n.config.thisdate+'"></div></div>';

                            inbody += '<div class="div lst"><div class="div label">Nominal Bayar<span style="position:absolute; right:10px; font-size:11px; color: blue;">'+formatRupiah(tagihan, '')+'</span></div><div class="div"><input type="text" name="confirmation_total" class="form-control rupiahkeyup" maxlength="15"></div></div>';

                            inbody += '</div></div></div>';
                        
                        inbody += '<input type="hidden" name="order_id" value="'+order.id+'">';
                        inbody += '<input type="hidden" name="confirmation_type" value="'+payment.type+'">';
                        inbody += '<input type="submit" value="submit" class="hide">';
                    inbody += '</form>';
                inbody += '</li>';


            inbody += '</ul></div>';

        inbody += '</div>';


        // detail view

        inbody += '<div class="hide vdetailorder">';
        inbody += '<li class="list-dp"><div class="div clr-float"><div class="fl-left"><span class="label">Metode Pembayaran</span></div><div class="fl-right"><span>'+payment.name+'</span></div></div></li>';

            inbody += '<li class="list-dp">';
                inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Harga</span></div><div class="fl-right"><span>'+( formatRupiah( total, 'Rp') )+'</span></div></div>';

                inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Ongkir</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( shiping.courier_price ) , 'Rp') )+'</span></div></div><div class="div bx"></div>';

                inbody += '<div class="div clr-float bx '+(payment.type === 2 ? '' : 'hide')+'"><div class="fl-left"><span class="label">Biaya COD</span></div><div class="fl-right"><span>'+( formatRupiah(shiping.cod_cost, "Rp") )+'</span></div></div><div class="div bx"></div>';

                inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Angka uniq</span></div><div class="fl-right">-'+( formatRupiah(order.uniq, 'Rp') )+'</div></div>';

                inbody += '<div class="div clr-float bx"><div class="fl-left"><span class="label">Total Potongan</span></div><div class="fl-right"><span>Rp0</span></div></div><div class="div bx br"></div>';

                inbody += '<div class="div clr-float bx f14"><div class="fl-left"><b>Total Bayar</b></div><div class="fl-right color-orangered"><b>'+( formatRupiah( (tagihan + parseFloat(shiping.cod_cost)) , 'Rp') )+'</b></div></div>';

            inbody += '</li>';

            inbody += '<li class="list-dp">';

                inbody += '<div class="div ttl">Barang</div>';
                $.each(product, function(i, item)
                {
                    var itemprice = order.type === 3 ? item.price_reseller : item.price;
                    var itemtotal = order.type === 3 ? item.total_reseller : item.total;

                    inbody += '<div class="div bx"><div class="li"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.name+'</span></div><div class="fl-right"><span>'+(formatRupiah( itemtotal, 'Rp'))+'</span></div></div><div class="div"><span class="label">'+(item.qty)+'x '+(formatRupiah( itemprice, 'Rp'))+'</span></div></div>';
                })
                inbody += '</div>';

                inbody += '<div class="div ttl">Kurir</div><div class="div clr-float bx"><div class="fl-left"><span>'+ shiping.courier_name + ' (' + shiping.courier_service + ')</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( shiping.courie_price ) , 'Rp') )+'</span></div></div>';

                inbody += '<div class="div ttl">Alamat Pengiriman</div><div class="div clr-float bx"><span>'+ destination.address +', '+ destination.kecamatan+', '+ destination.city+', '+ destination.provinsi+',' +destination.kodepos+ '</span></div>';

            inbody += '</li>';
        inbody += '</div>';

    return inbody;
}


// END SLIDE PAYMENT ===>




// COMPONENT SLIDE

function closeboxslide(e)
{
    var cmd = e,
    modal = cmd.parents('.area-widget');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
        modal.removeClass('show');
        modal.find('.area-box ul').html('');
        loadtableorder();
        cmd.attr('role', 'off');
    }

}


function selectsingelitem(e)
{
    var cmd = e,
    li = cmd.parents('li.slide'),
    box = li.parents('.area-box'),
    form = box.find('form');

    li.find('a').attr('role', 'off');
    cmd.attr('role', 'on');


    var list = li.find('.x-card a[role="on"]');

    
    li.find('.value-item').html('1');
    form.find('input[name="customer_id"]').val( list.attr('dataid') );
    li.find('button.cmd-next-slide').removeAttr('disabled');

}

//
function selectmanyitem(e)
{
    var cmd = e,
    li = cmd.parents('li.slide'),
    box = li.parents('.area-box'),
    form = box.find('form'),
    area = li.find('.area-product');

    if( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');
    }
    else
    {
        cmd.attr('role', 'off');
    }

    var list = [];
    area.find(".x-card a[role='on']").each(function(){
        list.push($(this).attr("dataid"));
    });

    var val = list.length === 0 ? '' : list; //JSON.stringify(list);
    
    li.find('.value-item').html(list.length);
    form.find('input[name="order_item"]').val(val);
    list.length > 0 ? li.find('button.cmd-next-slide').removeAttr('disabled') : li.find('button.cmd-next-slide').attr('disabled', 'disabled');

}


//back
function backslidebox(e)
{
    var cmd = e,
    box = cmd.parents('.area-box'),
    max = box.find('ul.ul-slide li.slide').length;

    if( cmd.attr('role') === 'off' && max > 1)
    {
        cmd.attr('role', 'on');
        box.find('button.nav.l span.nav-title').html( box.find('ul li:last-child').attr('data-title-back') );

        if( max === 2)
        {
            box.find('button.nav.l').attr('data-role', 'false');
        }

        //backanimate
        if(box.find('ul.ul-slide li.slide:last-child').attr('data-title-back') === 'Keranjang' )
        {
            box.find('button.nav.l').attr('data-role', 'false');
        }

        
        box.find('ul.ul-slide li.slide:last-child').stop().animate({left: '100%'}, '100', 'swing', function(){

            var li = $(this);
            
            li.remove();
            //
            cmd.attr('role', 'off');
        });
        
    }

}



// SLIDE VERIFICATION
function veriforder_slide(e)
{

    var order = e.orders.order,
    payment = e.orders.payment,
    shiping = e.orders.shiping,
    customer = e.orders.customer,
    items = e.orders.item,
    destination = e.orders.destination,
    upload = e.upload;

    var total = order.type === 3 ? order.total_reseller : order.total;

    var tagihan = (parseFloat(total) + parseFloat(shiping.courier_price)) - parseFloat(order.uniq);

    var body = '';
    body += '<div class="inar-body ';
    body += order.paid === 1 ? 'h-full' : '';
    body += '" role="false"> <div class="insed-body h-full">';

        body += '<div class="arinsed"><ul class="ulist-chekcout area-list-checkout">';


            body += '<li >';

             body += '<div class="div clr-float list-xdp info-status" role="';
             body += order.paid === 1 ? 'scs' : 'mv';
             body += '"><div class="fl-left"><span class="label">Status Pembayaran</span></div><div class="fl-right"><b class="status"><span class="ic scs flaticon2-check-mark"></span><span class="ic mv sli_icon-clock"></span> <span>';
             body += order.paid === 1 ? 'Berhasil' : 'Menunggu Verifikasi';
             body += '</span></b></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Metode Pembayaran</span></div><div class="fl-right"><span>'+payment.name+'</span></div></div>';

                
                body += payment.type === 1 ? '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nomor Rekening:</span></div><div class="fl-right"><span>'+payment.label+'</span></div></div>' : '';

            body +='</li>';

            body += '<li class="';
            body += payment.type === 2 ? 'hide' : '';
            body += '">';

                body += '<div class="div list-xdp"><span><b>Informasi Pembayaran</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Dari Bank</span></div><div class="fl-right">'+upload.bank+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nama Pemilik Rekening</span></div><div class="fl-right">'+upload.user+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Tanggal Transfer</span></div><div class="fl-right">'+upload.date+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nominal</span></div><div class="fl-right"><span><b>'+formatRupiah(upload.total, 'Rp')+'</b></span></div></div>';

                body += '<div class="div clr-float list-xdp">';
                    body += '<div class="fl-left"><span class="label">Bukti Bayar</span></div>';

                    body += '<div class="fl-right"><a href="#" target="_blank" class="cmd-previewimg" role="off" data-img="'+upload.images+'" data-date="'+upload.date+'" data-name="'+upload.user+'" data-invoice="'+order.invoice+'">Lihat Bukti Bayar</a></div></div>';
            body += '</li>';

            body += '<li >';
                body += '<div class="div list-xdp"><span><b>Informasi Order</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Invoice</span></div><div class="fl-right"><span>'+order.invoice+'</span></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Tanggal Order</span></div><div class="fl-right"><span>'+order.date+'</span></div></div>';

                body += '<div class="div list-xdp br"></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Total Harga</span></div><div class="fl-right"><span><b>'+formatRupiah(total, 'Rp')+'</b></span></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Total Ongkir</span></div><div class="fl-right"><span>'+formatRupiah(shiping.courier_price, 'Rp')+'</span></div></div>';

                body += '<div class="div clr-float list-xdp '+( payment.type === 2 ? '' : 'hide')+'"><div class="fl-left"><span class="label">Biaya COD</span></div><div class="fl-right"><span>'+formatRupiah( shiping.cod_cost, 'Rp')+'</span></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Angka Uniq</span></div><div class="fl-right"><span>-Rp'+order.uniq+'</span></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Total Potongan</span></div><div class="fl-right"><span>Rp0</span></div></div>';

                body += '<div class="div list-xdp br"></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><b>Total Bayar</b></div><div class="fl-right color-orangered"><b>'+formatRupiah(tagihan, 'Rp')+'</b></div></div>';
                body += '</li>';

            body += '<li >';

                body += '<div class="div list-xdp"><span><b>Barang</b></span></div>';

                body += '<div class="div list-xdp">';
                   
                body += '<ul>';
                
                $.each(items, function(i, item)
                {
                    var itemprice = order.type === 3 ? item.price_reseller : item.price;
                    var totalitem = order.type === 3 ? item.total_reseller : item.total;

                    body += '<li>';
                    body += '<div class="div"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.name+'</span></div><div class="fl-right"><span>'+formatRupiah(totalitem, 'Rp')+'</span></div></div><div class="div"><span class="label">'+item.qty+'x '+formatRupiah(itemprice, 'Rp')+'</span></div></div>';
                    body += '</li>';

                })
                    

                body += '</ul>';

                // body += '<div class="div clr-float"><div class="fl-left dotli"><span>MDS 320</span></div><div class="fl-right"><span>2012233ADKFINV</span></div></div>';
                // body += '<div class="div"><span class="label">1x Rp170.000</span></div>';
                // body += '</div>';

                body += '<div class="div list-xdp"><span><b>Kurir</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span>'+shiping.courier_name+' - '+shiping.courier_service+'</span></div></div>';

                body += '<div class="div list-xdp"><span><b>Alamat Pengiriman</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span>'+destination.address+', '+destination.kecamatan+', '+destination.city+', '+destination.provinsi+' '+destination.kodepos+'</span></div></div>';

                // body += '<div class="div clr-float list-xdp"><div class="fl-left"><span>jl sukun rt rw, Kec. cipayung, Kota. Jakarta Timur, DKI Jakarta,12312</span></div></div>';

            body += '</li>';

        body += '</ul></div>';
    body += '</div></div>';
    body += '<input type="hidden" name="order_id" value="'+order.id+'" />';
    body += '<input type="hidden" name="order_type" value="'+order.type+'" />';
    body += order.paid === 1 ? '' : '<div class="navi area-navi"><div class="fl-right"><button class="wic cmd-next-slide green is-loading" data-next="verification" role="off"><span>Verifikasi</span><span class="ic sli_icon-check"></span></button></div></div>';

    return body;
}


// SLIDE VERIFICATION BULKING
function veriforder_slide_bulking(e)
{

    // console.log(e);

    var response = e
    orders = response.orders,
    payment = response.orders.payment,
    customers = response.customers,
    cpayment = customers.payment,
    upload = response.upload;


    var body = '';
    body += '<div class="inar-body ';
    body += response.paid === 2 ? 'h-full' : '';
    body += '" role="false"> <div class="insed-body h-full">';

        body += '<div class="arinsed"><ul class="ulist-chekcout area-list-checkout">';

            body += '<li >';

             body += '<div class="div clr-float list-xdp info-status" role="';
             body += response.paid === 2 ? 'scs' : 'mv';
             body += '"><div class="fl-left"><span class="label">Status Pembayaran</span></div><div class="fl-right"><b class="status"><span class="ic scs flaticon2-check-mark"></span><span class="ic mv sli_icon-clock"></span> <span>';
             body += response.paid === 2 ? 'Berhasil' : 'Menunggu Verifikasi';
             body += '</span></b></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Metode Pembayaran</span></div><div class="fl-right"><span>'+payment.type+' '+payment.name+'</span></div></div>';

                
                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nomor Rekening:</span></div><div class="fl-right"><span>'+payment.account+' - '+payment.norek+'</span></div></div>';

            body +='</li>';

            body += '<li class="">';

                body += '<div class="div list-xdp"><span><b>Informasi Pembayaran</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Dari Bank</span></div><div class="fl-right">'+cpayment.name+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nama Pemilik Rekening</span></div><div class="fl-right">'+cpayment.account+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Tanggal Transfer</span></div><div class="fl-right">'+upload.date+'</div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Nominal</span></div><div class="fl-right"><span><b>'+formatRupiah(response.total, 'Rp')+'</b></span></div></div>';

                body += '<div class="div clr-float list-xdp">';
                    body += '<div class="fl-left"><span class="label">Bukti Bayar</span></div>';

                    body += '<div class="fl-right"><a href="#" target="_blank" class="cmd-previewimg" role="off" data-img="'+upload.image+'" data-date="'+upload.date+'" data-name="'+upload.user+'" data-invoice="'+response.invoice+'">Lihat Bukti Bayar</a></div></div>';
            body += '</li>';

            body += '<li >';
                body += '<div class="div list-xdp"><span><b>Informasi Order</b></span></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Invoice</span></div><div class="fl-right"><span>'+response.invoice+'</span></div></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Tanggal Order</span></div><div class="fl-right"><span>'+response.date+'</span></div></div>';

                body += '<div class="div list-xdp br"></div>';

                body += '<div class="div clr-float list-xdp"><div class="fl-left"><b>Total Bayar</b></div><div class="fl-right color-orangered"><b>'+formatRupiah(response.total, 'Rp')+'</b></div></div>';
                body += '</li>';

            body += '<li >';

                body += '<div class="div list-xdp"><span><b>Daftar Order</b></span></div>';

                body += '<div class="div list-xdp">';
                   
                body += '<ul>';
                
                $.each(response.detail, function(i, item)
                {

                    body += '<li>';
                    body += '<div class="div"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.invoice+'</span></div><div class="fl-right"><span>'+formatRupiah(item.total, 'Rp')+'</span></div></div><div class="div"><span class="label">'+item.customer_name+' - '+item.customer_phone+'</span></div></div>';
                    body += '</li>';

                })
                    

                body += '</ul>';



            body += '</li>';

        body += '</ul></div>';
    body += '</div></div>';
    body += '<input type="hidden" name="bulking_id" value="'+response.id+'" />';

    body += response.paid === 2 ? '' : '<div class="navi area-navi"><div class="fl-right"><button class="wic cmd-next-slide green is-loading" data-next="verification-bulking" role="off"><span>Verifikasi</span><span class="ic sli_icon-check"></span></button></div></div>';

    return body;
}

// submit verification
function submitVeriOrder(e)
{
    var cmd = e,
    slide = cmd.parents('li.slide');

    if ( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');

        //
        $.ajax({
            type: 'POST',
            url: config.apps.URL_API + '/api/orders/verification',
            headers:{
                "Content-Type":"application/json",
                // "Authorization": "Bearer " + getToken()
                "key":getaccount().key
            },
            cache: false,
            timeout: 18000,
            data: JSON.stringify({
                'order_id': slide.find('input[name="order_id"]').val(),
                'order_type': slide.find('input[name="order_type"]').val()
            }),
            dataType: 'JSON',
            success: function(n)
            {
                // refreshCookie(n.refresh);
                // console.log(n);

                //
                slide.find('.info-status').attr('role','scs');
                slide.find('.info-status .status').html('Berhasil');
                slide.find('.inar-body').addClass('h-full');
                slide.find('.area-navi').addClass('hide');
                loadtableorder();
                // cmd.attr('role', 'off');
            },
            error: function(n)
            {
                var response = n.responseJSON;
                console.log(response.message);

                // refreshCookie(response.refresh);

                cmd.attr('role', 'off');
                flagnotif('error','Opss... Terjadi kesalahan, refresh halaman ini');
            }
        })
    }
}

// SUBMIT VERIFICATION BULKING
function submitVerificationBulking(e)
{
    var cmd = e,
    slide = cmd.parents('li.slide');

    if ( cmd.attr('role') === 'off')
    {
        cmd.attr('role', 'on');

        //
        $.ajax({
            type: 'POST',
            url: config.apps.URL_API + '/api/verifbulking/verification',
            headers:{
                "Content-Type":"application/json",
                // "Authorization": "Bearer " + getToken()
                "key":getaccount().key
            },
            cache: false,
            timeout: 18000,
            data: JSON.stringify({
                'bulking_id': slide.find('input[name="bulking_id"]').val()
            }),
            dataType: 'JSON',
            success: function(n)
            {
                // console.log(n);
                // refreshCookie(n.refresh);

                //
                slide.find('.info-status').attr('role','scs');
                slide.find('.info-status .status').html('Berhasil');
                slide.find('.inar-body').addClass('h-full');
                slide.find('.area-navi').addClass('hide');
                loadtableorder();
                // cmd.attr('role', 'off');
            },
            error: function(n)
            {
                // console.log(n);
                var response = n.responseJSON;

                // refreshCookie(response.refresh);

                flagnotif('error','Opss... Terjadi kesalahan, refresh halaman ini');
                cmd.attr('role', 'off');
            }
        })
    }
}

// preview image in verification
function modalPreviewImg()
{
    var modal = '';

    modal += '<div class="m-preview-img area-prev-image"><div class="preview-bck"></div><div class="in-preview"><div class="area-preview">';

        modal += '<div class="l-preview"><div class="img-preview"><div class="arimage-resize prev-img"></div><a href="#" class="xclose close-previmg" role="off"><div class="tbl"><div class="intbl"><div class="span flaticon2-cross"></div></div></div></a></div></div>';

        modal += '<div class="r-preview"><div class="div header"><span><b>Bukti Bayar</b></span> </div>';

        modal += '<div class="div bdy"><div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Invoice</span></div><div class="fl-right prev-invoice">#<b>---</b></div></div><div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Diupload oleh</span></div><div class="fl-right prev-name">---</div></div><div class="div clr-float list-xdp"><div class="fl-left"><span class="label">Tanggal</span></div><div class="fl-right prev-date">---</div></div></div></div>';

    modal += '</div></div></div>';

    return modal;
}




//default search widget
function defsearchwidget(e)
{
    var widget = e;

    if( confwidget.component.searchstatus === 0 )
    {

        widget.find('.area-search').attr('role', 'false');
        widget.find('.area-search input[name="search_wg"]').val('');
    }
}
// END FUNCTION ALL ORDERS ====>



// SLIDE BULKING

function bulking_srclistwg()
{

    var slide = $('body').find('li#slide-bulking'),
    area = slide.find('.area-outer-list'),
    arealist = slide.find('.area-list'),
    src = area.find('.area-src-list input[type="text"]').val(),
    form = slide.find('#form-orderbulking');


    var search = '?src=' + src;
    search += '&comp=' + getaccount().config.company_id;
    search += '&orderid=' + form.find('input[name="list_order_id"]').val();

    arealist.attr('role-load', 'true');

    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/orders/bulking/listwg' + search,
        cache: false,
        timeout: 18000,
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var list = '';
            $.each(n.response, function(i, item)
            {
                list += '<li dataid="'+item.id+'" dataprice="'+item.payment.total_reseller+'" dataurl="'+item.url+'">';
                
                list += '<a href="#" class="cmd-keep-list" role="off"><div class="div">';

                    list += '<div class="div up clr-float"><div class="fl-left"><span class="lbl-invoice">#<b>'+item.invoice+'</b> </span><span class="lbl-price">('+ formatRupiah(item.payment.total_reseller, 'Rp') +')</span></div><div class="fl-right"><span class="lbl-date">'+item.date+'</span></div></div>';

                    list += '<div class="div lbl-customers"><span class="icfs10 sli_icon-user"></span> <span>'+item.customers.name+'</span><span> - '+item.customers.phone+'</span></div>';

                list += '</div></a>';
                list += '</li>';
            });
            arealist.find('ul').html(list);
            arealist.attr('role-load', 'false');
        },
        error: function(n)
        {
            // console.log(n);
            arealist.find('ul').html('<li class="empty"><div class="div"><div class="div"><b>404</b></div><div class="div">'+n.responseJSON.message+'</div></div></li>')
            arealist.attr('role-load', 'false');
        }
    });

}



function bulking_slide()
{

    var slide = $('body').find('li#slide-bulking');

    var inbody = '';
    inbody += '<div class="inar-body h-full" role="false">';

        inbody += '<div class="insed-body h-full"><div class="arinsed ovw-fix pd-null">';

        inbody += '<div class="box-bulking clr-float"><div class="box-blkg-l area-outer-list" role-bottom="false">';

            inbody += '<div class="box-blkg-asrc area-src-list" role="false"><div class="div boxed"><div class="ar-asrc-txt"><span class="ic sli_icon-magnifier"></span><button class="btn cmd-clear-src" role="off"><span class="sli_icon-close"></span></button><input type="text" name="SrcBulking" class="form-control br-cgreen" placeholder="Cari Invoice, Customer ..."></div>';

            inbody += '<button class="ar-asrc-btn no-br rds4 cmd-reload-list" role="off"><span class="sli_icon-refresh"></span></button></div></div>';

            inbody += '<div class="ar-list-first area-list" role-load="false"><div class="xload"><img src="/assets/svg/loading.green.svg" alt="loading"></div><ul>';

                // area list bulking

            inbody += '</ul></div>';

            inbody += '<div class="ar-nav-l clr-float"><button class="rds4 nobr cmd-next-list" disabled="disabled" role="off">LIST ORDER<span class="fa flaticon2-right-arrow"></span></button></div>';

        inbody += '</div>';

        inbody += '<div class="box-blkg-r">';

            inbody += '<button class="btn-back cmd-back-list" role="off"><span class="fa flaticon2-left-arrow"></span></button>';

            inbody += '<div class="ar-list-r area-list-keep"><ul>';
                // area keep list
            inbody += '</ul></div>';

            inbody += '<div class="nav-list-r"><div class="divH clr-float">';

                    inbody += '<div class="fl-left"><div class="divH"><div class="tbl"><div class="intbl"><div class="div">Item: <b class="lbl-item">0x</b></div><div class="div">Total Bayar: <b class="color-orangered lbl-total">Rp0</b></div></div></div></div></div>';

                    inbody += '<div class="fl-right">';

                        inbody += '<button class="green no-br rds4 cmd-next-slide" data-next="payment-bulking" data-back="" disabled="disabled" role="off"><span>Lanjut Bayar</span><span class="ic fa flaticon2-right-arrow"></span></button>';

                        inbody += '<form action="" class="hide" id="form-orderbulking">';

                        inbody += '<input type="hidden" name="bulking_id">';

                        inbody += '<input type="hidden" name="bulking_total">';

                        inbody += '<input type="hidden" name="bulking_qty">';

                        inbody += '<input type="hidden" name="list_order_id">';

                        inbody += '</form>';

                    inbody += '</div>';

            inbody += '</div></div>';

        inbody += '</div></div>';

        inbody += '</div></div>';

    inbody += '</div>';

    slide.find('.ar-body').html(inbody);

    
}

// element payemnt bulking
function payment_bulking_el()
{

    var slide = $('body').find('li#slide-bulking'),
    widget = slide.parents('.area-widget.show'),
    form = slide.find('#form-orderbulking'),
    bulking_id = form.find('input[name="bulking_id"]').val(),
    item = form.find('input[name="list_order_id"]').val(),
    total = form.find('input[name="bulking_total"]').val(),
    qty = form.find('input[name="bulking_qty"]').val();

    
    widget.find('ul.ul-slide').html('');

    widget.find('.box').addClass('w480');
    widget.attr('aria-load', 'true');
    //
    var li = boxslideli('payment-bulking',widget);
    widget.find('ul.ul-slide').html(li);
    widget.find('li.slide').attr('role', 'off');
    

    // send
    $.ajax({
        type: 'POST',
        url: config.apps.URL_API + '/api/orders/bulking/payments',
        headers: {
            'Content-Type':'application/json',
            // "Authorization": "Bearer " + getToken(),
            'key': getaccount().key
        },
        data: JSON.stringify({
            'bulking_id':bulking_id,
            'item': item,
            'total': total,
            'qty': qty
        }),
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n.response);
            var response = n.response;

            //refresh token
            // refreshCookie(n.refresh);

            //
            var inbody = payment_bulking_slide(response);
            widget.find('.inar-body').html(inbody);
            
            //
            widget.find('.inar-body select[name="confirmation_bank"]').selectpicker('refresh');

            // //
            
            
            // //
            widget.find('button[data-next="paid-bulking"]').removeAttr('disabled');
            widget.attr('aria-load', 'false');
            loadtableorder();
        },
        error: function(n)
        {
            
            var response = n.responseJSON;

            console.log(response.message);
            //refresh token
            // refreshCookie(response.refresh);

            flagnotif('error', response.message);


            
        }
    });

}

function payment_bulking_slide(n)
{

    var response = n;


    var total = 0;
    var tagihan = response.total;

    var inbody = '';

    // var inbody = '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

    //         inbody += '<div class="fl-left"><div class="ximg"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div>';

            // inbody += '<div class="fl-left">';

            // inbody += '<div class="div">

            //     <div class="div name customer_name"><b>Customer</b></div>
            //     <div class="div label num"><span class="ic sli_icon-screen-tablet"></span><span class="customer_phone">0866868</span></div>
            //     </div>
            // </div>
            
            // inbody += '</div>';

            // inbody += '</div></div></div></div></div>';


            inbody += '<div class="insed-body h-full">';

                inbody += '<div class="in-load"><span><img src="/assets/svg/loading.blue.svg" alt="loading"></span></div>';

                inbody += '<div class="arinsed"><ul class="ulist-chekcout area-list-checkout">';

                // title
                inbody += '<li class="list-checkout area-rinci" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">INVOICE</div><span>#'+response.invoice+'</span><span class="a-sel-ttl">';
                    // inbody += '<a href="#" target="_blank" class="ic-btn ic-wa"><span class="flaticon-whatsapp"></span></a><a href="#" role="off" class="ic-btn ic-cp cmd-copy-invoice" data-text="copy invoice"><span class="flaticon2-copy"></span></a>';
                    
                    inbody +='</span></div></div>';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">TOTAL BAYAR</div><div class="div color-orangered"><b>'+formatRupiah(tagihan, 'Rp')+'</b></div><a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget" data-modal="detail-order-bulking" dataid="10005"><span>Detail</span> <span class="ic flaticon2-down"></span></a></div></div>';
                                
                inbody += '</div></li>';

                // metode payment
                inbody += '<li class="list-checkout ar-dd-v area-bank" dataid="1" role="false"><div class="div clr-float">';

                    inbody += '<div class="fl-left left ar-title"><div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Metode Pembayaran</span></div></div></div>';

                    inbody += '<div class="fl-left right"><div class="div">';

                    inbody += '<div class="div"><div class="div ar-v-out ar-bank-select clr-float"><div class="bank-img"><img src="#" alt="" class="metode-img"></div><div class="fl-left"><div class="div"><b class="clr-b metode-name">payment name</b></div><div class="div clr-b metode-label">payment label</div></div></div></div>';
                                
                    inbody += '<div class="div ar-btn-out"><a href="#" role="off" class="cmd-modal-inwidget" data-modal="method-payment-bulking"><span>Pilih Pembayaran</span><span class="ic flaticon2-down"></span></a></div>';

                    inbody += '</div></div>';

                    inbody += '<a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget btn-outer" data-modal="method-payment-bulking"><span>Lihat Semua</span> <span class="ic flaticon2-down"></span></a>';

                inbody += '</div></li>';

                inbody += '<li class="list-checkout area-upload" dataid="1" role="true">';

                    inbody += '<form action="/api/orders/bulking/confirmation" id="formorder-bulking-confirmation" enctype="multipart/form-data" novalidate="novalidate">';

                    inbody += '<div class="div clr-float">';

                        inbody += '<div class="fl-left left"><div class="tbl"><div class="intbl"><span class="flaticon2-information"></span> <span>Konfirmasi Pembayaran</span></div></div></div>';

                            inbody += '<div class="fl-left right box-upload area-img-upload" role="false" aria-upload="false"><div class="div">';

                                inbody += '<div class="div clr-float lst">';
                                            
                                    inbody += '<div class="ar-img-up"><div class="ximg">';

                                        inbody += '<div class="inimg"><div class="arimage-resize"><img src="" alt="" class="img-upload"></div></div>';

                                        inbody += '<a href="#" role="off" class="cmd-img-upload aimg"><div class="tbl"><div class="intbl"><div class="div"><div class="div inhd aload"><img src="/assets/svg/loading.blue.svg" alt=""></div><div class="div inhd alabel"><div class="div"><span class="ic sli_icon-camera"></span></div><div class="div"><span>Pilih Gambar</span></div></div></div></div></div></a>';

                                        inbody += '<input type="file" class="hide file-upload" name="file" accept="image/*">';
                                    inbody += '</div></div>';

                                    inbody += '<div class="div"><button role="off" class="del-img cmd-delimg-upload"><span class="sli_icon-trash"></span><span>Hapus Bukti Bayar</span></button></div>';

                            inbody += '</div>';

                            inbody += '<div class="div lst"><div class="div label">Transfer dari Bank</div><div class="div"><select name="confirmation_bank" class="form-control selectpicker" data-live-search="true" >';
                            inbody += '<option value="-1">Pilih Bank</option>';
                            
                            $.each(response.bank_user, function(i, item)
                            {
                                inbody += '<option value="'+item.id+'">'+item.name+' ('+item.label+')</option>';
                            })
                            
                            inbody += '</select></div></div>';

                            inbody += '<div class="div lst"><div class="div label">Tanggal Transfer</div><div class="div"><input type="date" name="confirmation_date" class="form-control" value="'+response.thisdate+'" date-value="'+response.thisdate+'"></div></div>';

                            inbody += '<div class="div lst"><div class="div label">Nominal Bayar<span style="position:absolute; right:10px; font-size:11px; color: blue;">'+formatRupiah(tagihan, '')+'</span></div><div class="div"><input type="text" name="confirmation_total" class="form-control rupiahkeyup" maxlength="15"></div></div>';

                            inbody += '</div></div></div>';
                        
                        inbody += '<input type="hidden" name="bulking_id" value="'+response.id+'">';

                        inbody += '<input type="hidden" name="payment_id" value="">';

                        inbody += '<input type="submit" value="submit" class="hide">';

                    inbody += '</form>';
                inbody += '</li>';


            inbody += '</ul></div>';

        inbody += '</div>';


        // detail view

        inbody += '<div class="hide vdetailorder">';
        
        $.each(response.detail, function(i, item)
        {

            inbody += '<li class="list-dp"><div class="div clr-float"><div class="fl-left"><b>#'+item.invoice+'</b></div><div class="fl-right"><span class="label">'+formatRupiah(item.total, 'Rp')+'</span></div></div><div class="div">'+item.customer_name+' - '+item.customer_phone+'</div></li>';

        });


            // inbody += '<li class="list-dp">';

            //     inbody += '<div class="div ttl">Barang</div>';

                // $.each(product, function(i, item)
                // {
                //     var itemprice = order.type === 3 ? item.price_reseller : item.price;
                //     var itemtotal = order.type === 3 ? item.total_reseller : item.total;

                //     inbody += '<div class="div bx"><div class="li"><div class="div clr-float"><div class="fl-left dotli"><span>'+item.name+'</span></div><div class="fl-right"><span>'+(formatRupiah( itemtotal, 'Rp'))+'</span></div></div><div class="div"><span class="label">'+(item.qty)+'x '+(formatRupiah( itemprice, 'Rp'))+'</span></div></div>';
                // });

                // inbody += '<div class="div">';
                // inbody += '</div>';

                // inbody += '<div class="div ttl">Kurir</div><div class="div clr-float bx"><div class="fl-left"><span>'+ shiping.courier_name + ' (' + shiping.courier_service + ')</span></div><div class="fl-right"><span>'+( formatRupiah( parseFloat( shiping.courie_price ) , 'Rp') )+'</span></div></div>';

 

            // inbody += '</li>';

        inbody += '</div>';

    return inbody;
}


function viewMethodePaymentBulking(e,el)
{
    var widget = e,
    form = widget.find('form'),
    inmodal = widget.find('.inmodal'),
    slide = el;

    // widget.attr('aria-load', 'true');

    inmodal.attr('aria-load', 'true');
    $.ajax({
        type: 'GET',
        url: config.apps.URL_API + '/api/orders/bulking/metodepayment/list?id=' + form.find('input[name="bulking_id"]').val(),
        headers: {
            'Content-Type':'application/json',
            'key': getaccount().key
        },
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var response = n;

            var li = '';
            $.each(response.list, function(i, item)
            {
                
                li += '<li class="list-bnk">';
                    li += '<a href="#" role="off" data-open="'+slide.attr('id')+'" class="cmd-keep-bank-bulking" datatype="'+item.type+'" dataid="'+item.id+'" data-namebank="'+item.name+'" data-name="'+item.account_name+'" data-norek="'+item.account_norek+'">';

                        li += '<span class="flaticon2-right-arrow icon"></span>';
                        li += '<div class="div clr-float">';
                            li += '<div class="aimg"><img src="'+item.images+'" alt="image"></div>';

                            li += '<div class="albl"><div class="tbl"><div class="intbl"><div class="div"><b>'+ ( item.type === 1 ? 'Transfer ' : '') + ' ' +item.name+'</b></div>';
                            
                            li += item.label === '' ? '' : '<div class="div label">'+ item.label +'</div>';

                            li += '</div></div></div>';
                        li += '</div>';
                    li += '</a>';
                li += '</li>';

            });

            

            widget.find('.modal-widget ul.area-inmodal-list').html(li);
            // widget.attr('aria-load','false');

        },
        error: function(n)
        {
            // console.log(n);
            var response = n.responseJSON;

            var li = '<li class="empty">';
                    li+= '<div class="div"><span class="ic flaticon-danger"></span></div>';
                    li += '<div class="div"><span>'+response.message+'<br/><a href="#" role="off" class="cmd-refresh-metodepayment" >Muat ulang halaman</a></div>';
                li += '</li>';

            inmodal.attr('aria-load', 'false');
            inmodal.find('ul.area-inmodal-list').html(li);
        }
    })

    
    widget.find('.modal-widget').attr('aria-load','false');
}


function submitpaidbulking(e)
{
    var cmd = e,
    widget = cmd.parents('.area-widget.show');

    cmd.attr('role', 'on');
    var formupload = widget.find('#formorder-bulking-confirmation');
    widget.find('.br-error').removeClass('br-error');
    widget.find('label.error').remove();

    widget.find('.insed-body').append('<div class="bck-white"></div>');

    // check form upload
    if( formupload.find('input[name="payment_id"]').val() === '')
    {
        widget.find('li.area-bank a.cmd-modal-inwidget').addClass('br-error');
        widget.find('li.area-bank .ar-btn-out').append('<label class="error">Harap pilih Pembayaran</label>');

        cmd.attr('role', 'off');
        widget.find('.bck-white').remove();
        widget.find('li.area-bank a.cmd-modal-inwidget').focus();
        return;
    }

    if( formupload.find('input[name="file"]').val() === '')
    {
        formupload.find('.ar-img-up').addClass('br-error');
        formupload.find('.ar-img-up').parents('.lst').append('<label class="error">Harap sertakan bukti bayar</label>');
        cmd.attr('role', 'off');
        widget.find('.bck-white').remove();
        formupload.find('.ar-img-up').find('a.cmd-img-upload ').focus();
        return;
    }

    if(formupload.find('select[name="confirmation_bank"]').val() === '-1' )
    {
        formupload.find('select[name="confirmation_bank"]').parents('.lst').find('button.btn').addClass('br-error');
        formupload.find('select[name="confirmation_bank"]').parents('.lst').append('<label class="error">Pilih Transfer dari Bank</label>');
        cmd.attr('role', 'off');
        widget.find('.bck-white').remove();
        formupload.find('select[name="confirmation_bank"]').parents('.lst').find('button.btn').focus();
        return;
    }

    if( $.trim(formupload.find('input[name="confirmation_total"]').val()) === '' )
    {
        formupload.find('input[name="confirmation_total"]').addClass('br-error');
        formupload.find('input[name="confirmation_total"]').parents('.lst').append('<label class="error">Isi nominal dibayarkan</label>');
        cmd.attr('role', 'off');
        widget.find('.bck-white').remove();
        formupload.find('input[name="confirmation_total"]').focus();
        return;
    }


    //
    dt_bulkingid = formupload.find('input[name="bulking_id"]').val();
    dt_file = formupload.find('input[name="file"]')[0].files[0];
    // dt_name = formupload.find('input[name="confirmation_name"]').val();
    // dt_type = formupload.find('input[name="confirmation_type"]').val();
    dt_bank = formupload.find('select[name="confirmation_bank"]').val();
    dt_total = formupload.find('input[name="confirmation_total"]').val();
    dt_date = formupload.find('input[name="confirmation_date"]').val();
    dt_payment = formupload.find('input[name="payment_id"]').val();
    
    // var xdt_total = dt_total !== '' ? cnumber(dt_total) : 0;

    var formData = new FormData();
    formData.append('bulking_id', dt_bulkingid);
    formData.append('file', dt_file);
    // formData.append('name', dt_name);
    formData.append('bank', dt_bank);
    // formData.append('type', dt_type);
    formData.append('total', dt_total);
    formData.append('date', dt_date);
    formData.append('payment_id', dt_payment);


    $.ajax({
        type: 'POST', 
        url: config.apps.URL_API + '/api/orders/uploadbulking',
        headers:{
            // "Authorization": "Bearer " + getToken()
            "key":getaccount().key
        },
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        dataType:'JSON',
        success: function(n)
        {
            // console.log(n); 
    //         var response = n.response;
    //         refreshCookie(n.refresh);


            var preview = preview_slide_bulking(n.response);
            widget.find('.box').addClass('w480');
            widget.find('li.slide .inar-body').html(preview);
            widget.find('.head .intbl b').html('Status Order');
            widget.find('li.slide .in-body').addClass('h-full');
            widget.find('li.slide .inar-body').addClass('h-full');
            widget.find('li.slide').find('.area-navi').remove();

            loadtableorder();
            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();

        },
        error: function(n)
        {
            console.log(n.responseJSON);
    //         var response = n.responseJSON;

    //         refreshCookie(response.refresh);
    //         flagnotif('error','n',response.message);

            cmd.attr('role', 'off');
            widget.find('.bck-white').remove();
        }

    });

    //send info paid


}

function preview_slide_bulking(n)
{


    var response = n,
    order = response.orders,
    payment = order.payment;

    // console.log(payment);

    // var customer = response.customer,
    // order = response.order,
    // shiping = response.shiping,
    // payment = response.payment,
    // product = response.item,
    // destination = response.destination;

    

    // var total = order.total; // n.price_show === 'p' ? order.total : order.total_reseller;

    // var total = order.type === 3 ? order.total_reseller : order.total;

    // // console.log(order.type);

    // var tagihan = (parseFloat(total) + parseFloat(shiping.courier_price) - parseFloat(order.uniq) );
    //
    var inbody = '';

    // head
    // inbody += '<div class="ahead static br"><div class="tbl"><div class="intbl"><div class="div"><div class="div clr-float">';

    // inbody += '<div class="fl-left"><div class="ximg"><div class="tbl"><div class="intbl"><span class="sli_icon-user"></span></div></div></div>';

    // inbody += '<div class="fl-left"><div class="div"><div class="div name customer_name"><b>Customer name</b></div><div class="div label num"><span class="ic sli_icon-screen-tablet"></span><span class="customer_phone">Customer phone</span></div></div></div></div>';

    // inbody += '</div></div></div></div></div>';


    // body
    inbody += '<div class="insed-body h-full">';

             inbody += '<div class="arinsed">';

             inbody += '<ul class="ulist-chekcout area-list-checkout">';

                    inbody += '<li class="list-checkout area-say" ><div class="div"><div class="boxed" data-status="';
                    inbody += response.paid === 2 ? 'sc' : ( response.paid === 1 ? 'mv' : 'mp');
                    inbody += '"><div class="inboxed"><div class="div"><div class="div"><span class="ic sli_icon-clock mv"></span><span class="ic sli_icon-check sc"></span></div><div class="div lbl"><span>';
                    inbody += response.paid === 2 ? 'Berhasil' : ( response.paid === 1 ? 'Menunggu Verifikasi' : 'Menunggu Pembayaran');
                    inbody +='</span></div></div></div></div></div></li>';

                // title
                inbody += '<li class="list-checkout area-rinci" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">INVOICE</div><span>#'+response.invoice+'</span></div></div>';

                    inbody += '<div class="bubble"><div class="div"><div class="div label">TOTAL BAYAR</div><div class="div color-orangered"><b>'+formatRupiah(response.total, 'Rp')+'</b></div><a href="#" role="off" class="a-sel-ttl cmd-modal-inwidget" data-modal="detail-order-bulking" dataid="10005"><span>Detail</span> <span class="ic flaticon2-down"></span></a></div></div>';
                                
                inbody += '</div></li>';

                // metode payment
                inbody += '<li class="list-checkout ar-dd-v area-bank" dataid="1" role="true"><div class="div clr-float">';

                    inbody += '<div class="fl-left left ar-title"><div class="tbl"><div class="intbl"><span class="ic sli_icon-credit-card"></span><span>Metode Pembayaran</span></div></div></div>';

                    inbody += '<div class="fl-left right"><div class="div">';

                    inbody += '<div class="div"><div class="div ar-v-out ar-bank-select clr-float"><div class="bank-img"><img src="'+payment.image+'" alt="" class="metode-img"></div><div class="fl-left"><div class="div"><b class="clr-b metode-name">'+payment.type+' '+payment.name+'</b></div><div class="div clr-b metode-label">'+payment.account+'-'+payment.norek+'</div></div></div></div>';

                    inbody += '</div></div>';

                inbody += '</div></li>';

            inbody += '</ul></div>';

    inbody += '</div>';

    
    // detail view order

    inbody += '<div class="hide vdetailorder">';
        
        $.each(response.detail, function(i, item)
        {

            inbody += '<li class="list-dp"><div class="div clr-float"><div class="fl-left"><b>#'+item.invoice+'</b></div><div class="fl-right"><span class="label">'+formatRupiah(item.total, 'Rp')+'</span></div></div><div class="div label">'+item.customer_name+' - '+item.customer_phone+'</div></li>';

        });

    inbody += '</div>';

    return inbody;

}
// END SLIDE BULKING