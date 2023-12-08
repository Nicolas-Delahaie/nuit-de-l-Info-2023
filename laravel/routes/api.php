<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* -------------------------------------------------------------------------- */
/*                               APIS ORPHELINES                              */
/* -------------------------------------------------------------------------- */
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\Controller;

Route::get('/donnees-veep-NoConnected', [Controller::class, 'getVeepContentNoConnect'])->middleware(['tokenBon']);
Route::get('/donnees-veep-Connected', [Controller::class, 'getVeepContentConnect'])->middleware(['tokenBon']);
Route::get('/donnes-react-connecte', [Controller::class, 'getContentConnected'])->middleware(['tokenBon']);
Route::get('/donnes-react-non-connecte', [Controller::class, 'getContentNoConnected']);




/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
use App\Http\Controllers\UserController;

Route::post('/login', [UserController::class, 'login']);
