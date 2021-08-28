<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    //render
    public function render($request, Throwable $exception)
    {


        if ($exception)
        {


            $Config = new Config;
            $status = $exception->getStatusCode();


            $data = [
                'URI'       =>  $Config->URI(),
                'code'       =>  $status,
                'content'       =>  $status === 404 ? 'Halaman tidak ditemukan' : 'Opsss... Halaman bermasalah'
            ];


            return response()->view('error.page',$data,$status);


        }



        
        return parent::render($request, $exception);

    
        
    }
}
