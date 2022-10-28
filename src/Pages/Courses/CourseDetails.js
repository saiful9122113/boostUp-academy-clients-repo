import React,{useRef} from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';

const CourseDetails = () => {
    const courseData = useLoaderData();
    const navigate = useNavigate()

    const handleCheckoutPage = (id) => {
        navigate(`/checkout/${id}`)
    }

    const componentRef=useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Course details',
        onAfterPrint: ()=> alert('Print success')
    })

  return (
    <>
       <div ref={componentRef} style={{width:'100%', height: window.innerHeight}}>
       <section className='courseDetails'>
        <div className="container">
        {courseData && <Row>
            <Col sm={12} md={4} p={2}>
                <img src={courseData.img} alt="" className="img-fluid rounded" />
            </Col>
            <Col sm={12} md={8} p={2}>

                <div className='d-flex justify-content-between'>
                 <h3>{courseData.name}</h3>
                 <button onClick={handlePrint}>Print Details</button>
                </div>
                
                <p>{courseData.text}</p>
                <h6>Features :</h6>
                {
                    courseData.features.length && courseData.features.map((feature, index) => <p key={index}>{feature}</p>)
                }
                <Button onClick={() => handleCheckoutPage(courseData.id)}>Get premium access</Button>
            </Col>
        </Row>}
        </div>
    </section>
       </div>
    </>
  )
}

export default CourseDetails