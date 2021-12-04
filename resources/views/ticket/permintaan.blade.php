@extends('dashboard.index')

@section('content')
<div class="container-new">
    <div class="inner-container-new pd-lr30">
        <div class="tables area-tables" aria-load="false">
            <div class="in-tables">

                <!-- head -->
                <div class="div head-tables">
                    <div class="div clr-float">

                        <form action="/api/ticket/table/permintaan" id="form-table" aria-temp="temp-table-pengajuan">


                            <button class="submit hide" role="off">submit</button>
                            <div class="fl-right w100px">

                                <div class="fl-right oarea-ddwn-hd oar-ddwn ar-fil ar-ddwn-fix dot-notif l red  area-filter" aria-role="false">

                                    <button class="btn blue btn-r btn-filter cmd-ddwn-hd keep-ddwn-hd" role="off" data-type="fix">
                                        <span class="ic fa flaticon2-down"></span>
                                        <span>Filter</span>
                                    </button>

                                    <div class="ar-ddw area-ddwn-hd bottom right br-rds8 ctn-filter keep">
                                        <div class="div">
                                            <ul>
                                                <li>
                                                    <b>
                                                        <span class="fa flaticon-interface-6"></span>
                                                        <span>OPTION FILTER</span>
                                                    </b>
                                                </li>
                                                <li>
                                                    <div class="div">
                                                        <div class="ddwn area-ddwn keep area-status">
                                                            <button class="btn br-rds8 cddwn" role="off">
                                                                <label><span class="fsize14 color-black">Semua Status</span></label>
                                                            </button>
                                                            <div class="ddwn-pg area-ddwn-page">
                                                                <ul>
                                                                    <li aria-selected="false">
                                                                        <button role="off" data-modal="" data-src="false" dataid="-1" ><span>Semua Status</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off" data-modal="" data-src="false"  dataid="0" ><span>Waiting</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off" data-modal="" data-src="false" dataid="1" ><span>Progress</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off" data-modal="" data-src="false" dataid="2" ><span>Done</span></button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <input type="hidden" class="value-dropdown" name="selected_status" value="-1">
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="div clr-float">
                                                        <button class="btn blue btn-r sbmt cmd-sv-filter">SIMPAN</button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="fl-left w100px">
                                <div class="ar-src area-src-head" aria-load="false">
                                    <span class="ic sli_icon-magnifier"></span>
                                    <input type="text" name="search">
                                    <span class="load"></span>
                                    <a href="#" class="cls hide cmd-cls-src" role="off">
                                        <span class="sli_icon-close"></span>
                                    </a>
                                </div>
                            </div>

                            <input type="hidden" name="level" value="">
                            <input type="hidden" name="user_id" value="">
                            <input type="hidden" name="bidang" value="">
                            <input type="hidden" name="seksi" value="">
                            <input type="hidden" name="paging" value="1">
                            <input type="hidden" name="sort_name" value="desc">

                        </form>

                    </div>
                </div>

                <!-- body -->
                <div class="body-tables">
                    <div class="ar-body-table">

                        <div class="div wh-m-520">
                            <div class="atable table-header">
                                <div class="th">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="td-iner">
                                                        <a href="#" class="cmd-sort-table" role="off" aria-sort="asc" data-name="sort_name">
                                                            <span class="ic far fa-file-alt"></span>
                                                            <span>RINCIAN</span>
                                                            <span class="ic-sort">
                                                                <span class="down fas fa-sort-amount-down"></span>
                                                                <span class="up fas fa-sort-amount-up"></span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td class="td-w230">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-address-card"></span>
                                                        <span>TO</span>
                                                    </div>
                                                </td>
                                                <td class="td-w230">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-address-card"></span>
                                                        <span>STATUS</span>
                                                    </div>
                                                </td>
                                                <td class="td-center td-w70">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-sun"></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="div">
                            <div class="atable table-body">

                                <!-- LIST TABLE -->

                            </div>
                        </div>

                    </div>
                </div>
        
                <!-- footer -->
                <div class="div foot-tables">
                    <div class="div clr-float">
                        <div class="fl-left">
                            <span class="bts-dot">Total <b class="cpagetotal">0</b></span>
                            <span>Hal <b class="cpage">0</b> dari <b class="cpageoff">0</b></span>
                        </div>
                        <div class="fl-right">
                            <button class="br-rds4 cmd-paging" data-area="back" disabled="disabled" role="off">
                                <span class="fa flaticon2-back-1"></span>
                            </button>
                            <button class="br-rds4 cmd-paging" data-area="next" role="off" disabled="disabled">
                                <span class="fa flaticon2-arrow"></span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>

