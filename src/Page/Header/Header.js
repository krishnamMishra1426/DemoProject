import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home"  >Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<span className="nav-text-bold">About us</span>} id="about-us-dropdown">
              <NavDropdown.Item className="dropdown-item-border" href="#our-origin">Our Origin</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#our-partners">Our Partners</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#partner-representative">Our Partner <br /> Representative</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="nav-text-bold">What we do</span>} id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-item-border" href="#our-work">Our Work</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#events">Events</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#announcement">Announcement</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#success-story">Success Story</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#blogs">Blogs</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-text-bold" href="#outreach">Outreach</Nav.Link>
            <Nav.Link className="nav-text-bold" href="#newsletter">Newsletter</Nav.Link>
            <Nav.Link className="nav-text-bold" href="#blogs">Blogs</Nav.Link>
            <NavDropdown title={<span className="nav-text-bold">Resources</span>} id="resources-nav-dropdown">
              <NavDropdown.Item className="dropdown-item-border" href="#webinar">Webinar</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#knowledge-sharing">Knowledge Sharing</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item-border" href="#announcement">Announcement</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='donationbox'>
            <Button href="#join-us" className='btn-join'>Join us</Button>
            <Button variant="success" href="#donate">Donate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header