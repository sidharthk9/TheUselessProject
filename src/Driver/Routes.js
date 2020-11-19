import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, DirectionsRenderer, DirectionsService, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { Button, Container, Divider, Header, Icon, Segment } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";

//Parameters
const libraries = ["directions"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};

//Shitty regurgitated function for getting coordinates. That doesn't work. Make it work or ditch it.
const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
let center = {};
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


export function Routes() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY_FUCK_BUBBLEBOY,
        libraries
    });

    const [directions, updateDirections] = useState(null);
    const [origin, updateOrigin] = useState({ lat: 25.797877, lng: 55.946911 });
    const [destination, updateDestination] = useState({ lat: 25.789662, lng: 55.995050 });

    const [waypoints, updatewaypoints] = useState([
        { location: { lat: 25.776206, lng: 55.935054 }, stopover: true },
        { location: { lat: 25.762428, lng: 55.956876 }, stopover: true },
        { location: { lat: 25.782560, lng: 55.994801 }, stopover: true },
        { location: { lat: 25.794780, lng: 55.983836 }, stopover: true }
        ]
    );

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

    if(loadError) {
        alert("Map Loading Error");
        console.log("Map Loading Error");
    }
    if(!isLoaded) {
        return(
            <Container textAlign="center" fluid>
                <Divider horizontal>
                    <Header as="h4">
                        <Icon name="bus" />
                        <Header.Content>Loading Map</Header.Content>
                    </Header>
                </Divider>
            </Container>
        );
    }

    const MapURL = `https://www.google.com/maps/dir/?api=1&origin=${origin.lat}%2c${origin.lng}&destination=${destination.lat}%2c${destination.lng}&waypoints=${waypoints[0].location.lat}%2c${waypoints[0].location.lng}%7c${waypoints[1].location.lat}%2c${waypoints[1].location.lng}%7c${waypoints[2].location.lat}%2c${waypoints[2].location.lng}%7c${waypoints[3].location.lat}%2c${waypoints[3].location.lng}&travelmode=driving`;


    return (
        <Container textAlign="center" fluid>

            <Divider horizontal>
                <Header as="h4">
                    <Icon name="bus" />
                    <Header.Content>Routes</Header.Content>
                </Header>
            </Divider>

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
                                waypoints: waypoints,
                                optimizeWaypoints: true,
                                travelMode: "DRIVING"
                            } }
                            // required
                            callback={ directionsCallback }
                        />
                    )
                }
                {
                    (directions !== null) && (
                        <DirectionsRenderer options={ { directions: directions } } />
                    )
                }
                <InfoWindow
                    position={ { lat: origin.lat, lng: origin.lng } }
                >
                    <Segment inverted>
                        <Button
                            basic
                            inverted
                            color="green"
                            content="Get Directions"
                            icon="bus"

                            as="a"
                            target="_"
                            href={ MapURL }
                        />
                    </Segment>
                </InfoWindow>

            </GoogleMap>
        </Container>
    );
}