<div class="div hide" id="temp-table-pengajuan">
    <div class="tr">

        <div class="thr">
            <div class="div clr-float">
                <div class="spc">
                    <span class="txt11">#<b>{kode}</b></span>
                </div>
                <div class="spc">
                    <div class="role">
                        <ul>
                            <!-- <li  class="waiting">
                                <span>PROGRESS</span>
                            </li> -->
                            {status}
                        </ul>
                    </div>
                </div>

                <div class="spcr wh-m-520">
                    <span class="label fa flaticon-calendar-with-a-clock-time-tools"></span>
                    <span class="date">{date}</span>
                </div>
            </div>
        </div>

        <div class="tbody fsize13">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="td-iner">
                                <div class="div clr-float ar-users">
                                    <div class="icmg br-rds50p"></div>
                                    <div class="inf">
                                        <div class="div">
                                            <b>{user_name}</b>
                                        </div>
                                        <div class="div fsize11 up-txt">
                                            <!-- <span class="label">({noid})</span>
                                            <span class="dot w6 brc"></span> -->
                                            <span class="color-green">{user_company}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="div">
                                    <div class="div label">
                                        <span class="bubble">
                                            <span class="inbubble" title="{title_detail}">{detail}</span>
                                        </span>
                                    </div>
                                </div>

                                
                            </div>
                        </td>
                        <td class="td-w230 wh-m-520">
                            <div class="td-iner">
                                <div class="div">
                                    <span class="ic flaticon-suitcase fsize11"></span>
                                    <span>{bidang}</span>
                                </div>
                                <div class="div">
                                    {seksi}
                                </div>
                                <div class="div">
                                    {pelayanan}
                                </div>
                            </div>
                        </td>
                        <td class="td-w230 wh-m-520">
                            <div class="td-iner">
                                <ul class="role">
                                    {replays}
                                    <!-- 
                                    <li>
                                        <div class="div fsize10 color-orange">
                                            <span class="ic sli_icon-clock"></span>
                                            <b class="up-txt">PROGRESS</b>
                                        </div>
                                        <div class="div pd-l15">
                                            <span>Yono Cahyono</span>
                                            <span class="dot w6 brc"></span>
                                            <span class="label">1h lalu</span>
                                        </div>
                                    </li>
                                -->
                                </ul>
                            </div>
                        </td>
                        <td class="td-center td-w70">
                            <div class="td-iner disvis">
                                <div class="div">
                                    <div class="dropleft">
                                        <button type="button" class="btn btn-primary nobr grey s11 color-black cmd-view-detail" role="off" data-toggle="" aria-haspopup="" aria-expanded="" data-classModal="modal-view-replay-tiket" dataid="{id}">
                                            <span class="sli_icon-eye"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</div>

<!-- area modal -->


@include('component.media')

<link href="{{$apps['URI']}}/assets/css/access/registers-2.css" rel="stylesheet" />
@endsection

@section('script')
<script>
//
$("#form-table input[name='level']").val(getaccount().level);
$("#form-table input[name='user_id']").val(getaccount().id);
$("#form-table input[name='bidang']").val(getaccount().bidang);
$("#form-table input[name='seksi']").val(getaccount().seksi);

