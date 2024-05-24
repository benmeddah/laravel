<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;
//Route::post('/courses', [CourseController::class, 'store']);


Route::get('course', [CourseController::class, 'index']);
Route::get('course/{id}', [CourseController::class, 'findOrFail']);
Route::post('course', [CourseController::class, 'store']);
Route::delete('course/{id}', [CourseController::class,'destroy']);