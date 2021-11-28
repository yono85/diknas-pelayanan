<?php

namespace App\Http\Controllers\ticket;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\config\main as Config;


class index extends Controller
{

    //PERMINTAAN
    public function permintaan(Request $request)
    {
        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Tiket Permintaan | ' . $Config->apps()['name']
        ];

        return view('ticket.permintaan')->with($data);
    }

    //PENGAJUAN
    public function pengajuan(Request $request)
    {
        $Config = new Config;

        //
        $data = [
            'apps'          =>  $Config->apps(),
            'title'         =>  'Tiket Pengajuan | ' . $Config->apps()['name']
        ];

        return view('ticket.pengajuan')->with($data);
    }

    
}
