<html lang="id" >
    <head>
    <link rel="icon" href="{{$apps['favicon']}}" sizes="32x32">
    <link rel="icon" href="{{$apps['favicon']}}" sizes="192x192">
    <link rel="apple-touch-icon-precomposed" href="{{$apps['favicon']}}">
    <meta name="msapplication-TileImage" content="{{$apps['favicon']}}">
    <title>{{$title}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        * {
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }

        body{
            padding-top: 90px;
        }

        .boxed{
            margin: auto;
        }

        @media print {
            body {
                padding-top: 0;
            }

            #action-area {
                display: none;
            }

            .boxed{
                margin: unset;
            }
        }

        @media screen and (min-width: 1025px) {
            .btn-download {
                display: none !important;
            }

            .btn-back {
                display: none !important;
            }
        }

        @media screen and (max-width: 1024px) {
            .content-area>div {
                /* width: auto !important; */
            }

            .btn-print {
                display: none !important;
            }
        }

        @media screen and (max-width: 720px) {
            .content-area>div {
                width: auto !important;
            }
        }

        @media screen and (max-width: 420px) {
            .content-area>div {
                width: 790px !important;
            }
        }

        @media screen and (max-width: 430px) {
            .content-area {
                transform: scale(0.59) translate(-35%, -35%)
            }

            .content-area>div {
                width: 720px !important;
            }

            .btn-print {
                display: none !important;
            }
        }

        @media screen and (max-width: 380px) {
            .content-area {
                transform: scale(0.45) translate(-58%, -62%);
            }

            .content-area>div {
                width: 790px !important;
            }

            .btn-print {
                display: none !important;
            }
        }

        @media screen and (max-width: 320px) {
            .content-area>div {
                width: 700px !important;
            }
        }
    </style>

    <link rel="stylesheet" type="text/css" href="{{$apps['URI']}}/assets/css/default.css">
    <script src="{{$apps['URI']}}/assets/js/js10.js" type="text/javascript"></script>
    <script src="{{$apps['URI']}}/assets/js/global.js" type="text/javascript"></script>
    
</head>

<body style="font-family: open sans, tahoma, sans-serif; margin: 0; -webkit-print-color-adjust: exact;">
    
    <div class="splash-dis wth">
        <div class="tbl">
            <div class="intbl txt-center">
                <div class="div">
                    <div class="logo-ctr"></div>
                    <div class="div">
                        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- head -->
        <div id="action-area">
        <div id="navbar-wrapper" style="padding: 12px 16px;font-size: 0;line-height: 1.4; box-shadow: 0 -1px 7px 0 rgba(0, 0, 0, 0.15); position: fixed; top: 0; left: 0; width: 100%; background-color: #FFF; z-index: 100;">
            <div class="header-btn" style="margin:auto; width:440px">

                <div style="width: 50%; display: inline-block; vertical-align: middle; font-size: 12px;">
                    <div class="btn-back" >
                        
                    </div>
                </div>
                <div style="width: 50%; display: inline-block; vertical-align: middle; font-size: 12px; text-align: right;">
                    <a class="btn-download" href="javascript:window.print()" style="display: inline-block; vertical-align: middle;">
                        <img src="{{$apps['URI']}}/assets/icon/download-invoice.png" alt="Download" width="20px" ;="">
                    </a>
                    <a class="btn-print" href="javascript:window.print()" style="height: 100%; display: inline-block; vertical-align: middle;">
                        <button id="print-button" style="border: none; height: 100%; cursor: pointer;padding: 8px 40px;border-color: #03AC0E;border-radius: 8px;background-color: #03AC0E;margin-left: 16px;color: #fff;font-size: 12px;line-height: 1.333;font-weight: 700;">Cetak</button>
                    </a>
                </div>

            </div>
            

        </div>
    </div>
    
    

    <div class="content-area">

        <!-- top -->

        <!-- bottom -->
        <div class="boxed" style="width: 440px;">
            <table width="100%" cellspacing="0" cellpadding="0" style="width: 100%; padding: 5px 35px 15px 35px; color: #343030; border:2px solid #666;">
                <tbody>
                    <tr>
                        <td>
                            <table style="width:100%; font-size:12px; border-bottom:1px solid #aaa; padding:10px 0px">
                                <tbody>
                                    <tr>
                                        <td style="width:32px">
                                            <img src="{{$apps['logo']}}" alt="Formasi" style="margin-bottom: 0px; width: 32px;">
                                        </td>
                                        <td style="width: calc(100% - 44px); text-align:center; font-size:13px; padding-right:15px">
                                            <table style="font-size:12px; text-align:center; width:100%; color:#444;">
                                                <tr>
                                                    <td><b>Simpeldik</b></td>
                                                </tr>
                                                <tr>
                                                    <td style="color:#666">
                                                        <span>{{$apps['name']}}</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 15px">
                            <table width="100%" cellspacing="0" cellpadding="0" style="padding-bottom: 20px; border-bottom: thin dashed #cccccc;">
                                <tbody>
                                    <tr>
                                        <td style="width: 45%; vertical-align: top;">
                                            <table style=" font-size:12px; width:100%;">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:50%">
                                                            <span>Nomor Tiket: <b class="view-code">kode</b></span>
                                                        </td>
                                                        <td style="width:50%; text-align:right; font-size:10px">
                                                            <span>Tanggal: <span class="view-date">date</span></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" style="height:10px"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:10px; padding-bottom:10px; border-bottom: thin dashed #cccccc;">
                            <table style="width:100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table style="font-size:12px; width:100%;">
                                                <tbody>
                                                    <tr>
                                                        <td style="color: #666">Perihal:</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="view-detail">detail</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="color: #666">Ditujukan kepada:</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="view-tujuan">tujuan</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:10px; padding-bottom:10px;">
                            <table style="width:100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table style="font-size:12px; width:100%;">
                                                <tbody>
                                                    <tr>
                                                        <td style="color: #666">Teller:</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span class="view-teller">teller</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>


                    <tr>
                        <td style="padding-top:10px;"></td>
                    </tr>

                    <tr>
                        <td style="border: 1px solid #888; padding:8px 8px; border-radius:12px; text-align:center; font-size:12px;" colspan="2">
                        <span>Lacak status tiket disini:</span>
                        <a href="{{$apps['URI']}}">{{$apps['URI']}}/tracking</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>

    
    <!-- end -->

</body>
<script>
var tokenu = window.location.href.split("token=");

$(document).ready(function()
{

    async function getprint()
    {
        var $URL = '{{$apps["URL_API"]}}/api/print/ticket?token=' + tokenu[1];

        $.ajax({
            type: "GET",
            url: $URL,
            headers:{
                "Content-Type":"application/json",
                "key":"{{$apps['key']}}"
            },
            cache: false,
            timeout: 18000,
            dataType: "JSON",
            success: function(n)
            {
                console.log(n);
                var rsp = n.response;
                $(".view-code").html(rsp.code);
                $(".view-date").html(rsp.date);
                $(".view-detail").html(rsp.detail);
                $(".view-tujuan").html(rsp.bidang + " - " + rsp.seksi);
                $(".view-teller").html(rsp.teller);
                hideSplash();
            },
            error: function(n)
            {
                console.log(n);
                window.location.href = "/404";
            }
        });
    }

    getprint();
    
    
    return false;
});
</script>
</html>