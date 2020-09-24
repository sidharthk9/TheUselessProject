import React, {useCallback, useState} from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
//Components
import "../assets/semantic/dist/semantic.min.css";


const PickUp = () => {

    const [wordsState, updateWords] = useState(null);

    const getLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition( (position) => {
            return ({ lat: position.coords.latitude, lng: position.coords.longitude});
        },
            ()=> null);
    }, []);

    const initializeWords = useCallback(() => {
        const lat = process.env.REACT_APP_LATITUDE;
        const lng = process.env.REACT_APP_LONGITUDE;
        const apiKey = process.env.REACT_APP_WHAT_THREE_WORDS;
        const location = getLocation;

        axios.get(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat}%2C${lng}&key=${apiKey}`)
            .then(function(response) {

                const apiResponse = {
                    Country: response.data.country,
                    Map: response.data.map,
                    Words: response.data.words,
                    Latitude: response.data.coordinates.lat,
                    Longitude: response.data.coordinates.lng
                };

                updateWords(apiResponse);
                console.log(apiResponse);
            });
    }, [getLocation]);

    return(
        <Card centered>
            {
                (wordsState) ?
                    <Card.Content>
                        <Card.Header>Pick Up Information</Card.Header>
                        <Card.Description>
                            <p>Country: {wordsState.Country}</p>
                            <p>Map: {wordsState.Map}</p>
                            <p>Words: {wordsState.Words}</p>
                            <p>Coordinates: {wordsState.Latitude}</p>
                            <p>Coordinates: {wordsState.Longitude}</p>
                        </Card.Description>
                    </Card.Content>
                    : null
            }
            <Card.Content extra>
                <Button color="teal" onClick={ initializeWords }>
                    Generate Words
                </Button>
            </Card.Content>
        </Card>
    );
}

export default PickUp;