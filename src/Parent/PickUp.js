import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";
import axios from "axios";
//Components
import "../assets/semantic/dist/semantic.min.css";

const PickUp = () => {

    const [wordsState, updateWords] = useState(null);

    const initializeWords = () => {
        let lat = "25.798324";
        let lng = "55.972082";
        const apiKey = "DIXXGSPA";
        /* https://api.what3words.com/v3/convert-to-coordinates?words=shocking.broom.drank&key=DIXXGSPA */

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
    }

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