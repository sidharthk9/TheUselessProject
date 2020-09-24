import React, { useCallback, useRef, useState } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutoComplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import { formatRelative } from "date-fns";
import axios from "axios";
import "@reach/combobox/styles.css";
//Components
import "../assets/semantic/dist/semantic.min.css";

//Parameters
const libraries = ["places"];
const mapStyle = {
    width: "80vw",
    height: "400px"
};
const center = {
    lat: parseFloat(process.env.REACT_APP_LATITUDE),
    lng: parseFloat(process.env.REACT_APP_LONGITUDE)
};
// https://api.what3words.com/v3/convert-to-coordinates?words=shocking.broom.drank&key=DIXXGSPA


const Routes = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [locations, addLocation] = useState([]);
    const [selected, selectLocation] = useState(null);
    const [decoWords, createWords] = useState(null);

    const mapRef = useRef();
    const onMapLoad = useCallback( (map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(( { lat, lng } ) => {
        mapRef.current.panTo( { lat, lng } );
        mapRef.current.setZoom(14);
    }, []);

    const locationAdder = useCallback((event) => {
        addLocation((currentLocations) => [
            ...currentLocations,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const createDecorativeWords = useCallback((lat, lng) => {
        let apiWords = "---";
        const apiKey = process.env.REACT_APP_WHAT_THREE_WORDS;

        axios.get(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat}%2C${lng}&key=${apiKey}`)
            .then(function (response) {
                apiWords = response.data.words;
                createWords(apiWords);
            });

    }, []);


    if(loadError) return "Error Loading Maps";
    if(!isLoaded) return "Loading map";

    return(
        <Container textAlign="center">
            <Search panTo={ panTo } />
            <Locate panTo={ panTo } />
            <GoogleMap
                mapContainerStyle={ mapStyle }
                zoom={ 12 }
                center={ center }
                onClick={ locationAdder }
                onLoad={ onMapLoad }
            >
                {
                    locations.map( (location) => <Marker
                        key={ location.time.toISOString() }
                        position={ { lat: location.lat, lng: location.lng } }
                        icon={ {
                            scaledSize: new window.google.maps.Size(20,20),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15)
                        } }
                        onClick={ () => {
                            selectLocation(location);
                        } }
                    /> )
                }
                {
                    selected ? ( <InfoWindow
                            position={ { lat: selected.lat, lng: selected.lng } }
                            onCloseClick={ () => {
                                selectLocation(null);
                                createWords(null);
                            } }
                        >
                            <div>
                                <p> Words: { (decoWords) ? decoWords : createDecorativeWords( selected.lat, selected.lng ) } </p>
                                <p>Made { formatRelative(selected.time, new Date()) } </p>
                            </div>
                        </InfoWindow> )
                        : null
                }
            </GoogleMap>
        </Container>
    );
}

const Locate = ({ panTo }) => {
    return (
        <Button
            secondary
            icon
            onClick={ () => {
            navigator.geolocation.getCurrentPosition( (position) => {
                panTo({ lat: position.coords.latitude, lng: position.coords.longitude});
                console.log({ lat: position.coords.latitude, lng: position.coords.longitude});
            }, ()=> null);
        } }>
            <Icon name='world' />
            Retrieve
        </Button>
    );
}

function Search ({ panTo }) {
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
        <div>
            <Combobox
                onSelect={ handleSelect }
            >
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
        </div>
    );
}

export default Routes;