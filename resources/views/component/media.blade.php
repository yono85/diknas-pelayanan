
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
            
                                                            <div class="div ar-ctn area-select-seksi">
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
                                                <b>Progress Tiket</b>
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
            
                                                            <div class="div ar-ctn area-select-seksi">
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
