import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Blood Donation</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#appointment">Make an Appointment</Nav.Link>
          <Nav.Link href="#find-blood">Find Blood</Nav.Link>
          <Nav.Link href="#urgent-needs">Urgent Needs</Nav.Link>
          <Nav.Link href="#health-safety">Health & Safety</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>

          {/* Language Dropdown without Flag Icons */}
          <Dropdown className="language-dropdown ml-3">
            <Dropdown.Toggle variant="outline-secondary" id="language-dropdown">
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Kiswahili</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
