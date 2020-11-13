import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Icon, Divider, Header, Segment } from "semantic-ui-react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
//Components
import "../assets/semantic/dist/semantic.min.css";

//Parameters
const libraries = ["places"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};
let center = {
    lat: 25.797877,
    lng: 55.946911,
    time: new Date(),
    timeISO: new Date().toISOString()
};


const FleetTracking = (props) => {

    //Google Maps Prerequisite
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY_FUCKBUBBLEBOY,
        libraries
    });

    const [location, addLocation] = useState(center);

    //Map Container
    const mapRef = useRef();

    const onMapLoad = useCallback( (map) => {
        mapRef.current = map;

    }, []);

    if(loadError) {
        alert("Map Loading Error");
    }
    if(!isLoaded) {
        return(
            <Container textAlign="center">
                <Divider horizontal>
                    <Header as="h4">
                        <Icon name="bus" />
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
                    <Icon name="bus" />
                    <Header.Content>Fleet Tracking</Header.Content>
                </Header>
            </Divider>

            <GoogleMap
                onLoad={ onMapLoad }
                mapContainerStyle={ mapStyle }
                zoom={ 12 }
                center={ center }
            >
                <>
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
                                color="teal"
                                content="Last Known Location"
                                icon="bus"

                                as={Link}
                                to="/personnelselection"
                            />
                        </Segment>
                    </InfoWindow>
                </>
            </GoogleMap>
        </Container>
    );
}

export default FleetTracking;