import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Header, Icon, Segment, Button } from "semantic-ui-react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
//Components
import "../assets/semantic/dist/semantic.min.css";

//Parameters
const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
const libraries = ["places"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};
let center = {};

//Shitty regurgitated function for getting coordinates
navigator.geolocation.getCurrentPosition(
    (position) => {
        //Successful process
        center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            time: new Date(),
            timeISO: new Date().toISOString()
        };
    },
    (error) => {
        //Error process
        alert("Location Error");
        console.warn(`Error(${error.code}): ${error.message}`);
    },
    locationOptions
);


const Tracking = () => {

    //Google Maps Prerequisite
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY_FAKEDELETEWORDLATERAFTERTESTING,
        libraries
    });

    const [location, setLocation] = useState(center);

    //Initializes a map Container
    const mapRef = useRef();
    const onMapLoad = useCallback( (map) => {
        mapRef.current = map;

    }, []);


    if(loadError) {
        alert("Map Loading Error");
        console.log("Map Loading Error");
    }
    if(!isLoaded) {
        return(
            <Container textAlign="center">
                <Divider horizontal>
                    <Header as="h4">
                        <Icon name="map marker" />
                        <Header.Content>Loading Map</Header.Content>
                    </Header>
                </Divider>
            </Container>
        );
    }

    return(
        <Container textAlign="center">
            <Divider horizontal>
                <Header as="h4">
                    <Icon name="map marker" />
                    <Header.Content>Bus Location</Header.Content>
                </Header>
            </Divider>

            <GoogleMap
                onLoad={ onMapLoad }
                mapContainerStyle={ mapStyle }
                zoom={ 12 }
                center={ center }
            >
            { location ?
                (<>
                    <Marker
                        key={ location.timeISO }
                        position={{ lat: location.lat, lng: location.lng }}
                        icon={{
                            scaledSize: new window.google.maps.Size(20, 20),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15)
                        }}
                    />
                    <InfoWindow
                        position={ { lat: location.lat, lng: location.lng } }
                    >
                        <Segment inverted>
                            <p>{ formatRelative(location.time, new Date()) } </p>
                            <Button
                                basic
                                inverted
                                color="orange"
                                content="Last Known Location"
                                icon="bus"

                                as={Link}
                                to="/arrival"
                            />
                        </Segment>
                    </InfoWindow>
                </>)
                : null
            }
            </GoogleMap>
        </Container>
    );
}

export default Tracking;