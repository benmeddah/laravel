import React, { useState, useEffect } from 'react';

const CourseOverview = () => {
  // Mocked data for a single course
  const [course, setCourse] = useState({
  })

  useEffect(() => {
    axios.get('/api/course/'+location.pathname.split('/')[2])
      .then(response => {
        setCourse(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</h6>
        <p className="card-text">{course.description}</p>
        <div className="d-flex justify-content-between">
          <p className="mb-0">Domain: {course.domain}</p>
          <p className="mb-0">Status: {course.status}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-0">Start Date: {course.start_date}</p>
          <p className="mb-0">End Date: {course.end_date}</p>
        </div>
        <p className="card-text">Location: {course.location}</p>
      </div>
    </div>
  );
};

export default CourseOverview;