function createTempTable(e,w)
{
    var rsp= e,
    temp = w;

    
    var list = '';
    $.each(rsp.list,function(i,item)
    {    
        var listx = temp;
        listx = listx.replace('{id}', item.id);
        listx = listx.replace('{date}', item.date);
        listx = listx.replace('{kode}', item.kode);
        listx = listx.replace('{user_name}', item.user_name);
        // listx = listx.replace('{noid}', item.type);
        listx = listx.replace('{user_company}', item.user_company);
        listx = listx.replace('{detail}', item.detail);
        listx = listx.replace('{bidang}', item.bidang);
        listx = listx.replace('{seksi}', (item.seksi === null ? "" : '<span class="ic flaticon2-right-arrow fsize8"></span><span class="lbl">'+item.seksi+'</span>'));
        listx = listx.replace('{pelayanan}', (item.pelayanan === null ? "" : '<span class="ic flaticon2-right-arrow fsize8"></span><span class="lbl">'+item.pelayanan+'</span>'));
        listx = listx.replace('{status}', ( item.progress === 0 ? '<li  class="waiting"><span>WAITING</span></li>' : ( item.progress === 1 ? '<li  class="progress"><span>PROGRESS</span></li>' : '<li  class="done"><span>DONE</span></li>') ) );
        
        if( item.replay !== "")
        {
            var rep = '';
            $.each(item.replay, function(x,y)
            {
                rep += '<li>';
                    rep += '<div class="div fsize10 color-'+y.color+'"><span class="up-txt">'+y.type+'</span><span class="dot w6 brc"></span><span class="label">'+y.date+'</span></div>';

                    rep += '<div class="div"><span class="ic flaticon2-right-arrow fsize8"></span><span>'+y.user+'</span></div>';
                rep += '</li>';
            });
        }
        else
        {
            rep = '<div class="div fsize11 label">NO PROGRESS...</div>';
        }

        listx = listx.replace('{replays}', rep);

        list += listx;
    });

    return list;
}

