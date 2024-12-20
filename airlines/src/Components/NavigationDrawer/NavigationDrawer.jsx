import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationDrawer() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">NEW INDIA INTERPRICE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">NOTIFICATIONS</Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">APPLY</NavDropdown.Item>
              <NavDropdown.Item href="/service/vacancy">
                JOB VACANCY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PLACEMENT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                https://facebook.com
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                https://youtube.com
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationDrawer;
