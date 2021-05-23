import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = (props) => {
  return (
    <Navbar expand="md" sticky="top" className="navbarStyle">
      <LinkContainer to="/">
        <Navbar.Brand className="brandStyle">
          <span>PANTRY POINT</span>
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapseStyle">
        <Nav className="navigationStyle">
          <LinkContainer to="/about">
            <Nav.Link className="navElementStyle">
              <span>ABOUT US</span>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/map">
            <Nav.Link className="navElementStyle">
              <span>MAP</span>
            </Nav.Link>
          </LinkContainer>
          <Button className="emphasizedNav">REGISTER</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// const Navigation = () => {
//   return <span>HI!</span>;
// };

export default Navigation;
