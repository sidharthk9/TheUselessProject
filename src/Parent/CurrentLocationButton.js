import React, { useCallback, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";
//Components
import "../assets/semantic/dist/semantic.min.css";
import {Link} from "react-router-dom";


const CurrentLocationButton = () => {

    const [open, setOpen] = useState(false);
    const [words, setWords] = useState({});

    const initializeWords = useCallback(() => {

        //reference used => Mozilla web docs: Geolocation.getCurrentPosition()
        const locationOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                //Successful process
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const apiKey = process.env.REACT_APP_WHAT_THREE_WORDS;

                axios.get(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${lat}%2C${lng}&key=${apiKey}`)
                    .then( (response) => {
                        const apiResponse = {
                            Country: response.data.country,
                            Map: response.data.map,
                            Words: response.data.words,
                            Latitude: response.data.coordinates.lat,
                            Longitude: response.data.coordinates.lng
                        };
                        setWords(apiResponse);

                    })
                    .catch( (error) => {
                        alert(`Location Error`);
                        console.warn(error);
                        }
                    );
            },
            (error) => {
                //Error process
                alert("Coordinate Error");
                console.warn(`Error(${error.code}): ${error.message}`);
            },
            locationOptions
        );

    }, []);

    return(
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "small" }
            dimmer={ "blurring" }
            trigger={
                <Button color="instagram" onClick={ initializeWords }>
                    Location
                </Button>
            }
        >
            <Modal.Header>Confirm the location?</Modal.Header>

            <Modal.Content>
                Confirm the location: { words.Map }
            </Modal.Content>

            <Modal.Actions>
                <Button color="grey" onClick={ () => setOpen(false) }>
                    Cancel
                </Button>
                <Button
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={ () => setOpen(false) }
                    positive

                    as= {Link}
                    to="/"
                />
            </Modal.Actions>
        </Modal>
    );
}

export default CurrentLocationButton;