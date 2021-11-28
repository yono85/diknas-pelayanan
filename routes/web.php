<?php

use Illuminate\Support\Facades\Route;
$root = '\App\Http\Controllers';
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', $root . '\access\index@login');
Route::get('/login', $root . '\access\index@login');
Route::get('/registers', $root . '\access\index@register');
Route::get('/registers/success', $root . '\access\index@registerSuccess');
Route::get('/registers/verification', $root . '\access\index@verification');
Route::get('/resetpassword', $root . '\access\index@pagechangepassword');

Route::get('/registers2', function()
{
    return view('access.registers2');
});

Route::get('/forgetpassword', $root . '\access\index@forgetpassword');
// Route::get('/changepassword', $root . '\access\index@pagechangepassword');

Route::group(['prefix' => '/dashboard'], function() use ($root)
{
    Route::get('/', $root . '\dashboard\index@main');

});

//TICKET
Route::group(['prefix' => '/dashboard/ticket'], function() use ($root)
{

    //for admin proses
    Route::get('/permintaan', $root . '\ticket\index@permintaan');

    //for user or sch
    Route::get('/pengajuan', $root . '\ticket\index@pengajuan');

});


Route::get('/404', $root . '\page\error@error404');
