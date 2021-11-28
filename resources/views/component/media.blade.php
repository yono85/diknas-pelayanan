
<div class="hide area-media">

    <!-- ALERT NOTIF -->
    <div class="div content-notif">

        <!-- <div class="alert-new alert-area success animate-TopToBottom" role="true"> -->
            <div class="inner">
                <a href="#" class="close close-alert" role="off">
                    <span class="fas flaticon2-cross"></span>
                </a>
                <div class="div">
                    <span class="fas flaticon2-warning"></span>
                    <span class="label-name">{label}</span>
                </div>
            </div>
        <!-- </div> -->

    </div>
    <!-- END NOTIF -->

    <div class="div area-modal-content">

        <!-- MODAL FORM TICKET -->
        <div class="modal-form-ticket">
            <div class="modal modal-area show">
                <div class="inar black">
                    <div class="boxid modal-box reg-area animate-TopToBottom" role="true">
                        <div class="form-register black">
                            <div class="main-reg">
                                <div class="inmod">
                                    <div class="div">
                                        <a href="#" class="close close-modal" role="off">
                                            <span class="fas flaticon2-cross"></span>
                                        </a>
                                        <div class="div ttl">
                                            <div class="div">
                                                <b>Buat Tiket</b>
                                            </div>
                                            <div class="div">
                                                <h3>Pengajuan tiket kepada admin</h3>
                                            </div>
                                        </div>
                                        <div class="div">
                                            <form action="/api/ticket/create"  enctype="multipart/form-data" novalidate="novalidate" id="">
                                                <div class="div">
                                                    <div class="div">
                                                        <div class="div">
    
                                                            <div class="div ar-ctn area-select-bidang">
                                                                <div class="in-arctn">
                                                                    <div class="ddwn area-ddwn ar-content keep">
                                                                        <button class="btn br-rds8 cddwn fcs" role="off" >
                                                                            <label><span class="fsize14 color-black">Pilih Bidang</span></label>
                                                                        </button>
            
                                                                        <div class="ddwn-pg area-ddwn-page">
                                                                            
                                                                            <ul>
                                                                                <!-- <li aria-selected="false">
                                                                                    <button role="off" dataid="10001" data-modal="" data-modal-label="" data-get=""><span>Guru</span></button>
                                                                                </li> -->
                                                                            </ul>
                                                                        </div>
            
                                                                        <input type="hidden" class="value-dropdown txt-def-empty" name="bidang_selected" value="">
                                                                    </div>
                                                                </div>
                                                            </div>
            
                                                            <div class="div ar-ctn area-select-seksi hide">
                                                                <!-- <div class="in-arctn"> -->
            
                                                                    <div class="ddwn area-ddwn ar-content keep">
            
                                                                        <button class="btn br-rds8 cddwn fcs" disabled="disabled" role="off">
                                                                            <label><span class="fsize14 color-black">Pilih Pelayanan</span></label>
                                                                        </button>
            
                                                                        <div class="ddwn-pg area-ddwn-page">
                                                                            <ul>
                                                                                <!-- list -->
                                                                                <li aria-selected="false">
                                                                                    <button role="off" dataid="1" data-modal="" data-modal-label="" data-get="" class="cmd-status"><span>PNS</span></button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
            
                                                                        <input type="hidden" class="value-dropdown" name="seksi_selected" value="">
            
                                                                    </div>
            
                                                                    <!-- labelerror -->
                                                                <!-- </div> -->
                                                            </div>

                                                            <div class="div ar-ctn area-select-pelayanan hide">
                                                                <!-- <div class="in-arctn"> -->
            
                                                                    <div class="ddwn area-ddwn ar-content keep">
            
                                                                        <button class="btn br-rds8 cddwn fcs" disabled="disabled" role="off">
                                                                            <label><span class="fsize14 color-black">Pilih Pelayanan</span></label>
                                                                        </button>
            
                                                                        <div class="ddwn-pg area-ddwn-page">
                                                                            <ul>
                                                                                <!-- list -->
                                                                                <li aria-selected="false">
                                                                                    <button role="off" dataid="1" data-modal="" data-modal-label="" data-get="" class="cmd-status"><span>PNS</span></button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
            
                                                                        <input type="hidden" class="value-dropdown" name="pelayanan_selected" value="">
            
                                                                    </div>
            
                                                                    <!-- labelerror -->
                                                                <!-- </div> -->
                                                            </div>

                                                            <div class="div ar-ctn ar-content mg-b0" role="false">
                                                                <div class="">
                                                                    <textarea name="text" class="fcs" placeholder="Tuliskan detail pengajuan tiket..."></textarea>
                                                                </div>
                                                            </div>
            
                                                        </div>
                                                    </div>
                                                    <div class="div fot">
                                                        <button class="submit btn blue is-loading" role="off">
                                                            <span>Buat Tiket</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="type" value="">
                                                <input type="hidden" name="user_id" value="">
                                                <input type="hidden" name="company_id" value="">
                                                <input type="hidden" name="level" value="">
                                                <input type="hidden" name="subbidang" value="0">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL VIEW TICKET USER -->
        <div class="modal-view-ticket-user">
            <div class="modal modal-area show">
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
                                                                        <b class="user_name">User</b>
                                                                    </div>
                                                                    <div class="div up-txt fsize10">
                                                                        <span class="color-green user_company">company</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- <div class="fl-right txt-right fsize11">
                                                                <span class="date">date</span>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                    <div class="div">
                                                        <p class="bubble detail">...</p>
                                                    </div>
                                                    <div class="div fsize12 txt-right">
                                                        #<span class="lbl pelayanan">Pelayanan</span>
                                                        <span class="dot w6 brc"></span>
                                                        <span class="date"></span>
                                                    </div>
                                                </li>
                                                <li class="fsize11 hide">
                                                    <b>STATUS:</b>
                                                </li>
                                                <li>
                                                    <ul class="child replay">
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL REPLAY TICKET -->
        <div class="modal-view-replay-tiket">
            <div class="modal modal-area show">
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
                                                                        <b class="user_name">User</b>
                                                                    </div>
                                                                    <div class="div up-txt fsize10">
                                                                        <!-- <span class="lbl user_type">type</span>
                                                                        <span class="dot w6 brc"></span> -->
                                                                        <span class="color-green user_company">company</span>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <!-- <div class="fl-right txt-right fsize11">
                                                                <span class="date">date</span>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                    <div class="div">
                                                        <p class="bubble detail">...</p>
                                                    </div>
                                                    <div class="div fsize12 txt-right">
                                                        #<span class="lbl pelayanan">Pelayanan</span>
                                                        <span class="dot w6 brc"></span>
                                                        <span class="date"></span>
                                                    </div>
                                                </li>
                                                <li class="fsize11 hide">
                                                    <b>STATUS:</b>
                                                </li>
                                                <li>
                                                    <ul class="child replay">

                                                        <!-- <li class="text-right">
                                                            <button class="btn orange is-loading br-rds23 w50p" role="off">
                                                                <span>Progress</span>
                                                            </button>
                                                        </li> -->

                                                    </ul>
                                                </li>
                                                <li class="area-replay pd-t10">
                                                    <form action="/api/ticket/replay" enctype="multipart/form-data" novalidate="novalidate" id="form-replay" class="pd-b0 hide">
                                                        <div class="div">
                                                            <div class="div clr-float">
                                                                <div class="div ar-post">
                                                                    <div class="div ar-content">

                                                                        <div class="div clr-float">
                                                                            <textarea name="text" class="send" placeholder="Ketikan detail tanggapan..."></textarea>
                                                                            <button class="btn green is-loading cmd-submit" role="off">
                                                                                <span class="sli_icon-paper-plane"></span>
                                                                            </button>
                                                                        </div>
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

                                                        <input type="hidden" name="user_id" value="">
                                                        <input type="hidden" name="ticket_id" value="">
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
            </div>
        </div>

    </div>


</div>

<script>
$(document).ready(function()
{

    $('body').on('click', '.close-modal', function(e)
    {
        e.preventDefault();
        closeModal($(this));
    });

    $('body').on('click', '.close-alert', function(e)
    {
        e.preventDefault();
        closeAlert($(this));
    });

    return false;
});
</script>
