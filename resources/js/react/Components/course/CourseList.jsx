import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

export default function CourseList() {
    
    const [courses, setCourses] = useState([]);
    // get course from /courses using axios
    useEffect(() => {
        axios.get('api/course')
        .then(response => {
            setCourses(response.data);
            console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
   
  return (
    <div className="">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}
