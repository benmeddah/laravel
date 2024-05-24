<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function store(Request $request)
    {
        /**
  
  
  name: 'Introduction to Computer Science',
  description: 'An introductory course covering the basics of computer science, including programming, algorithms, and data structures.',
  instructor: 'Dr. John Smith',
  domain: 'Computer Science',
  start_date: '2024-09-01',
  end_date: '2024-12-15',
  location: 'Room 101, Computer Science Building',
  status: 'Active'

        */
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'description'=> 'nullable|string|max:255',            
            'domain' => 'nullable|string|max:255',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'location' => 'nullable|string|max:255',
            'status' => 'nullable|string|max:255',
        ]);
        

        $course = Course::create($validatedData);
        
        return response()->json(['message' => 'Course created successfully', 'course' => $course], 201);
    }

    public function findOrFail($idcourse)
    {
        $course = Course::findOrFail($idcourse);
        return response()->json($course);
    }
    public function update(Request $request, $idcourse)
    {
        $course = Course::findOrFail($idcourse);
        $course->update($request->all());
        return response()->json($course);
    }
    public function destroy($idcourse)
    {
        $course = Course::findOrFail($idcourse);
        $course->delete();
        return response()->json(['message' => 'Course deleted successfully']);
    }
    // get all courses
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }
}