$(document).ready(function()
{

    // TABLE
    exeTable($('#form-table'));

    function loadTable()
    {
        exeTable($('#form-table'));
    }
    //END TABLE

    //
    $(".cmdNewModal").click(function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        content = $("body").find(".area-modal-content ."+cmd.attr('data-classModal')),
        area = $("body").find("#area-modal-show");

        if(cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");

            area.html("");
            area.append(content.html());
            area.find("form").attr("id", "form-ticket");
            area.find("input[name='type']").val('new');
            area.find("input[name='user_id']").val(getaccount().id);
            area.find("input[name='company_id']").val(getaccount().company_id);
            area.find("input[name='level']").val(getaccount().level);
            //
            var $URL = '/api/data/ticket/getbidang?level=' + getaccount().level + '&set=' + getaccount().pelayanan;
            var $t = FormSendingNew("","GET","key","",$URL);
            $t.success(function(n)
            {
                var rsp = n.response;
                var list = '';
                $.each(rsp, function(i, item)
                {
                    list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get="" class="cmd-select-bidang" data-sub="'+item.sub+'"><span>'+item.name+'</span></button></li>';
                });
                area.find(".area-select-bidang ul").html(list);
                cmd.attr("role", "off");
            });
            $t.error(function(n)
            {
                console.log(n);
                flagnotif("error", n.responseJSON.message);
                cmd.attr("role", "off");
            });
            
        }
    });

    $("body").on("click", "#area-modal-show .cmd-select-bidang", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        area = $("body").find("#area-modal-show"),
        form = cmd.parents("form");


        if(cmd.attr("role") === "off")
        {
            cmd.attr("role","on");

            //
            area.find(".area-select-seksi button.btn label span").html("Pilih Seksi");
            area.find(".area-select-seksi").addClass("hide");
            area.find(".area-select-seksi button.btn").attr("disabled","disabled");
            area.find(".area-select-seksi input.value-dropdown").val("");
            area.find(".area-select-seksi").find("span.error").remove();
            area.find(".area-select-seksi button.btn").removeClass("br-error");

            area.find(".area-select-pelayanan button.btn label span").html("Pilih pelayanan");
            area.find(".area-select-pelayanan").addClass("hide");
            area.find(".area-select-pelayanan button.btn").attr("disabled","disabled");
            area.find(".area-select-pelayanan input.value-dropdown").val("");
            area.find(".area-select-pelayanan").find("span.error").remove();
            area.find(".area-select-pelayanan button.btn").removeClass("br-error");

            //
            form.find("input[name='subbidang']").val(cmd.attr("data-sub"));
            form.find("input[name='pelayanan_selected']").val('');

            //open sub level
            if( cmd.attr("data-sub") !== "0")
            {
                var $URL = '/api/data/getpelayanan?id=' + cmd.attr("dataid");
                var $t = FormSendingNew("","GET","key","",$URL);
                $t.success(function(n)
                {
                    var rsp = n.response;
                    var list = '';
                    $.each(rsp, function(i, item)
                    {
                        list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get="" class="cmd-select-seksi" data-sub="'+item.sub+'"><span>'+item.name+'</span></button></li>';
                    });
                    area.find(".area-select-seksi ul").html(list);
                    area.find(".area-select-seksi button.btn").removeAttr("disabled");
                    area.find(".area-select-seksi").removeClass("hide");

                    


                });
                $t.error(function(n)
                {
                    console.log(n);
                });
            }
            else
            {
                $URL_PEL = '&bidang='+cmd.attr('dataid')+'&sub=0';

                callPelayanan($URL_PEL,$(this));
            }

            cmd.attr("role", "off");
        }
    });


    $("body").on("click", "#area-modal-show .cmd-select-seksi", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        area = $("body").find("#area-modal-show"),
        form = cmd.parents("form"),
        $URL = 'bidang=' + form.find("input[name='bidang_selected']").val() + '&sub=' + cmd.attr("dataid");


        if(cmd.attr("role") === "off")
        {
            cmd.attr("role","on");
            callPelayanan($URL,$(this));
            cmd.attr("role", "off");
        }
    });

    function callPelayanan(e,w)
    {

        var cmd = w,
        area = $("body").find("#area-modal-show"),
        form = cmd.parents("form");

        area.find(".area-select-pelayanan button.btn label span").html("Pilih Pelayanan");
        area.find(".area-select-pelayanan").addClass("hide");
        area.find(".area-select-pelayanan button.btn").attr("disabled","disabled");

        var $URL = '/api/data/subpelayanan?' + e;
        var $t = FormSendingNew("","GET","key","",$URL);
        $t.success(function(n)
        {
            var rsp = n.response;
            // console.log(n);
            var list = '';
            $.each(rsp, function(i, item)
            {
                list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get=""><span>'+item.name+'</span></button></li>';
            });
            area.find(".area-select-pelayanan ul").html(list);
            area.find(".area-select-pelayanan button.btn").removeAttr("disabled");
            area.find(".area-select-pelayanan").removeClass("hide");

        });
        $t.error(function(n)
        {
            console.log(n);
        });

    }

    //MENU FILTER
    $('body').on('click', '.cmd-ddwn-hd', function(e)
    {
        // e.preventDefault();
        showDdwnHd(e,$(this));
        return false;
    });

    //SEARCH IN FORM HEADER
    $('body').on('keypress', '#form-table input[name="search"]', function(e)
    {
        var code = e.which || e.keyCode;

        if( $.trim( $(this).val()).length > 2 &&  code === 13)
        {
            srcHdForm($(this));
            return false;
        }
    });


    // CLEAR SEARCH 
    $('body').on('click', '.cmd-cls-src', function(e)
    {
        clsHdForm(e,$(this));
    }); 

    $('body').on('click', '#form-table button.submit', function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        form = cmd.parents('form');

        if(cmd.attr('role') === 'off')
        {
            cmd.attr('role', 'on');
            exeTable(form);
            cmd.attr('role', 'off');
        }
    });

    //DROPDOWN SELECT
    $('body').on('click', '.area-ddwn ul li button', function(e)
    {

        e.stopPropagation();
        e.preventDefault();

        var cmd = $(this),
        form = cmd.parents('form');

        selectedDDWN(cmd);

        //
        form.find('.area-h-price span.label b span').html(cmd.attr('dataprice'));
        form.find('.area-h-price span.label').removeClass('hide');
        form.find('.area-h-price input').removeAttr('disabled');
        form.find('.area-h-price input').focus();

    });

    //SRC DROPDOWN SELECT
    $('.area-ddwn .ddwn-tsrc').keyup(function(e)
    {
        e.stopPropagation();

        srcDDWN($(this));
    });


    //DROPDOWN SELECT
    $('body').on('click', 'button.cddwn', function(e)
    {
        e.preventDefault();
        e.stopPropagation();

        dropdownNew($(this));

    });


    // SUBMIT FILTER
    $('body').on('click', '.area-ddwn-hd button.cmd-sv-filter', function(e)
    {
        e.preventDefault();
        createFilter($(this));
    });

    function createFilter(e)
    {
        var cmd = e,
        area = cmd.parents('.area-filter'),
        form = cmd.parents('form');

        exeTable(form);
        area.find('button.cmd-ddwn-hd').click();
    }


    //BUTTON UPLOAD
    $('body').on('click', '.cmd-upload', function(e)
    {
        e.preventDefault();
        previewUpload($(this));
    });

    //PREVIEW UPLOAD
    $('body').on('change', 'input[name="file"]', function(e)
    {
        changePreviewUpload(this,$(this));
    });


    //
    $("body").on("submit", "#form-ticket", function(e)
    {
        var form = $(this),
        area = form.parents(".modal-area.show"),
        bidang = form.find("input[name='bidang_selected']"),
        subbidang = form.find("input[name='subbidang']"),
        seksi = form.find("input[name='seksi_selected']"),
        text = form.find("textarea[name='text']"),
        pelayanan = form.find("input[name='pelayanan_selected']"),
        cmd = form.find("button.submit");

        if( bidang.val() === '')
        {
            bidang.parents('.ar-content').find('span.error').remove();
            bidang.parents('.ar-content').append('<span class="error">Harap pilih Bidang</span>');
            bidang.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( subbidang.val() === '1' && seksi.val() === '')
        {
            seksi.parents('.ar-content').find('span.error').remove();
            seksi.parents('.ar-content').append('<span class="error">Harap pilih Seksi</span>');
            seksi.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( pelayanan.val() === '')
        {
            pelayanan.parents('.ar-content').find('span.error').remove();
            pelayanan.parents('.ar-content').append('<span class="error">Harap pilih Pelayanan</span>');
            pelayanan.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( $.trim(text.val()).length  < 11)
        {
            text.parents('.ar-content').find('span.error').remove();
            text.parents('.ar-content').append('<span class="error">Harap isikan detail pengajuan sekurangnya 10 karakter</span>');
            text.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( bidang.val() === "" || subbidang.val() === '1' && seksi.val() === "" || pelayanan.val() === '' || $.trim(text.val()).length < 11 )
        {
            return false;
        }

        if( cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");

            var $t = FormSendingNew(form,"POST","key","","");
            
            $t.success(function(n)
            {
                // console.log(n);
                loadTable();
                area.find("a.close-modal").click();
                flagnotif("success", n.message);
            });
            $t.error(function(n)
            {
            //     console.log(n);
                cmd.attr("role","off");
                flagnotif("error", n.responseJSON.message);
            })

            
            
        }


        return false;
    });

    //button submit
    $("body").on("click", "#form-ticket button.submit", function(e)
    {
        e.preventDefault();
        var form = $(this).parents("form");
        form.submit();
    });

    //keyup text
    $("body").on("keyup", "#form-ticket textarea[name='text']", function()
    {
        if($.trim($(this).val()).length > 10)
        {
            $(this).parents('.ar-content').find('span.error').remove();
            $(this).removeClass("br-error");
        }
        else
        {
            $(this).parents('.ar-content').find('span.error').remove();
            $(this).parents('.ar-content').append('<span class="error">Harap isikan detail pengajuan sekurangnya 10 karakter</span>');
            $(this).parents('.ar-content').find('.fcs').addClass('br-error');
        }
    });


    //VIEW DETAIL
    $("body").on("click", ".cmd-view-detail", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        content = $("body").find(".area-modal-content ."+cmd.attr('data-classModal')),
        area = $("body").find("#area-modal-show");

        if(cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");

            area.html("");
            area.append(content.html());

            // area.find("form").attr("id", "form-view-ticket");
            area.find(".form-register").attr('aria-load', 'true');

            // //
            var $URL = '/api/ticket/show?id=' + cmd.attr("dataid");
            var $t = FormSendingNew("","GET","key","",$URL);
            $t.success(function(n)
            {
                var rsp = n.response;
                // console.log(rsp);
                
                area.find(".user_name").html(rsp.user_name);
                // area.find(".user_type").html(rsp.user_type);
                area.find(".user_company").html(rsp.user_company);
                area.find(".date").html(rsp.date);
                area.find(".detail").html(rsp.detail);
                area.find(".pelayanan").html(rsp.pelayanan);

                if( rsp.status === 0 )
                {
                    rep = '<li class="text-right"><button class="btn orange is-loading br-rds23 w50p cmd-progress" role="off"><span>Progress</span></button><form class="hide" action="/api/ticket/progress"><input name="user_id" value="'+getaccount().id+'" /> <input name="ticket_id" value="'+rsp.id+'" /></form></li>';
                }
                else
                {

                    var rep = '';
                    $.each(rsp.replay, function(i, item)
                    {
                        rep += '<li class="bubble">';
                        
                            rep += '<div class="div "><div class="sts color-'+item.color+' fsize9"><span class="ic sli_icon-check"></span><span class="up-txt">'+item.type+'</span></div></div>';

                            rep += '<div class="inar-bubble">';
        
                                    rep += '<div class="div clr-float"><div class="arimg br-rds50p"></div>';
                                        rep += '<div class="arinf">';
                                            rep += '<div class="div"><span>'+item.user+'</span><span class="dot w6 brc"></span><span class="fsize10">'+item.date+'</span></div>';

                                            rep += item.detail === '' ? '' : '<div class="bubble-txt"><p>'+item.detail+'</p></div>';
                                            
                                            rep += item.url === '' ? '' :'<div class="div txt-right"><a href="'+item.url+'" class="fsize10" target="_blank"><span class="ic sli_icon-arrow-down"></span><span class="fsize9">DOWNLOAD</span></a></div>';

                                        rep += '</div>';
                                    rep += '</div>';
                            rep += '</div>';
                        rep += '</li>';
                    });
                }

                area.find(".replay").html(rep);
                area.find("#form-replay input[name='user_id']").val(getaccount().id);
                area.find("#form-replay input[name='ticket_id']").val(rsp.id);
            

                // form replay
                if( rsp.status === 0 || rsp.status === 2)
                {
                    area.find("#form-replay").addClass('hide');
                }
                else
                {
                    area.find("#form-replay").removeClass('hide');
                }

                area.find(".form-register").attr('aria-load', 'false');
                cmd.attr("role", "off");
            });
            $t.error(function(n)
            {
                console.log(n);
                flagnotif("error", n.responseJSON.message);
                cmd.attr("role", "off");
            });
            
        }
    });


    $("body").on("click", "button.cmd-progress", function(e)
    {
        e.preventDefault();

        var cmd = $(this),
        area = cmd.parent("li"),
        modal = cmd.parents(".modal-area"),
        form = area.find("form");

        if( cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");

            var $t = FormSendingNew(form,"POST","key","","");
            $t.success(function(n)
            {
                
                console.log(n);
                loadTable();

                //
                var rep = '';
                $.each(n.list, function(i, item)
                {
                    rep += '<li class="bubble">';
                    
                        rep += '<div class="div "><div class="sts color-'+item.color+' fsize9"><span class="ic sli_icon-check"></span><span class="up-txt">'+item.type+'</span></div></div>';

                        rep += '<div class="inar-bubble">';
    
                                rep += '<div class="div clr-float"><div class="arimg br-rds50p"></div>';
                                    rep += '<div class="arinf">';
                                        rep += '<div class="div"><span>'+item.user+'</span><span class="dot w6 brc"></span><span class="fsize10">'+item.date+'</span></div>';

                                        rep += item.detail === '' ? '' : '<div class="bubble-txt"><p>'+item.detail+'</p></div>';
                                        
                                        rep += item.url === '' ? '' :'<div class="div txt-right"><a href="'+item.url+'" class="fsize10" target="_blank"><span class="ic sli_icon-arrow-down"></span><span class="fsize9">DOWNLOAD</span></a></div>';

                                    rep += '</div>';
                                rep += '</div>';
                        rep += '</div>';
                    rep += '</li>';
                });
                modal.find("ul.child").html(rep);
                modal.find(".area-replay form").removeClass("hide");

            });
            $t.error(function(n)
            {
                console.log(n);
            });

        }
    });


    //
    $("body").on("submit", "#form-replay button.cmd-submit", function(e)
    {
        e.preventDefault();

        $(this).parents("form").submit();
    })

    //submit replay post
    $("body").on("submit", "#form-replay", function()
    {

        var form = $(this),
        cmd = form.find("button.cmd-submit"),
        text = form.find("textarea[name='text']")
        modal = form.parents(".modal-area");

        if( cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");
            form.find(".br-error").removeClass("br-error");
            form.find("span.error").remove();

            if( $.trim(text.val()).length < 10 )
            {
                text.parents(".ar-content").prepend("<span class='error'>Harap isikan sekurangnya 10 karakter</span>");
                text.addClass('br-error');

                cmd.attr("role", "off");
                return false;
            }


            var $t = FormSendingNew(form,"POST","key","file","");
            $t.success(function(n)
            {
                console.log(n);
                var rep = '';
                $.each(n.list, function(i, item)
                {
                    rep += '<li class="bubble">';
                    
                        rep += '<div class="div "><div class="sts color-'+item.color+' fsize9"><span class="ic sli_icon-check"></span><span class="up-txt">'+item.type+'</span></div></div>';

                        rep += '<div class="inar-bubble">';
    
                                rep += '<div class="div clr-float"><div class="arimg br-rds50p"></div>';
                                    rep += '<div class="arinf">';
                                        rep += '<div class="div"><span>'+item.user+'</span><span class="dot w6 brc"></span><span class="fsize10">'+item.date+'</span></div>';

                                        rep += item.detail === '' ? '' : '<div class="bubble-txt"><p>'+item.detail+'</p></div>';
                                        
                                        rep += item.url === '' ? '' :'<div class="div txt-right"><a href="'+item.url+'" class="fsize10" target="_blank"><span class="ic sli_icon-arrow-down"></span><span class="fsize9">DOWNLOAD</span></a></div>';

                                    rep += '</div>';
                                rep += '</div>';
                        rep += '</div>';
                    rep += '</li>';
                });
                modal.find("ul.child").html(rep);
                modal.find(".area-replay form").addClass("hide");
                loadTable();
            });
            $t.error(function(n)
            {
                console.log(n);
            });
        }

        return false;
    });
    
return false;
});
</script>
@endsection
