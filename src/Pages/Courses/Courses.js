import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Course from './Course';
import './courses.css';

const Courses = () => {
    const coursesData = useLoaderData();
    const navigate = useNavigate();

    const handleRoute = (id) => {
        navigate(`/course/${id}`);
    }

    return (
        <section className='courses'>
            <div className="sidebar">
                <h5>Course Title</h5>
                {coursesData && coursesData.map(course => <h6 key={course.id} onClick={() => handleRoute(course.id)}>{course.name}</h6>)}
            </div>
            <div className="mainContainer">
            {coursesData && coursesData.map(course => <Course key={course.id} course={course} />)}
            </div>
        </section>
    );
};

export default Courses;