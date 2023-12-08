<?php

use Illuminate\Support\Facades\Route;
use App\Services\ApiVeepContent;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/donnees-veep-NoConnected', 'App\Http\Controllers\Controller@getVeepContentNoConnect');
Route::get('/donnees-veep-Connected', 'App\Http\Controllers\Controller@getVeepContentConnect');
