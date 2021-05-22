import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar id="nav" variant='dark' expand="sm">
        <Navbar.Brand className='squada-one' href="#home">Pantry Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto roboto">
            <Nav.Link href="#home">Map</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
