<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

// /course/
Route::get('add', function () {
    $fromBackend = '20';
    return view('React',compact('fromBackend'));
});
Route::get('{id}', function () {
    // get id from url
    $idcourse = request()->id;
    $courseController = new CourseController();
    $course = $courseController->findOrFail($idcourse);
    $fromBackend = '30';
    return view('React',compact('fromBackend','course'));
});