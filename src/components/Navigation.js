import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <Navbar expand="md" sticky="top" className="navbarStyle">
      <Navbar.Brand href="#home" className="brandStyle">
        <span>PANTRY POINT</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapseStyle">
        <Nav className="navigationStyle">
          <Nav.Link href="#home" className="navElementStyle">
            <span>MAP</span>
          </Nav.Link>
          <Nav.Link href="#register" className="navElementStyle" active>
            <span>REGISTER</span>
          </Nav.Link>
          <Nav.Link href="#about us" className="navElementStyle">
            <span>ABOUT US</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// const Navigation = () => {
//   return <span>HI!</span>;
// };

export default Navigation;
