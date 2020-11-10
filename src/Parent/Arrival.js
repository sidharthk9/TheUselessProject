import React, { useState } from "react";
import {Container, Card, Button, Segment} from 'semantic-ui-react';
//Components
import "../assets/semantic/dist/semantic.min.css";
import {Link} from "react-router-dom";

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
                            icon="bus"

                            as={ Link }
                            to="/tracking"
                        />
                        <Button
                            basic
                            inverted
                            color="orange"
                            content="Possible Delay"
                            labelPosition="right"
                            icon="question"

                            as={ Link }
                            to="/tracking"
                        />
                        <Button
                            basic
                            inverted
                            color="red"
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