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

Route::get('/', function () {
    return view('welcome');
});



Route::get('/app/testing', $root . '\app\testing\index@main');

// Route::get('/app/testing', function()
// {
//     return 'ok';
// });