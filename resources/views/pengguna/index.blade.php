@extends('dashboard.index')

@section('content')
<div class="container-new">
    <div class="inner-container-new pd-lr30">
        <div class="tables area-tables" aria-load="false">
            <div class="in-tables">

                <!-- head -->
                <div class="div head-tables">
                    <div class="div clr-float">

                        <form action="/api/pengguna/table" id="form-table" aria-temp="temp-table-pengajuan">


                            <button class="submit hide" role="off">submit</button>
                            <div class="fl-right w100px">

                                <div class="fl-right oarea-ddwn-hd oar-ddwn">
                                    <button class="btn green btn-r cmdNewModal" role="off" data-type="" data-widget="modal-create-task" aria-dropdown="true" data-classModal="modal-superadmin">
                                        <span class="ic fa flaticon2-add-1"></span>
                                        <span>Admin</span>
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
                                                                        <button role="off" data-modal="" data-src="false" dataid="1" ><span>Done</span></button>
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
                                                <td class="td-w280">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-address-card"></span>
                                                        <span>LEVEL</span>
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
                                            <b>{name}</b>
                                        </div>
                                        <div class="div">
                                            <span class="fsize10 up-txt lbl">{email}</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        <td class="td-w280 wh-m-520">
                            <div class="td-iner">
                                <div class="div">
                                    <span class="ic flaticon-suitcase fsize11"></span>
                                    <span>{level}</span>
                                </div>
                                <div class="div fsize10">
                                    <span class="fsize10 up-txt lbl">{company}</span>
                                </div>
                            </div>
                        </td>
                        <td class="td-center td-w70">
                            <div class="td-iner disvis">
                                <div class="div">
                                    <div class="dropleft">
                                        <button type="button" class="btn btn-primary nobr grey s11 color-black cmd-view-detail" role="off" data-toggle="" aria-haspopup="" aria-expanded="" data-classModal="modal-view-verify" dataid="{id}">
                                            <span class="sli_icon-pencil"></span>
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

<!-- <div class="modal modal-area show">
    <div class="inar black modal-progress">
        <div class="boxid modal-box reg-area animate-TopToBottom" role="true">
            <div class="form-register black " aria-load="false">
                
                <div class="load txt-center">
                    <img src="/assets/svg/loading.blue.svg" alt="loading">
                </div>

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
                                    <h3></h3>
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
                                        <div class="div fsize12">
                                            <span class="lbl">#Pelayanan</span>
                                        </div>
                                    </li>
                                    <li class="fsize11 hide">
                                        <b>STATUS:</b>
                                    </li>
                                    <li>
                                        <ul class="child">
                                            <li class="fsize10 bubble dis-in-block">
                                                <span class="ic sli_icon-ban"></span>
                                                <span>NO PROGRESS</span>
                                            </li>
                                            <li class="bubble hide">
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

                                            <li class="bubble hide">
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
                                        <form action="/api/ticket/replay/create" enctype="multipart/form-data" novalidate="novalidate" id="form-replay" class="pd-b0">
                                            <div class="div">
                                                <div class="div clr-float">
                                                    <div class="div ar-post">
                                                        <div class="div clr-float">
                                                            <textarea name="" class="send" placeholder="Ketikan detail tanggapan..."></textarea>
                                                            <button class="btn green is-loading" role="off">
                                                                <span class="sli_icon-paper-plane"></span>
                                                            </button>
                                                        </div>
                                                        <div class="div">
                                                            <div class="div ar-content ar-upload area-upload" role="false">
                                                                <a href="#" role="off" class="cmd-upload is-loading-new blue w32 fcs pd-tb3" aria-data="false">
                                                                    <span class="ic fas flaticon-attachment"></span>
                                                                    <div class="ar-label">
                                                                        <div class="div">
                                                                            <span class="label-upload">Lampirkan berkas (ukuran maks: 2MB)</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <input type="file" name="file" class="hide" accept="application/pdf">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> -->

@include('component.media')

<link href="{{$apps['URI']}}/assets/css/access/registers-2.css" rel="stylesheet" />
@endsection

@section('script')
<script>

//
$("#form-table input[name='level']").val(getaccount().level);
$("#form-table input[name='user_id']").val(getaccount().id);
$("#form-table input[name='bidang']").val(getaccount().bidang);

