import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom'

const CourseDetails = () => {
    const courseData = useLoaderData();

  return (
    <section className='courseDetails'>
        <div className="container">
        {courseData && <Row>
            <Col md={4} p={2}>
                <img src={courseData.img} alt="" className="img-fluid rounded" />
            </Col>
            <Col md={8} p={2}>
                <h3>{courseData.name}</h3>
                <p>{courseData.text}</p>
                
            </Col>
        </Row>}
        </div>
    </section>
  )
}

export default CourseDetails