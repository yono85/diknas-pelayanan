
<style>
.area-qr{
    display:inline-block;
    background-color:#1974D2;
    color: #fff;
    box-sizing:border-box;
    /* height: 140px; */
    position:relative;
    padding: 5px 5px 5px 5px;
    border-radius: 4px;
}

.area-qr .box{
    /* margin: 20px; */
    display:block;
    /* width: 100%; */
    background-color:#fff;
    box-sizing:border-box;
    padding:15px;
    /* border: 15px solid #fff; */
    border-radius: 4px;
}

.area-qr .box img{
    width: 90px;
    height: 90px;
}

.area-qr .foot{
    display:block;
    width: 100%;
    box-sizing:border-box;
    padding:15px 3px 10px 3px;
    text-align:center;
    /* font-weight:bold; */
    font-size: 12px;
    font-family: 'Arial';
}
</style>
<div class="area-qr">
    <div class="box">
        <img src="data:image/png;base64, {{$urlqrcode}}" alt="Barcode Image"/>
    </div>
    <div class="foot">
        <span>{{$code}}</span>
    </div>
</div>

<!-- {!! urlqrcode } -->