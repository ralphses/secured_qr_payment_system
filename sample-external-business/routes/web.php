<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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
})->name('welcome');


Route::get('/settings', [CompanyController::class, 'settings'])->name('settings');
Route::post('/settings', [CompanyController::class, 'settings'])->name('settings');


Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/qr', function () {
    return view('newQr');
})->name('create.qrcode');

Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/qr', [CompanyController::class, 'createQr'])->name('create.qrcode');

Route::get('/dashboard', [CompanyController::class, 'index'])->name('dashboard');
