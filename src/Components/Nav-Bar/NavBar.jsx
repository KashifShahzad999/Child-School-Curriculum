import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"; // Needed for dropdowns
import "../../../src/style.css";
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <>
        <a href="#home">
          <img className="pl-0" src="/assets/img/alShaheen-logo3-removebg-preview.png " alt="" />
        </a>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavDropdown   className="nav-dropdown-custom" title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aluminium Window</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Doors Works
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Frameless Glass Doors</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
              Partition Works
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Curtain Wall
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Aluminium Works
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Aluminium Shower Enclosure Works
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Aluminium Wood Pergolas
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Aluminum Composite Panel Cladding
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Stainless Steel
              </NavDropdown.Item><NavDropdown.Item href="#action/3.4">
              Electroplating Stainless Steel Work
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-custom" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="nav-custom">
              About Us
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default NavBar;
