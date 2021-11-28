@extends('dashboard.index')

@section('content')
<div class="container-new">
    <div class="inner-container-new pd-lr30">
        <div class="tables area-tables" aria-load="false">
            <div class="in-tables">

                <!-- head -->
                <div class="div head-tables">
                    <div class="div clr-float">

                        <form action="/api/home/employe/table" id="form-table" aria-temp="temp-table-employe">


                            <button class="submit hide" role="off">submit</button>
                            <div class="fl-right w100px">

                                <div class="fl-right oarea-ddwn-hd oar-ddwn">
                                    <button class="btn green btn-r cmdNewModal" role="off" data-type="" data-widget="modal-create-task" aria-dropdown="true">
                                        <span class="ic fa flaticon2-add-1"></span>
                                        <span>Baru</span>
                                    </button>
                                    <!-- <div class="ar-ddw area-ddwn-hd bottom right br-rds8 ctn-menu keep">
                                        <div class="div">
                                            <ul>
                                                <li>
                                                    <a href="#" role="off" class="cmdNewModal" data-widget="modal-create-task" aria-dropdown="true">
                                                        <div class="div">
                                                            <span class="fsize14">Task Baru</span>
                                                            <span class="icr sli_icon-note"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div class="div">
                                                            <span class="fsize14">Task Harian</span>
                                                            <span class="icr fas  flaticon-clipboard"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> -->
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
                                                                <label><span class="fsize14 color-black">Semua Divisi</span></label>
                                                            </button>
                                                            <div class="ddwn-pg area-ddwn-page">
                                                                <ul>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="-1" ><span>Semua Divisi</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="1" ><span>Keuangan</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="2" ><span>Markom</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="3" ><span>Produksi</span></button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <input type="hidden" class="value-dropdown" name="selected_group" value="-1">
                                                        </div>
                                                    </div>
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
                                                                        <button role="off"  dataid="-1" ><span>Semua Status</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="1" ><span>Aktif</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="2" ><span>Verify</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="3" ><span>No Akun</span></button>
                                                                    </li>
                                                                    <li aria-selected="false">
                                                                        <button role="off"  dataid="4" ><span>Hapus</span></button>
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

                            <input type="hidden" name="divisi" value="">
                            <input type="hidden" name="position" value="">
                            <input type="hidden" name="date" value="">
                            <input type="hidden" name="paging" value="1">
                            <input type="hidden" name="sort_name" value="asc">

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
                                                <td class="td-w210">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-address-card"></span>
                                                        <span>TO</span>
                                                    </div>
                                                </td>
                                                <td class="td-w210">
                                                    <div class="td-iner">
                                                        <span class="ic far fa-address-card"></span>
                                                        <span>ADMIN</span>
                                                    </div>
                                                </td>
                                                <td class="td-center td-w60">
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

                                <div class="tr">

                                    <div class="thr">
                                        <div class="div clr-float">
                                            <div class="spc">
                                                <div class="role">
                                                    <ul>
                                                        <li  class="progress">
                                                            <span>PROGRESS</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="spcr wh-m-520">
                                                <span class="label fa flaticon-calendar-with-a-clock-time-tools"></span>
                                                <span class="date">26/08/2021</span>
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
                                                                    <div class="div">Yono</div>
                                                                    <div class="div label">
                                                                        <span>COMPANY</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="div">
                                                                <div class="div label">
                                                                    <span class="bubble">
                                                                        <span class="inbubble" title="dfsdfsdf">Mengajukan permohonan untuk mendapatkan listing gaji bulan oktober 2021</span>
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            
                                                        </div>
                                                    </td>
                                                    <td class="td-w210 wh-m-520">
                                                        <div class="td-iner">
                                                            <div class="div">
                                                                <span>Divisi</span>
                                                            </div>
                                                            <div class="div label">
                                                                <span class="ic flaticon-suitcase"></span>
                                                                <span>Sub Divisi</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="td-w210 wh-m-520">
                                                        <div class="td-iner">
                                                            <div class="div">
                                                                <span>
                                                                    <span class="ic sli_icon-user-following"></span>
                                                                    <span>Yono Cahyono</span>
                                                                </span>
                                                            </div>
                                                            <div class="div color-orange">
                                                                <span class="ic sli_icon-clock"></span>
                                                                <span class="fsize11">21/11/2021</span>
                                                            </div>
                                                            <div class="div color-green">
                                                                <span class="ic sli_icon-check"></span>
                                                                <span class="fsize11">21/11/2021</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="td-center td-w60">
                                                        <div class="td-iner disvis">
                                                            <div class="div">
                                                                <div class="dropdown dropleft">
                                                                    <button type="button" class="btn btn-primary nobr grey s11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                                        <span class="fas fa-ellipsis-v"></span>
                                                                    </button>
                                                                    <div class="dropdown-menu" x-placement="left-start" style="position: absolute; transform: translate3d(-150px, 0px, 0px); top: 0px; left: 0px; will-change: transform;">
                                                                        <a class="dropdown-item afalse cmd-modal" href="#" data-toggle="modal" data-target="#modalprogress">
                                                                            <span>Progress</span><span class="ic fas fa-bookmark"></span>
                                                                        </a>
                                                                        <a class="dropdown-item afalse cmd-modal" href="#" data-toggle="modal" data-target="#modaltaging">
                                                                            <span>Tag</span><span class="ic sli_icon-tag"></span>
                                                                        </a>
                                                                        <a class="dropdown-item afalse cmd-modal" href="#" data-toggle="modal" data-target="#modalnote">
                                                                            <span>Catatan</span><span class="ic sli_icon-note"></span>
                                                                        </a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item afalse cmd-modal color-orange cmd-vcustomers" href="#" data-togglex="modal" data-type="edit" data-open="page" data-target="#modalcustomers" data-token="bac5bd52333517ad35c57efd8be98625" role="off">
                                                                            <span>Sunting</span><span class="ic sli_icon-pencil"></span>
                                                                        </a>
                                                                        <div class="dropdown-divider"></div>
                                                                        <a class="dropdown-item color-green" href="http://localhost:8003/dashboard/customers/bac5bd52333517ad35c57efd8be98625">
                                                                            <span>Detail</span><span class="ic sli_icon-info"></span>
                                                                        </a>
                                                                    </div>
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
@endsection

@section('script')
<script>
$(document).ready(function()
{

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

        if( code === 13)
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

return false;
});
</script>
@endsection
