@extends('access.main')

@section('content')
<form action="{{$apps['URL_API']}}/api/account/changepassword-out" id="form-changepassword" class="login100-form validate-form">

    <div class="div">
        <div class="ic-accss">
            <a href="{{$apps['URI']}}">
                <img src="{{$apps['favicon']}}" class="fs" alt="{{$apps['name']}}"/>
            </a>
        </div>
    </div>

    <div class="nm-accss">
        <div class="div">Ubah Password Anda</div>
    </div>

    
    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" data-validate="Password is required">
        <input class="input100 fcs fcs1" tabindex="1" type="password" name="password" autocorrect="off" autocomplete="password" placeholder="">
        <span class="focus-input100 ic" data-symbol="&#xf190;"></span>
        <span class="plc">Password</span>
        <a href="#" class="btn-txt-r eye" tabindex="10" role="off" >
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-eye"></span>
                </div>
            </div>
        </a>
        <div class="div">
            <div class="label-error">
                
            </div>
        </div>
    </div>

    <div class="wrap-input100 validate-input m-b-23 are-hov" data-role="off" data-validate="Password is required">
        <input class="input100 fcs fcs2" tabindex="2" type="password" name="repassword" autocorrect="off" autocomplete="password" placeholder="">
        <span class="focus-input100 ic" data-symbol="&#xf190;"></span>
        <span class="plc">Re-Password</span>
        <a href="#" class="btn-txt-r eye" tabindex="10" role="off" >
            <div class="tbl">
                <div class="intbl">
                    <span class="zmdi zmdi-eye"></span>
                </div>
            </div>
        </a>
        <div class="div">
            <div class="label-error">
            </div>
        </div>
    </div>

    <div class="f-error" style="padding-top:0px;"></div>

    <div class="area-exe-btn">

        <div class="div area-load loading">
            <img src="{{$apps['URI']}}/assets/svg/loading.green.svg" alt="loading"/>
        </div>

        <div class="div inner">

            <div class="div">
                <button class="nw-button green" tabindex="3" role="off">Ubah Password</button>
            </div>

            <div class="div">
                <div class="bts-pg-acc">
                    <span>Atau</span>
                </div>
            </div>

            <div class="div">
                <a href="{{$apps['URI']}}/login" tabindex="5" class="nw-button empt">Masuk Akun Anda</a>
            </div>

        </div>
    </div>

    <input type="hidden" value="changepassword" name="type" >
    
</form>
@endsection