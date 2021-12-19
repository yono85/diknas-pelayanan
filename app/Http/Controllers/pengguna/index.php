<?php

namespace App\Http\Controllers\pengguna;

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
            'title'         =>  'Pengguna | ' . $Config->apps()['name']
        ];

        return view('pengguna.index')->with($data);
    }
}
