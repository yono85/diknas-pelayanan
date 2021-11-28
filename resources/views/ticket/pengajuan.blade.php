@extends('dashboard.index')

@section('content')
<div class="container-new">
    <div class="inner-container-new pd-lr30">
        <div class="tables area-tables" aria-load="false">
            <div class="in-tables">

                <!-- head -->
                <div class="div head-tables">
                    <div class="div clr-float">

                        <form action="/api/ticket/pengajuan/table" id="form-table" aria-temp="temp-table-pengajuan">


                            <button class="submit hide" role="off">submit</button>
                            <div class="fl-right w100px">

                                <div class="fl-right oarea-ddwn-hd oar-ddwn">
                                    <button class="btn green btn-r cmdNewModal" role="off" data-type="" data-widget="modal-create-task" aria-dropdown="true" data-classModal="modal-form-ticket">
                                        <span class="ic fa flaticon2-add-1"></span>
                                        <span>Baru</span>
                                    </button>
                                </div>

                                <div class="bts"></div>

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
                                            <span>{user_name}</span>
                                        </div>
                                        <div class="div fsize11 up-txt">
                                            <span class="label">({noid})</span>
                                            <span class="dot w6 brc"></span>
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
                                <div class="div label">
                                    <span class="label">
                                        {pelayanan}
                                    </span>
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
                                        <button type="button" class="btn btn-primary nobr grey s11 color-black cmd-view-detail" role="off" data-toggle="" aria-haspopup="" aria-expanded="" data-classModal="modal-view-ticket-user">
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

<div class="modal modal-area">
    <div class="inar black modal-progress">
        <div class="boxid modal-box reg-area animate-TopToBottom" role="true">
            <div class="form-register black ">
                <div class="main-reg">
                    <div class="inmod">
                        <div class="div">
                            <a href="#" class="close close-modal" role="off">
                                <span class="fas flaticon2-cross"></span>
                            </a>
                            <div class="div ttl">
                                <div class="div">
                                    <b>Progress Tiket</b>
                                </div>
                                <div class="div">
                                    <h3>
                                        <span>Bidang Anggaran</span>
                                        <span class="dot w6 brc"></span>
                                        <span>Seksi Pelaksanaan</span>
                                    </h3>
                                </div>
                            </div>
                            <div class="div">
                                <ul>
                                    <li class="top pd-b15">
                                        <div class="div owner">
                                            <div class="div clr-float">
                                                <div class="fl-left">
                                                    <div class="img br-rds50p"></div>
                                                    <div class="inf">
                                                        <div class="div">
                                                            <b>User</b>
                                                        </div>
                                                        <div class="div up-txt fsize10">
                                                            <span class="lbl">78787887</span>
                                                            <span class="dot w6 brc"></span>
                                                            <span class="color-green">smpn 180 jakarta</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fl-right txt-right fsize11">
                                                    <span>1j lalu</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="div">
                                            <p class="bubble">Mengajukan permintaan untuk listing gaji bulan oktober 2021</p>
                                        </div>
                                    </li>
                                    <li class="fsize11">
                                        <b>STATUS:</b>
                                    </li>
                                    <li>
                                        <ul class="child">
                                            <li class="fsize10 bubble dis-in-block hide">
                                                <span>NO PROGRESS</span>
                                            </li>
                                            <li class="bubble">
                                                <div class="div clr-float">
                                                    <div class="fl-left color-orange fsize10">
                                                        <span class="ic sli_icon-clock"></span>
                                                        PROGRESS
                                                    </div>
                                                    <div class="fl-right txt-right fsize11">
                                                        <span>1j lalu</span>
                                                    </div>
                                                </div>
                                                <div class="div clr-float">
                                                    <div class="arimg br-rds50p"></div>
                                                    <div class="arinf">Yono Cahyono</div>
                                                </div>
                                            </li>

                                            <li class="bubble">
                                                <div class="div clr-float">
                                                    <div class="fl-left color-green fsize10">
                                                        <span class="ic sli_icon-clock"></span>
                                                        <span>DONE</span>
                                                    </div>
                                                    <div class="fl-right txt-right fsize11">
                                                        <span>1j lalu</span>
                                                    </div>
                                                </div>
                                                <div class="div clr-float">
                                                    <div class="arimg br-rds50p"></div>
                                                    <div class="arinf">Yono Cahyono</div>
                                                </div>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                        form post
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@include('component.media')

