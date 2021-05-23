import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import mapStyles from "./Mapstyles";

function Map(props) {
    return(
        //set google map coordinates and zoom level
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 14.164529, lng: 121.241929 }}
            defaultOptions={{styles: mapStyles}}
        >  
         {props.isMarkerShown && <Marker position={{ lat: 14.164529, lng: 121.241929 }} />}
        </GoogleMap>
    );
    
    
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
