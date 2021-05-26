import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
} from "react-google-maps";
import mapStyles from "./Mapstyles";
import { API_key } from "../default.json";

function MapApi(props) {
    return (
        //set google map coordinates and zoom level
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 14.164529, lng: 121.241929 }}
            defaultOptions={{ styles: mapStyles }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: 14.164529, lng: 121.241929 }} />
            )}
        </GoogleMap>
    );
}
const WrappedMap = withScriptjs(withGoogleMap(MapApi));

function Map() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                isMarkerShown={true}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_key}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                    <div
                        style={{
                            height: `90%`,
                            width: `75% `,
                            margin: `5px`,
                        }}
                    />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
export default Map;
