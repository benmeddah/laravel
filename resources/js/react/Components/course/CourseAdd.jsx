import React, { useState } from 'react';

const CourseAdd = () => {
  const [course, setCourse] = useState({
    name: '',
    instructor: '',
    description: '',
    domain: '',
    start_date: '',
    end_date: '',
    location: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course data submitted:', course);
    // post into /courses using axios
    axios.post('/api/course', course, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
        console.error(error);
      });

  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Add New Course</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={course.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="instructor" className="form-label">Instructor</label>
            <input type="text" className="form-control" id="instructor" name="instructor" value={course.instructor} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" value={course.description} onChange={handleChange}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="domain" className="form-label">Domain</label>
            <input type="text" className="form-control" id="domain" name="domain" value={course.domain} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="start_date" name="start_date" value={course.startDate} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
            <input type="date" className="form-control" id="end_date" name="end_date" value={course.endDate} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" name="location" value={course.location} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select className="form-select" id="status" name="status" value={course.status} onChange={handleChange}>
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default CourseAdd;
