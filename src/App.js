import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container } from "react-bootstrap";
import Map from "./components/Map";

function App() {
    return (
        <Container fluid className="containerStyle">
            <Map/>
        </Container>
    );
}

export default App;
