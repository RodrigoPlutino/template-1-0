import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Nav className='mobile-brand'><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Nav>
        <Navbar.Collapse className='navbar-one' id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='desktop-brand'><Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <header className="header-container">
          <nav className="navbar-one">
            <div className="first-col">
              <a href="#">First tab</a>
              <a href="#">Second tab</a>
              <a href="#">Third tab</a>
              <a href="#">Fourth tab</a>
            </div>
            <div className="second-col">
              <h1>pandas</h1>
            </div>
            <div className="third-col">
              <a href="#">First tab</a>
              <a href="#">Second tab</a>
              <a href="#">Third tab</a>
              <a href="#">Fourth tab</a>
            </div>
          </nav>
        </header> */}
    </div>
  );
}

export default Header;
