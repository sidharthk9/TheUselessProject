import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Header, Icon, Segment, Button } from "semantic-ui-react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutoComplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { formatRelative } from "date-fns";
import axios from "axios";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
//Components
import "@reach/combobox/styles.css";
import "../assets/semantic/dist/semantic.min.css";


const libraries = ["places"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};
let center = {};

//Parameters
const locationOptions = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
};
//Inherent function for getting coordinates
navigator.geolocation.getCurrentPosition(
    (position) => {
        //Successful process
        center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
    },
    (error) => {
        //Error process
        alert("Location Error");
        console.warn(`Error(${error.code}): ${error.message}`);
    },
    locationOptions
);


const SearchBar = ({ panTo }) => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutoComplete({
        requestOptions : {
            location: {
                lat: () => center.lat,
                lng: () => center.lng,
            },
            radius: 60 * 1000,
        },
    });

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <Combobox
            onSelect={ handleSelect }
        >
            <p>
                Search for Landmarks:
            </p>
            <ComboboxInput
                value={ value }
                onChange={ handleInput }
                disabled={ !ready }
                placeholder="Enter an Address"
            />
            <ComboboxPopover>
                <ComboboxList>
                    { status === "OK" &&
                    data.map( ( { id, description} ) => (
                        <ComboboxOption key={ id } value = { description } />
                    ))
                    }
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}


export function MapSelection() {

    //Google Maps Prerequisite
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [locations, setLocation] = useState(null);
    const [selection, selectLocation] = useState(null);
    const [words, setWords] = useState(null);

    //Initializes a map Container
    const mapRef = useRef();
    const onMapLoad = useCallback( (map) => {
        mapRef.current = map;

    }, []);

    const panTo = useCallback(( { lat, lng } ) => {
        mapRef.current.panTo( { lat, lng } );
        mapRef.current.setZoom(14);
    }, []);

    const locationAdder = useCallback((event) => {
        setLocation(
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            }
        );
    }, []);

    const initializeWords = useCallback((lat, lng) => {
        const apiKey = process.env.REACT_APP_WHAT_THREE_WORDS;

        axios.get(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat}%2C${lng}&key=${apiKey}`)
            .then(function (response) {
                const apiWords = response.data.words;
                setWords(apiWords);
            });
    }, []);

    if(loadError) {
        alert("Map Loading Error");
    }

    if(!isLoaded) {
        return(
            <Container textAlign="center" fluid>
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
        <Container textAlign="center" fluid>

            <Divider horizontal>
                <Header as="h4">
                    <Icon name="map marker" />
                    <Header.Content>Drop Off Selection</Header.Content>
                </Header>
            </Divider>

            <SearchBar panTo={ panTo } />
            <GoogleMap
                onLoad={ onMapLoad }
                mapContainerStyle={ mapStyle }
                zoom={ 12 }
                center={ center }
                onClick={ locationAdder }

            >
                { locations ?
                    (<Marker
                        key={locations.time.toISOString()}
                        position={{lat: locations.lat, lng: locations.lng}}
                        icon={{
                            scaledSize: new window.google.maps.Size(20, 20),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15)
                        }}
                        onClick={ () => {
                            selectLocation(locations);
                            initializeWords(locations.lat, locations.lng);
                        } }
                    />)
                    : null
                }
                {
                    selection ?
                        (<InfoWindow
                            position={ { lat: selection.lat, lng: selection.lng } }
                            onCloseClick={ () => {
                                selectLocation(null);
                                setWords(null);
                            } }
                        >
                            <Segment inverted>
                                <p>Made { formatRelative(selection.time, new Date()) } </p>
                                <Button
                                    inverted
                                    positive
                                    content="Confirm?"

                                    as={ Link }
                                    to="/dashboard"
                                />
                            </Segment>
                        </InfoWindow>)
                        : null
                }
            </GoogleMap>
        </Container>
    );
}