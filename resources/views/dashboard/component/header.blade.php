<header id="moby__header" class="moby__main-header">
    <div class="p-relative">

        <!-- Drawer icon  -->
        <i id="menu-btn-sec" class="icon-menu icon header-drawer-icon"></i>
        <i id="header-menu-btn" class="icon icon-menu drawer-btn"></i>

        <!-- Start of Search Bar  -->
        <div class="header-search-bar">
            <div class="input-group search-input area-header-src">
                <i class="icon-search_outlined icon"></i>
                <input type="text" class="form-control" placeholder="Cari Customer disini..." />
            </div>
            <i id="search-close-btn" class="icon close-icon icon-highlight_off_outlined mr-l-20 d-inline-block"></i>
        </div>

        <!-- End of Search Bar  -->
        <div class="moby__main-nav">
            <nav class="navbar navbar-expand-lg">
                <div class="navbar-collapse" id="navbarNav">
                    <ul class="moby__nav-list">
                        
                        <li class="nav-list hide">
                            <a id="search-btn" class="btn"><i class="icon icon-search_outlined"></i></a>
                        </li>

                        <li class="nav-list">

                            <!-- Moby Notification Dropdown -->
                            <div class="dropdown notification-holder notification-popover bell-animate area-notifications-dd" aria-status="false">

                                <a href="#" class="btn dropdown-toggle cmd-open-notif" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="bell-animate-icon icon icon-notifications_outlined_outlined"></i>

                                    <div class="val-notif-label area-count-notif">
                                        <div class="in-val">
                                            <div class="tbl">
                                                <div class="intbl">
                                                    <span>0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-right">

                                    <!-- Moby Connections -->
                                    <div class="moby__connection-holder">

                                        <!-- Notification Head -->
                                        <div class="cover-image" >
                                            <div class="tbl">
                                                <div class="intbl">
                                                    <div class="div">
                                                        <div class="div">
                                                            <span class="sli_icon-bell"></span>
                                                            <span>Pemberitahuan</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Notification Head -->

                                        <div class="tab-content pd-0">
                                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                <ul class="notfication-list scroller">

                                                    <!-- <li role="true">
                                                        <a href="#" class="ca-notify">
                                                            <span class="user-avatar avatar avatar-img">
                                                                <span class="sli_icon-bag"></span>
                                                            </span>
                                                            <div class="notification-list-content">
                                                                <h3 class="title fsize13">Verifikasi Pembayaran</h3>
                                                                <span class="label fsize12">Nomor Order #DSER0878731</span>
                                                                <span class="dt">
                                                                    <span class="fsize11">1 Jam lalu</span>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li> -->
                                                    
                                                    <!-- <li class="empty">
                                                        <div class="notification-list-content">
                                                            <div class="div">
                                                                <span>Tidak ada notifikasi</span>
                                                            </div>
                                                        </div>
                                                    </li> -->

                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- Moby Connections -->
                                </div>
                                
                            </div>

                        </li>


                        <li class="nav-list hide area-admincs">
                            <!-- Moby Notification Dropdown -->
                            <div class="dropdown notification-holder notification-popover">
                                <a href="" class="btn" role="off" data-togglex="modal" data-type="add" data-open="page" data-target="#modalcustomers">
                                    <i class="icon sli_icon-user-follow"></i>
                                </a>
                            </div>
                        </li>

                        <li class="nav-list">
                            <!-- Moby User Dropdown -->
                            <div class="moby__user">

                                <!-- Moby Setting Dropdown -->
                                <div class="dropdown notification-holder setting-popover-h">
                                    <a class="btn dropdown-toggle rounded-circle" data-toggle="dropdown">
                                        <div class="a-ft">
                                            <img src="/assets/images/none/user.png" id="account-image" alt="image">
                                        </div>
                                        <span class="icx" id="account-icon-level" role="">
                                            <div class="tbl">
                                                <div class="intbl">
                                                    <span class="flaticon2-shield"></span>
                                                </div>
                                            </div>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-right">
                                        <!-- Moby Connections -->
                                        <div class="moby__connection-holder">

                                            <!-- Notification Head -->
                                            <div class="cover-image" >
                                                <div class="tbl">
                                                    <div class="intbl">
                                                        <div class="div">
                                                            <div class="div" id="account-name">
                                                                <span >Account Name</span>
                                                            </div>
                                                            <div class="div label uname" id="account-username">
                                                                <span>username</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-content pd-0">
                                                <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home1-tab">
                                                    <ul class="notfication-list">
                                                        <li>
                                                            <a href="{{$apps['URI']}}/dashboard/account">
                                                                <div class="div">
                                                                    <span>Sunting Akun</span>
                                                                    <span class="ic sli_icon-user-following"></span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="account-logout">
                                                                <div class="div">
                                                                    <span>Keluar</span>
                                                                    <span class="ic sli_icon-logout"></span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <!-- <li>
                                                            <h3 class="title mr-b-0">
                                                                <i class="icon-person_outline_outlined icon danger mr-r-10"></i>Account</h3>
                                                            <i class="icon icon-keyboard_arrow_right_outlined mr-t-5 arrow"></i>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <h3 class="title mr-b-0">Sign-out</h3>
                                                                <i class="icon icon-keyboard_arrow_right_outlined mr-t-5 arrow"></i>
                                                            </a>
                                                        </li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Moby Connections -->
                                    </div>
                                </div>
                            </div>
                            <!-- Moby User Dropdown -->
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

        <form id="form-open-notif" action="/api/notification/open" class="hide">
            <input type="hidden" name="level" value="">
            <input type="hidden" name="slevel" value="">
            <input type="hidden" name="id" value="">
            <input type="hidden" name="compid" value="">
        </form>

        <form id="form-read-notif" action="/api/notification/read" class="hide">
            <input type="hidden" name="id" value="">
            <input type="hidden" name="href" value="">
        </form>


    </div>
</header>

<script>


//
$(document).ready(function()
{
    function confFOpenNotif()
    {
        $("body").find("form#form-open-notif input[name='id']").val(getaccount().id);
        $("body").find("form#form-open-notif input[name='level']").val(getaccount().level);
        $("body").find("form#form-open-notif input[name='slevel']").val(getaccount().sublevel);
        $("body").find("form#form-open-notif input[name='compid']").val(getaccount().config.company_id);
    }

    // if( getaccount().sublevel < 4 )
    // {
    //     $("body").find(".area-admincs").removeClass("hide");
    // }

    // confFOpenNotif();

    $("a.cmd-open-notif").click(function()
    {
        var cmd = $(this);

        if( cmd.attr("aria-expanded") === "false" && countTotalNotif > 0)
        {
            console.log('open');
            openNotif();
        
        }
    });


    $("body").on("click", ".cmd-read-notify", function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        var cmd = $(this),
        dataid = cmd.attr("dataid");

        if( cmd.attr("role") === "off" && cmd.attr("area-read") === "false" )
        {
            cmd.attr("role", "on");
            $("form#form-read-notif").find("input[name='id']").val(dataid);
            $("form#form-read-notif").find("input[name='href']").val(cmd.attr("href"));
            cmd.parent("li").attr("role", "true");
            cmd.attr("role", "off");
            //
            readNotif();
            return;
        }

        if( window.location.href !== cmd.attr("href") )
        {
            window.location.href = cmd.attr("href");
            return;
        }
        
    });
    return false;
})
</script>