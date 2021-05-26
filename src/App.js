import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container } from "react-bootstrap";
import Map from "./components/Map";
import PantryInfo from "./components/PantryInfo";

function App() {
    return (
        <Container fluid className="containerStyle">
            <Map></Map>
            <PantryInfo></PantryInfo>
        </Container>
    );
}

export default App;
