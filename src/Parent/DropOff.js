import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import CurrentLocationButton from "./Modals/CurrentLocationButton";


export function DropOff() {

    return(
        <Card centered>

            <Card.Content>
                <Card.Header>Drop Off Information</Card.Header>
                <Card.Description>
                    Choose the location type:<br/>
                    Send the current location?<br/>
                    Pick a location from the map?<br/>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>

                <Button.Group widths={"3"}>
                    <CurrentLocationButton />

                    <Button.Or />

                    <Button
                        color="instagram"
                        content="Map"

                        as={ Link }
                        to="/mapselection"
                    />
                </Button.Group>

            </Card.Content>
        </Card>
    );
}