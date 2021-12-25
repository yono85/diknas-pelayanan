<?php

namespace App\Http\Controllers\access;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\config\main as Config;

class index extends Controller
{
    //LOGIN
    public function login(Request $request)
    {

        $Config = new Config;


        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Masuk Akun Anda | ' . $Config->apps()['name']
        ];


        // dd($data);
        return view('access.login')->with($data);
    }

    public function branda(Request $request)
    {

        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Selamat Datang | ' . $Config->apps()['name']
        ];

        return view('access.branda')->with($data);
    }


    //REGISTER
    public function register(Request $request)
    {
        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Daftar Akun | ' . $Config->apps()['name']
        ];


        return view('access.registers')->with($data);
    }


    //FORGET PASSWORD   
    public function forgetpassword(Request $request)
    {
        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Lupa Password Anda? | ' . $Config->apps()['name']
        ];


        return view('access.forgetpassword')->with($data);
    }


    //PAGE CHANGE PASSWORD
    public function pagechangepassword(Request $request)
    {
        $Config = new Config;

        //
        $token = trim($request->token);

        //if not isset token
        if( !isset($request->token) )
        {
            return redirect('/404');
        }

        //
        $header = [
            "Content-Type: application/json",
            "key:" . $Config->apps()['key']
        ];

        $dataAPI = [
            'Type'      =>  'GET',
            'URL'       =>  $Config->apps()['URL_API'] . '/api/account/checkresetpassword?q=' . $token,
            'Header'    =>  $header
        ];

        $getAPI = new \App\Http\Controllers\api\index;
        $getAPI = $getAPI->get($dataAPI);


        //redirect
        if( $getAPI['status'] != 200 )
        {
            return redirect('/404');
        }

        $dataAPI = $getAPI['response'];

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Ganti Password | ' . $Config->apps()['name'],
            'token'         =>  $token
        ];


        return view('access.changepassword')->with($data);
    }


    //REGISTERS SUCCESS
    public function registerSuccess(Request $request)
    {
        $Config = new Config;

        //if not isset token
        if( !isset($request->token) )
        {
            return redirect('/404');
        }

        //
        $token = $request->token;
        $header = [
            "Content-Type: application/json",
            "key:" . $token
        ];

        $dataAPI = [
            'Type'      =>  'GET',
            'URL'       =>  $Config->apps()['URL_API'] . '/api/registers/success',
            'Header'    =>  $header
        ];

        $getAPI = new \App\Http\Controllers\api\index;
        $getAPI = $getAPI->get($dataAPI);

  
        //redirect
        if( $getAPI['status'] != 200 )
        {
            return redirect('/404');
        }

        $dataAPI = $getAPI['response'];


        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Register Success | ' . $Config->apps()['name'],
            'config'        =>  $dataAPI->config,
            'user'          =>  $dataAPI->users,
            'token'         =>  $token
        ];


        // dd($data);
        return view('access.registers-success')->with($data);
    }

    public function verification(Request $request)
    {

        $Config = new Config;

        //if not isset token
        if( !isset($request->token) )
        {
            return redirect('/404');
        }

        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Verifikasi Akun | ' . $Config->apps()['name'],
            'token'         =>  $request->token
        ];


        // dd($data);
        return view('access.registers-verification')->with($data);
    }

}
