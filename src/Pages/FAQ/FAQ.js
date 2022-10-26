import React from 'react';
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How can i contact you?</Accordion.Header>
        <Accordion.Body>
        To contact with us Please try with email, whatsApp or Facebook.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do you have Offline center?</Accordion.Header>
        <Accordion.Body>
       No,Sir. This is Online based.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How to Sign up?</Accordion.Header>
        <Accordion.Body>
        For signing Please procced on sign up page. And give the necessary information or so on.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are entry requirements?</Accordion.Header>
        <Accordion.Body>
        There are nothing for requirements. Welcome here all of you.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default FAQ;