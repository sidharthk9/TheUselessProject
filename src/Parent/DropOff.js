import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {Button, Card, Divider, Form, Label, Modal} from "semantic-ui-react";
import { useFormik } from "formik";
import axios from "axios";
//Components
import "../assets/semantic/dist/semantic.min.css";
import CurrentLocationButton from "./Modals/CurrentLocationButton";


export function DropOff() {
    const [responseStatus, updateStatus] = useState(null);
    const history = useHistory();

    const wordsForm = useFormik({
        initialValues: {
            words: ""
        },

        validate: (values) => {
            let errors = {};

            if(!values.words){ errors.words = "Field is Required"; }
            if(values.words.length < 5){ errors.words = "Length is too short"; }

            return errors;
        },
        onSubmit: (values) => { generateCoordinates(values); }
    });

    const generateCoordinates = useCallback((values) => {
        const apiKey = process.env.REACT_APP_WHAT_THREE_WORDS;
        axios.get(`https://api.what3words.com/v3/convert-to-coordinates?words=${values.words}&key=${apiKey}`)
            .then( (response) => {
                const coordinates = response.data.coordinates;
                const nearestPlace = response.data.nearestPlace;

                console.log(coordinates);
                updateStatus(`Near ${nearestPlace}`);

            })
            .catch( (error)=>{
                 updateStatus("Invalid Words.Try Again");
            });
    }, []);

    return(
        <Card centered>

            <Card.Content>
                <Card.Header textAlign="center" >Drop Off Information</Card.Header>
                <Card.Description>
                    Choose the location type:<br />
                    Got a W3W phrase?<br />
                    Send the current location?<br />
                    Pick a location from the map?<br />
                </Card.Description>
            </Card.Content>

            <Card.Content extra textAlign="center">
                <Form onSubmit={ wordsForm.handleSubmit } size="small">

                    { ( wordsForm.touched.words && wordsForm.errors.words )
                        ? <Label pointing="below" prompt content={ wordsForm.errors.words } />
                        : null
                    }
                    <Form.Input
                        label="Words"
                        id="words"
                        placeholder="timeless.cough.approved"
                        value={ wordsForm.values.words }
                        onBlur={ wordsForm.handleBlur }
                        onChange={ wordsForm.handleChange }
                    />

                    { (responseStatus === null)
                        ? null
                        : <Label
                            pointing="below"
                            prompt
                            content={ responseStatus }
                        />
                    }
                    <Form.Button
                        type="submit"
                        content="Submit"
                        color="twitter"
                        size="small"
                    />
                </Form>

                <Divider />
                { (responseStatus)
                    ?
                    <>
                        <Button
                            color="grey"
                            content="Cancel"

                            as= { Link }
                            to="/dashboard"
                        />
                        <Button
                            positive
                            content="Confirm"
                            labelPosition="right"
                            icon="checkmark"

                            as= { Link }
                            to="/arrival"
                        />
                    </>
                    :
                    <Button.Group widths={"3"}>
                        <CurrentLocationButton/>

                        <Button.Or/>

                        <Button
                            color="instagram"
                            content="Map"

                            as={Link}
                            to="/mapselection"
                        />
                    </Button.Group>
                }
            </Card.Content>
        </Card>
    );
}