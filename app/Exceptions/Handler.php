<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Http\Controllers\config\main as Config;
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
            // return $e->getMessage();
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
                'code'          =>  $status,
                'title'         =>  $status . ' | ' . $Config->apps()['name'],
                'content'       =>  $status === 404 ? 'Halaman tidak ditemukan' : 'Opsss... Halaman bermasalah',
                'apps'          =>  $Config->apps()
            ];


            // return response()->json($data,200);
            return response()->view('error.page',$data,200);


        }



        
        return parent::render($request, $exception);

    
        
    }

    
}
