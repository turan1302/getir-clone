<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix'=>'home','as'=>'home.'],function (){
    Route::get('',[\App\Http\Controllers\api\home\indexController::class,'index'])->name('index');
});

Route::group(['prefix'=>'category','as'=>'category.'],function (){
    Route::get('{id}',[\App\Http\Controllers\api\category\indexController::class,'detail'])->name('detail');
});

Route::group(['prefix'=>'product','as'=>'product.'],function (){
    Route::get('{id}',[\App\Http\Controllers\api\product\indexController::class,'detail'])->name('detail');
});

Route::group(['prefix'=>'cart','as'=>'cart.'],function (){
    Route::get('',[\App\Http\Controllers\api\cart\indexController::class,'index'])->name('index');
});
