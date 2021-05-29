import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container,Row,Col} from "react-bootstrap";

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
        containerElement={<div style={{ height: `100%`, width: `150%`, margin: `5px` }} />}
        mapElement={<div style={{ height: `160%`, width:`100%`  }} />}
      />      
      </div>
    
        
    </Container>
  );
}

export default App;
