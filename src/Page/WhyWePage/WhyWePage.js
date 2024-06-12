import React from 'react';
import './WhyWePage.css';
import { Container, Row, Col } from 'react-bootstrap';

const WhyWePage = () => {
  return (
    <Container >
      <Row className="whywe-row">
        <Col xs={12} md={4} className="whywe-image-container">
          <img src="../../assests/image/donate.jpg" alt="donate"/>
        </Col>
        <Col xs={12} md={8} className="whywe-text-section">
          <h2 className='whywe'>Why SDIA</h2>
          <p className='whywe-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </Col>
      </Row>
         <div className="outreach-header">
            <h3>Out reach</h3>
            <p>As per 20 Nov 20230</p>
          </div>
      <Row className="outreach-row">
        <Col xs={12} md={4} className="outreach-text">
          <div className="outreach-stats">
            <p>358 <br/> Village covered</p>
            <p>42545 <br/> Families covered</p>
            <p>42545 <br/> Families covered</p>
            <p>42545 <br/> Families covered</p>
          </div>
        </Col>
        <Col xs={12} md={8} className="outreach-image-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019633579802!2d-122.4194156846785!3d37.7749292797587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d5d0a1fd%3A0x7f3a57c7c20d8bc6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617059810071!5m2!1sen!2sus"
            width="100%"
            height="360"
            style={{ border:"1px solid #7AA6EE"}}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default WhyWePage;