<link href="{{$apps['URI']}}/assets/css/access/registers-2.css" rel="stylesheet" />
@endsection

@section('script')
<script>

function createTempTable(e,w)
{
    var rsp= e,
    temp = w;

    
    var list = '';
    $.each(rsp.list,function(i,item)
    {    
        var listx = temp;
        listx = listx.replace('{date}', item.date);
        listx = listx.replace('{kode}', item.kode);
        listx = listx.replace('{user_name}', item.user_name);
        listx = listx.replace('{noid}', item.type);
        listx = listx.replace('{user_company}', item.user_company);
        listx = listx.replace('{detail}', item.detail);
        listx = listx.replace('{bidang}', item.bidang);
        listx = listx.replace('{pelayanan}', (item.pelayanan === null ? "" : item.pelayanan));
        listx = listx.replace('{status}', ( item.progress === 0 ? '<li  class="waiting"><span>WAITING</span></li>' : ( item.progress === 1 ? '<li  class="progress"><span>PROGRESS</span></li>' : '<li  class="done"><span>DONE</span></li>') ) );
        
        if( item.replay !== "")
        {
            var rep = '';
            $.each(item.replay, function(x,y)
            {
                rep += '<li>';
                    rep += '<div class="div fsize10 color-'+y.color+'"><span class="ic sli_icon-check"></span><b class="up-txt">'+y.type+'</b></div>';

                    rep += '<div class="div pd-l15"><span>'+y.user_name+'</span><span class="dot w6 brc"></span><span class="label">'+y.date+'</span></div>';
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
            var $URL = '/api/data/ticket/getbidang?level=' + getaccount().level + '&set=' + getaccount().set_bidang;
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
            area.find(".area-select-seksi button.btn label span").html("Pilih Pelayanan");
            area.find(".area-select-seksi button.btn").attr("disabled","disabled");
            area.find(".area-select-seksi input.value-dropdown").val("");
            area.find(".area-select-seksi").find("span.error").remove();
            area.find(".area-select-seksi button.btn").removeClass("br-error");
            form.find("input[name='subbidang']").val(cmd.attr("data-sub"));
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
                        list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get=""><span>'+item.name+'</span></button></li>';
                    });
                    area.find(".area-select-seksi ul").html(list);
                    area.find(".area-select-seksi button.btn").removeAttr("disabled");
                });
                $t.error(function(n)
                {
                    console.log(n);
                });
            }

            cmd.attr("role", "off");
        }
    });


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
            seksi.parents('.ar-content').append('<span class="error">Harap pilih Pelayanan</span>');
            seksi.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( $.trim(text.val()).length  < 11)
        {
            text.parents('.ar-content').find('span.error').remove();
            text.parents('.ar-content').append('<span class="error">Harap isikan detail pengajuan sekurangnya 10 karakter</span>');
            text.parents('.ar-content').find('.fcs').addClass('br-error');
        }

        if( bidang.val() === "" || subbidang.val() === '1' && seksi.val() === "" || $.trim(text.val()).length < 11 )
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
            area.find("form").attr("id", "form-ticket");
            area.find("input[name='type']").val('new');
            area.find("input[name='user_id']").val(getaccount().id);
            area.find("input[name='company_id']").val(getaccount().company_id);
            area.find("input[name='level']").val(getaccount().level);
            //
            var $URL = '/api/data/ticket/getbidang?level=' + getaccount().level + '&set=' + getaccount().set_bidang;
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
    })
    
return false;
});
</script>
@endsection
