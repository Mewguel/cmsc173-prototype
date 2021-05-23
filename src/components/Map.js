import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
function Map(props) {
    return(
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 14.164529, lng: 121.241929 }}
        >  
         {props.isMarkerShown && <Marker position={{ lat: 14.164529, lng: 121.241929 }} />}
        </GoogleMap>
    );
    
    
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
