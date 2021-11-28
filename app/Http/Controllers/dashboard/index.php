<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\config\main as Config;

class index extends Controller
{
    //
    public function main(Request $request)
    {
        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Selamat Datang di | ' . $Config->apps()['name']
        ];

        return view('dashboard.main')->with($data);

    }
}
