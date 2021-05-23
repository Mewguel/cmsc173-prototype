import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container } from "react-bootstrap";
import WrappedMap from "./components/Map"
import { API_key } from './default.json';
import PantryInfo from './components/PantryInfo'

function App() {
  return (
    <Container fluid className="containerStyle" >
      
      {/*div for the google map Component*/}
      <div style = {{width: "50vw", height: "50vh"}}>
      <WrappedMap 
        isMarkerShown={true}
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `600px`, margin: `5px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />      
      </div>
      <PantryInfo>

      </PantryInfo>
        
    </Container>
  );
}

export default App;
