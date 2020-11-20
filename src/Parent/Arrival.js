import React, { useState } from "react";
import { Container, Card, Button, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
//Components
import "../assets/semantic/dist/semantic.min.css";

export function Arrival() {

    const [time, updateTime] = useState(0);
    return(
        <Container textAlign="center" fluid>

            <Card centered>

                <Card.Content>
                    <Card.Header>Dashboard</Card.Header>
                    <Card.Description>
                        Status:
                        <Button
                            color="yellow"
                            icon="ellipsis horizontal"
                            labelPosition="right"
                            content="Away"
                        />
                    </Card.Description>
                    <Card.Meta>
                        Arrival Time: { time } left
                    </Card.Meta>
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