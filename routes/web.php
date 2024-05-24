<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CourseController;

Route::group(['prefix' => 'api'], function () {
    require __DIR__.'/api.php';
});
Route::group(['prefix' => 'course'], function () {
    require __DIR__.'/course.php';
});

Route::get('/', function () {
    $fromBackend = '10';
    return view('React',compact('fromBackend'));
});


