import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import './courses.css';

const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <section className='courses'>
            <div className="sidebar">
                <h5>Course Title</h5>
                {coursesData && coursesData.map(course => <h6 key={course.id}>{course.name}</h6>)}
            </div>
            <div className="mainContainer">
            {coursesData && coursesData.map(course => <Course key={course.id} course={course} />)}
            </div>
        </section>
    );
};

export default Courses;