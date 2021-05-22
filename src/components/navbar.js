import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar id="nav" variant='dark' expand="sm">
            <LinkContainer to="/"><Navbar.Brand className='squada-one' href="#home">Pantry Point</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
            <Nav className="ml-auto roboto">
                <LinkContainer to="/map"><Nav.Link href="#home">Map</Nav.Link></LinkContainer>
                <LinkContainer to="/register"><Nav.Link href="#link">Register</Nav.Link></LinkContainer>
                <LinkContainer to="/about"><Nav.Link href="#link">About</Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;