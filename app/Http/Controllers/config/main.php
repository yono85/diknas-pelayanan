<?php

namespace App\Http\Controllers\config;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class main extends Controller
{
    //
    public function URI()
    {
        if (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')
        {
            $URI = 'https://' . $_SERVER['HTTP_HOST'];
        }
        else
        {
            $URI = 'http://' . $_SERVER['HTTP_HOST'];
        }

        return $URI;  
    }



    public function apps()
    {

        $data = [
            'name'              =>  'Sistem Managemen Pelayanan Disdik',
            'favicon'           =>  $this->URI() . '/assets/images/logo/logo-disdik-dki.png',
            'logo'              =>  $this->URI() . '/assets/images/logo/logo-disdik-dki.png',
            'URI'               =>  $this->URI(),
            'URL_API'           =>  env('URL_API'),
            'URL_STORAGE'       =>  env('URL_STORAGE'),
            'cookie'            =>  env('APP_COOKIE'),
            'created_date'        =>  '&copy;' . (date('Y', time()) === '2021' ? '2021' : '2021 - ' . date('Y', time())),
        ];

        return $data;
    }
}
