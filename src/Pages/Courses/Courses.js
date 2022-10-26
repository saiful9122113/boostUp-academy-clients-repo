import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './courses.css';

const Courses = () => {
    const coursesData = useLoaderData();

    return (
        <section className='courses'>
            <div className="sidebar">
                <h5>Course Title</h5>
                {coursesData && coursesData.map(course => <h6>{course.name}</h6>)}
            </div>
            <div className="mainContainer">
            </div>
        </section>
    );
};

export default Courses;