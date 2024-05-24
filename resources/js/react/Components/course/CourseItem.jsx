// write course item component to be displayed in course list

import React from "react";
/*
{
    "id": 4,
    "name": "React",
    "instructor": "Dr. John Smith",
    "description": null,
    "domain": null,
    "start_date": null,
    "end_date": null,
    "location": null,
    "status": "active",
    "created_at": "2024-05-20T18:08:33.000000Z",
    "updated_at": "2024-05-20T18:08:33.000000Z"
}
*/

export default function CourseItem({ course }) {

    const deleteCourse = (id) => {
        axios.delete(`/api/course/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
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
                <div className="d-flex justify-content-between">
                    <a
                        href={`/course/${course.id}`}
                        className="btn btn-primary"
                    >
                        View
                    </a>
                    <a
                        href={`/course/${course.id}/edit`}
                        className="btn btn-primary"
                    >
                        Edit
                    </a>
                    <button type="button" onClick={() => deleteCourse(course.id)} className="btn btn-danger">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}