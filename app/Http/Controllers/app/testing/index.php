<?php

namespace App\Http\Controllers\app\testing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DNS1D;
use DNS2D;
use GeoIp;
use Jenssegers\Agent\Agent;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class index extends Controller
{
    //
    public function main(Request $request)
    {
    
        if( !isset($request->type)) 
        {
            return 'type in url missing';
        }

        $arr = ['qrcode','geoip','uagent','sendmail'];


        if( in_array( $request->type, $arr) == 0 )
        {
            return 'null';
        }


        if( $request->type == 'geoip')
        {

            $status = 200;
            $data = [
                'ip'        =>  $request->ip()
            ];
        }
        elseif( $request->type == 'qrcode')
        {

            if( isset($request['code']) )
            {
                $status = 200;
                $data = [
                    'code'        =>  trim($request['code'])
                ];
            }
            else
            {
                $status = 500;
            }
            
        }
        else
        {
            $status = 200;
            $data = '';
        }


        if( $status != 200)
        {
            return 'null';
        }

        $page = 'page_' . $request->type;
        return $this->$page($data);

    }



    public function page_qrcode($request)
    {
        
        $code = 'herbindo.' . $request['code'];
        $data = [
            'urlqrcode'     =>  DNS2D::getBarcodePNG($code, 'QRCODE'),
            'code'          =>  $request['code']
            // 'urlqrcode'         =>  DNS2D::getBarcodeSVG('4445645656', 'QRCODE', 5, 5, '#1974D2')
        ];

        return view('testing.qrcode')->with($data);

    }


    public function page_geoip($request)
    {
        $arrIP = geoip()->getLocation($request['ip']);
        
        

        $data = [
            'ip'                =>  $arrIP['ip'],
            'code'              =>  $arrIP['iso_code'],
            'country'            =>  $arrIP['country'],
            'city'              =>  $arrIP['city'],
            'state'             =>  $arrIP['state'],
            'state_name'        =>  $arrIP['state_name'],
            'kodepos'           =>  $arrIP['postal_code'],
            'latitude'          =>  $arrIP['lat'],
            'longitude'         =>  $arrIP['lon'],
            'timezone'          =>  $arrIP['timezone'],
            'currency'          =>  $arrIP['currency']
        ];

        return $data;
    }



    public function page_uagent()
    {
        $agent = new Agent();

        $data = [
            'OS'                =>  $agent->device(),
            'platform'          =>  $agent->platform(),
            'platform ver'      =>  $agent->version( $agent->platform() ),
            'device'            => ($agent->isMobile() ? ($agent->isTablet() ? 'Tablet' : 'Phone') : 'Desktop'),
            'browser'           =>  $agent->browser(),
            'browser ver'       =>  $agent->version( $agent->browser() )
        ];

        return $data;
    }


    public function page_sendmail()
    {


        $email = 'yonocahyono85@gmail.com';
        $name = 'Yono Cahyono';

        //
        $subject = 'Subject Test';
        $content = 'Content Test';

        //
        $sender_host = 'smtp.gmail.com';
        $sender_port = '587';
        $sender_user = 'support@pustakalebah.com';
        $sender_email = 'support@pustakalebah.com';
        $sender_password = '1212supportXx';
        $sender_label = 'Sender Label';

        $mail = new PHPMailer(true);
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = $sender_host;
        $mail->Port = $sender_port;
        $mail->Username = $sender_user;
        $mail->Password = $sender_password;

        //form
        $mail->setFrom($sender_email, $sender_label);        
        $mail->Subject = $subject;
        $mail->MsgHTML($content);
        $mail->addAddress($email, $name); 
        $mail->send();

        
        if($mail )
        {
            $status = "Email terkirim";
        }
        else
        {
            $status = "Mailer Error: " . $mail->ErrorInfo;
        }

        $data = [
            'status'     =>  $status
        ];


        return json_encode($data);

    }
}
