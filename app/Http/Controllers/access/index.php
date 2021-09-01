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


    //REGISTER
    public function register(Request $request)
    {
        $data = [
            'URL'           =>  ''
        ];


        return view('access.register')->with($data);
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

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Ganti Password Anda | ' . $Config->apps()['name']
        ];


        return view('access.changepassword')->with($data);
    }

}
