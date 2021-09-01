@extends('access.main')

@section('content')
<form action="{{$apps['URL_API']}}/api/resetpassword" id="form-repass" class="login100-form validate-form">

    <div class="div">
        <div class="ic-accss">
            <a href="{{$apps['URI']}}/">
                <img src="{{$apps['favicon']}}" alt="{{$apps['name']}}" class="fs"/>
            </a>
        </div>
    </div>

    <div class="nm-accss">
        <div class="div">Lupa Password?</div>
        <div class="div lbl">Masukan alamat email yang terpaut dengan {{$apps['name']}}</div>
    </div>

    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" autocorrect="off" data-validate = "Username is reauired">
        <input class="input100 fcs fcs1" tabindex="1" type="text" name="email" placeholder="">
        <span class="ic-reff-access flaticon-mail-1"></span>
        <span class="plc">Email</span>
        <a href="#" class="btn-txt-r clear" tabindex="9" role="off">
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-close-circle-o"></span>
                </div>
            </div>
        </a>
    </div>

    <div class="f-error" style="padding-top:5px;"></div>

        <div class="area-exe-btn">

            <div class="div area-load loading">
                <img src="{{$apps['URI']}}/assets/svg/loading.green.svg" alt="loading"/>
            </div>

            <div class="div inner">

                <div class="div">
                    <button class="nw-button green" role="off" tabindex="2" >Kirim</button>
                </div>

                <div class="div">
                    <div class="bts-pg-acc">
                        <span>Atau</span>
                    </div>
                </div>

                <div class="div">

                    <a href="{{$apps['URI']}}/login" tabindex="3" class="afalse nw-button empt" >Masuk akun Anda</a>

                </div>

            </div>
        </div>

</form>

<div class="area-pwd msgbox-success">
    <div class="inner">
        <div class="tbl">
            <div class="intbl">
                <span>
                    <div class="ab">
                        <div class="div">
                            <div class="ach-pwd animate-zoom">
                                <a href="#" class="close"role="off">
                                    <i class="zmdi zmdi-close"></i>
                                </a>
                                <div class="div">
                                    <div class="div logo">
                                        <i class="zmdi zmdi-check-circle"></i>
                                    </div>
                                    <div class="div ttl">Periksa kotak masuk email Anda</div>
                                    <p>Informasi perubahan Password berhasil kami kirimkan ke alamat email <b class="lbl-email">email@gmail.com</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </div>
    <div class="bck"></div>
</div>
@endsection