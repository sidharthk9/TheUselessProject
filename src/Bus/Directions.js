import React, {useCallback, useRef, useState} from "react";
import { GoogleMap, DirectionsRenderer, DirectionsService, useLoadScript} from "@react-google-maps/api";
//Components
import "../assets/semantic/dist/semantic.min.css";

//Parameters
const center = {
    lat: parseFloat(process.env.REACT_APP_LATITUDE),
    lng: parseFloat(process.env.REACT_APP_LONGITUDE)
};
const libraries = ["directions"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};


const Directions = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [directions, updateDirections] = useState(null);
    const [origin, updateOrigin] = useState({ lat: 25.797877, lng: 55.946911 });
    const [destination, updateDestination] = useState({ lat: 25.789662, lng: 55.995050 });

    const mapRef = useRef();
    const onMapLoad = useCallback( (map) => {
        mapRef.current = map;
    }, []);

    const directionsCallback = useCallback( (response) => {
        if (response !== null) {
            if (response.status === "OK") {
                updateDirections(response);
            } else {
                console.log('response: ', response)
            }
        }
    }, []);


    if(loadError) return "Error Loading Maps";
    if(!isLoaded) return "Loading map";

    return (
        <GoogleMap
            mapContainerStyle={ mapStyle }
            center={ center }
            zoom={ 9 }
            onLoad={ onMapLoad }
        >
            {
                (destination !== null && origin !== null) && (
                    <DirectionsService
                        options={ {
                            destination: destination,
                            origin: origin,
                            travelMode: "DRIVING"
                        } }
                        // required
                        callback={directionsCallback}
                    />
                )
            }
            {
                directions !== null && (
                    <DirectionsRenderer options={ { directions: directions } } />
                )
            }
        </GoogleMap>
    );
}

export default Directions;