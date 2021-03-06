
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

        <!-- MODAL FORM TICKET VISIT -->
        <div class="modal-form-ticket-visit">
            <div class="modal modal-area show">
                <div class="inar black">
                    <div class="boxid modal-box reg-area animate-TopToBottom" role="true">
                        <div class="form-register black w720">
                            <div class="main-reg">
                                <div class="inmod">
                                    <div class="div">
                                        <a href="#" class="close close-modal" role="off" style="right:-25px; top: -10px">
                                            <span class="fas flaticon2-cross"></span>
                                        </a>
                                        <div class="div ttl">
                                            <div class="div">
                                                <b>Buat Tiket</b>
                                            </div>
                                            <div class="div">
                                                <h3>Pengajuan Tiket Home Visit</h3>
                                            </div>
                                        </div>
                                        <div class="div">
                                            <form action="/api/ticket/visit/create"  enctype="multipart/form-data" novalidate="novalidate" id="">
                                                <div class="inar-form w520auto">
                                                    <div class="div">

                                                        <div class="legend area-legend" aria-role="on">
                                                            <div class="hd-legend">
                                                                <a href="#" class="cmd-role-legend" role="on">
                                                                    <div class="div">
                                                                        <span class="sli_icon-user"></span>
                                                                        <span>Penghadap</span>
                                                                        <span class="ic">
                                                                            <span class="fa flaticon2-plus fsize10 plus"></span>
                                                                            <span class="fa flaticon2-line fsize10 min"></span>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="inr-legend">
                                                                <div class="div box-legend">
            

                                                                    <div class="div ar-ctn ar-content" role="false">
                                                                        <div class="in-arctn">
                                                                            <span class="label">NAMA</span>
                                                                            <input type="text" name="visit_name" class="txt fcs" maxlength="100">
                                                                        </div>
                                                                    </div>

                                                                    <div class="div ar-ctn ar-content" role="false">
                                                                        <div class="in-arctn">
                                                                            <span class="label">NIK</span>
                                                                            <input type="text" name="visit_nik" class="txt fcs number" maxlength="20">
                                                                        </div>
                                                                    </div>

                                                                    <div class="div ar-ctn ar-content" role="false">
                                                                        <div class="in-arctn">
                                                                            <span class="label">NO HP</span>
                                                                            <input type="text" name="visit_hp" class="txt fcs number" maxlength="14">
                                                                        </div>
                                                                    </div>
        
                                                                    <div class="div ar-ctn ar-content mg-b0" role="false">
                                                                        <div class="">
                                                                            <textarea name="visit_address" class="fcs" placeholder="Alamat Lengkap" maxlength="150"></textarea>
                                                                        </div>
                                                                    </div>
                    
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="legend area-legend" aria-role="on">
                                                            <div class="hd-legend">
                                                                <a href="#" class="cmd-role-legend" role="on">
                                                                    <div class="div">
                                                                        <span class="sli_icon-home"></span>
                                                                        <span>Data Sekolah</span>
                                                                        <span class="ic">
                                                                            <span class="fa flaticon2-plus fsize10 plus"></span>
                                                                            <span class="fa flaticon2-line fsize10 min"></span>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div class="inr-legend">
                                                                <div class="div box-legend">
            

                                                                    <div class="div ar-ctn area-select-sch">
                                                                        <div class="in-arctn">
                                                                            <div class="ddwn area-ddwn ar-content keep" aria-load="false" >
                                                                                <button class="btn br-rds8 cddwn fcs" role="off" >
                                                                                    <label><span class="fsize14 color-black">Pilih Sekolah</span></label>
                                                                                </button>
                
                                                                                <div class="ddwn-pg area-ddwn-page">
                                                                                    <div class="ddwn-header">
                                                                                        <div class="inhd">
                                                                                            <button height="auto" type="button"></button>
                                                                                            <input type="text" placeholder="Cari Sekolah" class="tsrc ddwn-tsrc-get" data-timer="1000" data-eval="getListSekolah">
                                                                                            <div class="load-src"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <ul>
                                                                                        <!-- list -->
                                                                                    </ul>
                                                                                </div>
                
                                                                                <input type="hidden" class="value-dropdown txt-def-empty" name="school_id" value="">
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="div ar-ctn ar-content" role="false">
                                                                        <div class="in-arctn">
                                                                            <span class="label">NO SURAT</span>
                                                                            <input type="text" name="nosurat" class="txt fcs" maxlength="20">
                                                                        </div>
                                                                    </div>

                                                                    <div class="div ar-ctn ar-content" role="false">
                                                                        <div class="in-arctn">
                                                                            <span class="label">TANGGAL SURAT</span>
                                                                            <input type="date" name="tglsurat" class="txt fcs" maxlength="14" >
                                                                        </div>
                                                                    </div>
        
                                                                    <div class="div ar-ctn ar-content mg-b0" role="false">
                                                                        <div class="">
                                                                            <textarea name="isisurat" class="fcs" placeholder="Isi Surat" maxlength="150"></textarea>
                                                                        </div>
                                                                    </div>
                    
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div class="legend area-legend" aria-role="on">
                                                            <div class="hd-legend">
                                                                <a href="#" class="cmd-role-legend" role="on">
                                                                    <div class="div">
                                                                        <span class="sli_icon-user"></span>
                                                                        <span>Admin TL</span>
                                                                        <span class="ic">
                                                                            <span class="fa flaticon2-plus fsize10 plus"></span>
                                                                            <span class="fa flaticon2-line fsize10 min"></span>
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div class="inr-legend">
                                                                <div class="div box-legend">
            
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
                                                        <span class="dt-bubble date"></span>
                                                    </div>
                                                    <div class="div fsize12 txt-right">
                                                        #<span class="lbl pelayanan">Pelayanan</span>
                                                    </div>
                                                </li>
                                                <li class="fsize11 hide">
                                                    <b>STATUS:</b>
                                                </li>
                                                <li>
                                                    <ul class="child replay pd-b10">
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
                                                        <span class="dt-bubble date"></span>
                                                    </div>
                                                    <div class="div fsize12 txt-right">
                                                        #<span class="lbl pelayanan">Pelayanan</span>
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

                                                        <!-- 
                                                            <li class="bubble">
                        
                                                            <div class="div ">
                                                                <div class="sts color-green fsize9"><span class="ic sli_icon-check"></span><span class="up-txt">DONE</span></div>
                                                            </div>

                                                            <div class="inar-bubble">
                                        
                                                                <div class="div clr-float"><div class="arimg br-rds50p"></div>
                                                                    <div class="arinf">
                                                                    <div class="div">
                                                                            <span>User</span>
                                                                            <span class="dot w6 brc"></span>
                                                                            <span class="fsize10">01/01/2021</span>
                                                                        </div>
                                                                        <div class="div">
                                                                            <div class="bubble-txt">
                                                                                <p>TEst ersdfda adfaf adfa faf afdsaf</p>
                                                                                <div class="div clr-float">
                                                                                    <a href="#" class="fl-right fsize10">
                                                                                        <span class="sli_icon-arrow-down"></span>
                                                                                        <span class="fsize9">DOWNLOAD</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    -->

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

        <!-- MODAL SUPER ADMIN -->
        <div class="modal-superadmin">
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
                                                <b>Admin</b>
                                            </div>
                                            <div class="div">
                                                <h3>Tambah akun Level Admin</h3>
                                            </div>
                                        </div>
                                        <div class="div">
                                            <form action="/api/pengguna/create-admin"  novalidate="novalidate" id="">
                                                <div class="div">
                                                    <div class="div">
                                                        <div class="div">

                                                            <div class="div ar-ctn ar-content" role="false">
                                                                <div class="">
                                                                    <div class="div">
                                                                        <span class="label fsize10">NAMA LENGKAP</span>
                                                                    </div>
                                                                    <input type="text" name="name" class="txt empty">
                                                                </div>
                                                            </div>

                                                            <div class="div ar-ctn ar-content" role="false">
                                                                <div class="">
                                                                    <div class="div">
                                                                        <span class="label fsize10">ALAMAT EMAIL</span>
                                                                    </div>
                                                                    <input type="text" name="email" class="txt empty">
                                                                </div>
                                                            </div>

                                                            <div class="div">
                                                                <div class="bts">
                                                                    <span>LEVEL</span>
                                                                </div>
                                                            </div>

                                                            <div class="div ar-ctn area-select-level">
                                                                <!-- <div class="in-arctn"> -->

                                                                    <div class="ddwn area-ddwn ar-content keep">

                                                                        <button class="btn br-rds8 cddwn fcs" role="off">
                                                                            <label><span class="fsize14 color-black">Pilih Level</span></label>
                                                                        </button>
        
                                                                        <div class="ddwn-pg area-ddwn-page">
                                                                            <ul>
                                                                                <!-- list -->
                                                                                <li aria-selected="false">
                                                                                    <button role="off" dataid="9" data-modal="" data-modal-label="" data-get="" class="cmd-select-level"><span>Super Admin</span></button>
                                                                                </li>
                                                                                <li aria-selected="false">
                                                                                    <button role="off" dataid="1" data-modal="" data-modal-label="" data-get="" class="cmd-select-level"><span>Admin TL</span></button>
                                                                                </li>
                                                                                <li aria-selected="false">
                                                                                    <button role="off" dataid="4" data-modal="" data-modal-label="" data-get="" class="cmd-select-level"><span>Teller</span></button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
        
                                                                        <input type="hidden" class="value-dropdown empty" name="level_selected" value="">

                                                                    </div>

                                                                    <!-- labelerror -->
                                                                <!-- </div> -->
                                                            </div>

                                                            <div class="div ar-ctn hide area-select-bidang area-select-second">

                                                                <div class="ddwn area-ddwn ar-content keep">

                                                                    <button class="btn br-rds8 cddwn fcs" role="off" disabled="disabled">
                                                                        <label><span class="fsize14 color-black">Pilih Bidang</span></label>
                                                                    </button>
    
                                                                    <div class="ddwn-pg area-ddwn-page">
                                                                        <ul>
                                                                            <!-- list -->
                                                                        </ul>
                                                                    </div>
    
                                                                    <input type="hidden" class="value-dropdown empty" name="bidang_selected" value="">

                                                                </div>
                                                            </div>

                                                            <div class="div ar-ctn hide area-select-seksi area-select-second">
                                                            <!-- <div class="in-arctn"> -->
                                                                <div class="ddwn area-ddwn ar-content keep">
                                                                    <button class="btn br-rds8 cddwn fcs" role="off" disabled="disabled">
                                                                        <label><span class="fsize14 color-black">Pilih Seksi</span></label>
                                                                    </button>
    
                                                                    <div class="ddwn-pg area-ddwn-page">
                                                                        <ul>
                                                                            <!-- list -->
                                                                        </ul>
                                                                    </div>
    
                                                                    <input type="hidden" class="value-dropdown txt-def-empty" name="seksi_selected empty" value="">
                                                                </div>
                                                            <!-- </div> -->
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="div fot">
                                                        <button class="submit btn blue is-loading" role="off">
                                                            <span>Buat Akun</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="user_id" value="">
                                                <input type="hidden" name="subbidang zero" value="0">
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

        <!-- MODAL VIEW VERIFY USER -->
        <div class="modal-view-verify">
            <div class="modal modal-area show">
                <div class="inar black modal-progress">
                    <div class="boxid modal-box reg-area animate-TopToBottom" role="true">
                        <div class="form-register black w720 pd0" aria-load="false">
                            
                            <div class="load txt-center">
                                <img src="/assets/svg/loading.blue.svg" alt="loading">
                            </div>

                            <div class="main-reg pd-t25">
                                <div class="inmod">
                                    <div class="div">
                                        <div class="div ttl hide">
                                            <div class="div">
                                                <b>Verifikasi Akun</b>
                                            </div>
                                            <div class="div">
                                                <h3></h3>
                                            </div>
                                        </div>
                                        <div class="div">
                                            <form action="/api/account/verify-cek-file" >
                                                <ul>
                                                    <li class="top pd-lr30 mg-b0">
                                                        <div class="div owner">
                                                            <div class="div clr-float">
                                                                <div class="fl-left">
                                                                    <div class="img br-rds50p fl-left position-rel" style="left:0px"></div>
                                                                    <div class="inf pd-l10">
                                                                        <div class="div">
                                                                            <b class="user_name">{user_name}</b>
                                                                        </div>
                                                                        <div class="div up-txt fsize10">
                                                                            <span class="color-green company_name">{company}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="fl-right">
                                                                        <button class="fl-right green btn is-loading submit" role="off">
                                                                            <span>Verifikasi</span>
                                                                        </button>

                                                                        <input type="hidden" name="account_id" value="" >
                                                                        <button class="btn fl-right mg-r10 br-rds8 no-br close-modal br-ou-none" role="off">
                                                                            <span>Batal</span>
                                                                        </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <input type="hidden" name="user_id" value="">
                                            </form>
                                        </div>
                                        <div class="div">
                                            <div class="area-view-pdf">
                                                <!-- area preview  -->
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

    $("body").on("click", ".cmd-role-legend", function(e)
    {
        e.preventDefault();
        

        var cmd = $(this),
        area = cmd.parents(".area-legend");

        if( cmd.attr("role") === "off")
        {
            cmd.attr("role", "on");
            area.attr("aria-role", "on");
        }
        else
        {
            cmd.attr("role", "off");
            area.attr("aria-role", "off");
        }
    })

    return false;
});
</script>
