<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

### Правила
Route::get('/rules', 'RuleController@index')->middleware(['auth'])->name('rules');
Route::get('/rules/edit/{rule}', 'RuleController@edit')->middleware(['auth', 'admin'])->name('edit_rule');
Route::post('/rules', 'RuleController@store')->middleware(['auth', 'admin'])->name('store_rule');
Route::delete('/rules', 'RuleController@delete')->middleware(['auth', 'admin'])->name('delete_rule');
Route::put('/rules', 'RuleController@put')->middleware(['auth', 'admin'])->name('put_rule');

Route::post('/violations', 'ViolationController@postForApi');
Route::get('/violations', 'ViolationController@index');
require __DIR__.'/auth.php';
