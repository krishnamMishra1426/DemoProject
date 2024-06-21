import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="partners text-center">
          <Col>
            <h2 className='mb-3 text-black our-partner mb-5'>Our Partners/Network</h2>
            <div className="partners-logos text-black m-2">
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/relume1.png" alt="Relume" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/relume1.png" alt="Relume" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/relume1.png" alt="Relume" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/relume1.png" alt="Relume" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/relume1.png" alt="Relume" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
              <img src="../../assests/image/webflow.png" alt="Webflow" />
            </div>
          </Col>
        </Row>
        <Row className="newsletter text-center my-5 py-5 align-items-center  ">
          <Col md={6} className="text-md-start newOne">
            <p className='newsletter-text'>Join our newsletter</p>
            <span className='subscribing'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </Col>
          <Col md={6} className="text-md-end ">
            <Form className="newsletter-form d-flex justify-content-md-end justify-content-center">
              <Form.Control type="email" placeholder="Enter your email" className="me-2 input-form" />
              <Button type="submit">Subscribe</Button>
            </Form>
            <p className="mt-2  subscribing">By subscribing you agree with our <a href="#privacy-policy" className="text-black" >Privacy Policy</a></p>
          </Col>
        </Row>
        <Row className="footer-links text-center text-md-start">
          <Col md={2} className="mb-3">
            <div className="footer-logo">Logo</div>
          </Col>
          <Col md={2} className="footer-column mb-3">
            <h3>Column One</h3>
            <a href="#link11">Link Eleven</a>
            <a href="#link12">Link Twelve</a>
            <a href="#link13">Link Twenty</a>
            <a href="#link14">Link Twenty</a>
            <a href="#link15">Link Twenty</a>
          </Col>
          <Col md={2} className="footer-column mb-3">
            <h3>Column Two</h3>
            <a href="#link11">Link Eleven</a>
            <a href="#link12">Link Twelve</a>
            <a href="#link13">Link Twenty</a>
            <a href="#link14">Link Twenty</a>
            <a href="#link15">Link Twenty</a>
          </Col>
          <Col md={2} className="footer-column mb-3">
            <h3>Column Three</h3>
            <a href="#link11">Link Eleven</a>
            <a href="#link12">Link Twelve</a>
            <a href="#link13">Link Twenty</a>
            <a href="#link14">Link Twenty</a>
            <a href="#link15">Link Twenty</a>
          </Col>
          <Col md={2} className="footer-column mb-3">
            <h3>Column Four</h3>
            <a href="#link16">Link Twenty</a>
            <a href="#link17">Link Twenty</a>
            <a href="#link18">Link Twenty</a>
            <a href="#link19">Link Twenty</a>
            <a href="#link20">Link Twenty</a>
          </Col>
          <Col md={2} className="footer-column mb-3">
            <h3>Column Five</h3>
            <a href="#link21">Link Twenty</a>
            <a href="#link22">Link Twenty</a>
            <a href="#link23">Link Twenty</a>
            <a href="#link24">Link Twenty</a>
            <a href="#link25">Link Twenty</a>
          </Col>
        </Row>
        <hr/>
 
        <Row className="footer-bottom text-center text-md-start mt-4 g-15">
          <Col md={9} className="footer-bottom-box d-flex flex-row align-items-center align-items-md-start">
            <p>&copy; 2023 Relume. All rights reserved.</p>
            <div className="footer-policies">
              <a href="#privacy-policy">Privacy Policy</a>
              <a href="#terms-of-service">Terms of Service</a>
              <a href="#cookies-settings">Cookies Settings</a>
            </div>
          </Col>
          <Col md={3} className="d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
            <div className="footer-icons">
              <img src="../../assests/image/facebook.png" alt="facebook" />
              <img src="../../assests/image/instagram.png" alt="instagram" />
              <img src="../../assests/image/twitter.png" alt="twitter" />
              <img src="../../assests/image/linkedin.png" alt="linkedin" />
              <img src="../../assests/image/youtube.png" alt="youtube" />
            </div>
          </Col>
        </Row>
      
      </Container>
    </footer>
  )
}

export default Footer