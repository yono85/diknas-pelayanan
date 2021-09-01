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

Route::get('/', $root . '\front\index@main');

Route::get('/login', $root . '\access\index@login');
Route::get('/register', $root . '\access\index@register');
Route::get('/forgetpassword', $root . '\access\index@forgetpassword');
Route::get('/changepassword', $root . '\access\index@pagechangepassword');


Route::group(['prefix' => '/dashboard'], function() use ($root)
{

});