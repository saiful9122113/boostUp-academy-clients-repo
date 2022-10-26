import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Course = ({course}) => {
  const navigate = useNavigate();

  const handleOpenDetailsPage = (id) => {
    navigate(`/course/${id}`);
  }

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={course.img} className="cardImg" />
        <Card.Body>
          <Card.Title>{course.name}</Card.Title>
          <Card.Text>
            {course.text}
          </Card.Text>
          <Button variant="primary" onClick={() => handleOpenDetailsPage(course.id)}>View Details</Button>
        </Card.Body>
      </Card>
    );
}

export default Course