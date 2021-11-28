<?php

namespace App\Http\Controllers\page;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\config\main as Config;

class error extends Controller
{
    //
    public function error404()
    {

        $Config = new Config;

        $data = [
            'code'          =>  404,
            'title'         =>  '404' . ' | ' . $Config->apps()['name'],
            'content'       =>  'Halaman tidak ditemukan',
            'apps'          =>  $Config->apps()
        ];


        // return response()->json($data,200);
        return response()->view('error.page',$data,200);
    }
}
