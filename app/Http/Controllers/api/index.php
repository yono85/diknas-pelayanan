<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class index extends Controller
{
    //
    public function get($request)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $request['URL'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $request['Type'],
            CURLOPT_HTTPHEADER => $request['Header'],
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);
        $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        if( $err )
        {
            $data = [
                'message'       =>  'Data gagal dimuat',
                'status'        =>  500
            ];
            return $data;
        }

        if( $httpcode != 200)
        {
            $data = [
                'message'       =>  'Data tidak ditemukan',
                'status'        =>  $httpcode
            ];
            return $data;
        }

        // else
        // {
            $response = json_decode($response);
            $data = [
                'message'       =>  $response->message,
                'response'      =>  $response->response,
                'status'        =>  200
            ];
        // }


        return $data;
    }
}
