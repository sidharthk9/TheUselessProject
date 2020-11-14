import React, { useState } from "react";
import { Container, Card, Button, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
//Components
import "../assets/semantic/dist/semantic.min.css";

const Arrival = () => {

    const [time, updateTime] = useState(0);
    return(
        <Container textAlign="center">

            <Card centered>

                <Card.Content>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Description>
                        Arrival Time: { time } left
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Segment inverted>
                        <Button
                            inverted
                            positive
                            content="The bus has arrived."
                            labelPosition="right"
                            icon="bus"

                            as={ Link }
                            to="/"
                        />
                        <Button
                            inverted
                            color="olive"
                            content="On Route"
                            labelPosition="right"
                            icon="hourglass half"

                            as={ Link }
                            to="/tracking"
                        />
                        <Button
                            basic
                            inverted
                            color="yellow"
                            content="Possible Delay"
                            labelPosition="right"
                            icon="question"

                            as={ Link }
                            to="/tracking"
                        />
                        <Button
                            basic
                            inverted
                            color="orange"
                            content="Detour"
                            labelPosition="right"
                            icon="remove"

                            as={ Link }
                            to="/tracking"
                        />
                    </Segment>
                </Card.Content>
            </Card>

        </Container>
    );
}

export default Arrival;