function createTempTable(e,w)
{
    var rsp= e,
    temp = w;

    console.log(rsp);

    var list = '';
    $.each(rsp.list,function(i,item)
    {    
        var listx = temp;
        listx = listx.replace('{id}', item.id);
        listx = listx.replace('{date}', item.date);
        listx = listx.replace('{name}', item.name);
        // listx = listx.replace('{noid}', item.type);
        listx = listx.replace('{email}', item.email);
        listx = listx.replace('{level}', item.level_name);
        listx = listx.replace('{company}', item.company);
        listx = listx.replace('{status}', ( item.verify === 0 ? '<li  class="waiting"><span>WAITING</span></li>' : '<li  class="done"><span>DONE</span></li>') );

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

    //MODAL NEW PENGGUNA
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
            area.find("form").attr("id", "form-cadmin");
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

    // SELECT LEVEL
    $("body").on("click", "#area-modal-show .cmd-select-level", function(e)
    {
        e.preventDefault();
        var cmd = $(this),
        area = $("body").find("#area-modal-show"),
        form = cmd.parents("form");


        if(cmd.attr("role") === "off" )
        {
            cmd.attr("role","on");

            //
            area.find(".area-select-second button.btn label span").html("Pilih Bidang");
            area.find(".area-select-second").addClass("hide");
            area.find(".area-select-second button.btn").attr("disabled","disabled");
            area.find(".area-select-second input.value-dropdown").val("");
            area.find(".area-select-second").find("span.error").remove();
            area.find(".area-select-second button.btn").removeClass("br-error");

            //open sub level
            if( cmd.attr("dataid") === "1")
            {
                var $URL = '/api/data/getbidang?level=1';
                var $t = FormSendingNew("","GET","key","",$URL);
                $t.success(function(n)
                {
                    var rsp = n.response;
                    // console.log(rsp);

                    var list = '';
                    $.each(rsp, function(i, item)
                    {
                        list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get="" class="cmd-select-bidang" data-sub="'+item.sub+'"><span>'+item.name+'</span></button></li>';
                    });
                    area.find(".area-select-bidang ul").html(list);
                    area.find(".area-select-bidang button.btn").removeAttr("disabled");
                    area.find(".area-select-bidang").removeClass("hide");

                });
                $t.error(function(n)
                {
                    console.log(n);
                });
            }

            cmd.attr("role", "off");
        }
    });

    //SELECT BIDANG
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

    //select seksi
    // $("body").on("click", "#area-modal-show .cmd-select-seksi", function(e)
    // {
    //     e.preventDefault();
    //     var cmd = $(this),
    //     area = $("body").find("#area-modal-show"),
    //     form = cmd.parents("form"),
    //     $URL = 'bidang=' + form.find("input[name='bidang_selected']").val() + '&sub=' + cmd.attr("dataid");


    //     if(cmd.attr("role") === "off")
    //     {
    //         cmd.attr("role","on");
    //         callPelayanan($URL,$(this));
    //         cmd.attr("role", "off");
    //     }
    // });

    // function callPelayanan(e,w)
    // {

    //     var cmd = w,
    //     area = $("body").find("#area-modal-show"),
    //     form = cmd.parents("form");

    //     area.find(".area-select-pelayanan button.btn label span").html("Pilih Pelayanan");
    //     area.find(".area-select-pelayanan").addClass("hide");
    //     area.find(".area-select-pelayanan button.btn").attr("disabled","disabled");

    //     var $URL = '/api/data/subpelayanan?' + e;
    //     var $t = FormSendingNew("","GET","key","",$URL);
    //     $t.success(function(n)
    //     {
    //         var rsp = n.response;
    //         // console.log(n);
    //         var list = '';
    //         $.each(rsp, function(i, item)
    //         {
    //             list += '<li aria-selected="false"><button role="off" dataid="'+item.id+'" data-modal="" data-modal-label="" data-get=""><span>'+item.name+'</span></button></li>';
    //         });
    //         area.find(".area-select-pelayanan ul").html(list);
    //         area.find(".area-select-pelayanan button.btn").removeAttr("disabled");
    //         area.find(".area-select-pelayanan").removeClass("hide");

    //     });
    //     $t.error(function(n)
    //     {
    //         console.log(n);
    //     });

    // }

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
    $("body").on("submit", "#form-cadmin", function(e)
    {
        var form = $(this),
        area = form.parents(".modal-area.show"),
        name = form.find("input[name='name']"),
        email = form.find("input[name='email']"),
        level = form.find("input[name='level_selected']"),
        bidang = form.find("input[name='bidang_selected']"),
        subbidang = form.find("input[name='subbidang']"),
        seksi = form.find("input[name='seksi_selected']"),
        cmd = form.find("button.submit");

        if( $.trim(name.val()).length < 3 )
        {
            name.parents('.ar-content').find('span.error').remove();
            name.parents('.ar-content').append('<span class="error">Isi nama sekurangnya 3 karakter</span>');
            name.addClass('br-error');
        }

        if( !validateEmail(email.val()) )
        {
            email.parents('.ar-content').find('span.error').remove();
            email.parents('.ar-content').append('<span class="error">Harao gunakan email valid</span>');
            email.addClass('br-error');
        }

        if( level.val() === "")
        {
            level.parents('.ar-content').find('span.error').remove();
            level.parents('.ar-content').append('<span class="error">Harap pilih Level</span>');
            level.parents('.ar-content').find('.fcs').addClass('br-error');
        }

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


        if( $.trim(name.val()).length < 3 || !validateEmail(email.val()) || level.val() === "" || level.val() === "1" && bidang.val() === "" || level.val() === "1" && subbidang.val() === '1' && seksi.val() === "")
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
                senderEmailToken(n.response.token);
                clearForm(form)
                loadTable();
                cmd.attr("role","off");
                flagnotif("success", n.message);
            });
            $t.error(function(n)
            {
                // console.log(n);
                cmd.attr("role","off");
                flagnotif("error", n.responseJSON.message);
            });
        }

        return false;
    });


    function clearForm(e)
    {
        var form = e;
        
        form.find(".empty").val("");
        form.find(".zero").val("0");
        form.find(".area-select-level button.btn label span").html("Pilih Level");
        form.find(".area-select-second").addClass("hide");
    }

    $("body").on("keyup", "#form-cadmin input[name='name']", function()
    {

        $(this).removeClass("br-error");
        $(this).parents(".ar-content").find("span.error").remove();
        if( $.trim( $(this).val() ).length < 3 )
        {
            $(this).addClass("br-error");
            $(this).parents(".ar-content").append('<span class="error">Isi nama sekurangnya 3 karakter</span>');
        }
    });

    $("body").on("keyup", "#form-cadmin input[name='email']", function()
    {

        $(this).removeClass("br-error");
        $(this).parents(".ar-content").find("span.error").remove();
        if( !validateEmail( $(this).val() ) )
        {
            $(this).addClass("br-error");
            $(this).parents(".ar-content").append('<span class="error">Harao gunakan email valid</span>');
        }
    });

    //button submit
    $("body").on("click", "#form-cadmin button.submit", function(e)
    {
        e.preventDefault();
        var form = $(this).parents("form");
        form.submit();
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

            // area.find(".form-register").attr('aria-load', 'false');
            // //
            var $URL = '/api/account/view-verify-admin?id=' + cmd.attr("dataid");
            var $t = FormSendingNew("","GET","key","",$URL);
            $t.success(function(n)
            {
                var rsp = n.response;
                console.log(rsp);

                area.find("form").attr("id", "form-verify_admin");
                area.find("input[name='user_id']").val(rsp.id);
                area.find(".user_name").html(rsp.name);
                area.find(".company_name").html(rsp.company_name);
                area.find(".area-view-pdf").html('<iframe src="'+rsp.url_file+'" frameborder="0" ></iframe>');

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


    //VERIFY ADMIN
    $("body").on("submit", "#form-verify_admin", function()
    {
        var form = $(this),
        modal = form.parents(".modal-box"),
        cmd = form.find("button.submit");

        if( cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");
            $.ajax({
                url: config.apps.URL_API + form.attr("action"),
                type: "POST",
                headers:{
                    "Content-Type":"application/json",
                    "key": getaccount().key
                },
                cache:false,
                timeout: 18000,
                data: formdatasend(form),
                dataType: "JSON",
                success: function(n)
                {
                    console.log(n);

                    loadTable();
                    modal.find("button.close-modal").click();
                    flagnotif("success", n.message);
                },
                error: function(n)
                {
                    console.log(n);
                    flagnotif("error", "Terjadi kesalahan tidak diketahui");
                }
            })
        }
        return false;
    });

    $("body").on("click", "#form-verify_admin button.submit", function(e)
    {
        e.preventDefault();
        $(this).parents("form").submit();
    });

    
return false;
});
</script>
@endsection
