import React, { useState } from "react";
import {Container, Card, Icon, Button, Segment} from 'semantic-ui-react';
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
                        negative
                        content="Possible Delay"
                        labelPosition="right"
                        icon="question"
                    />
                    <Button
                        inverted
                        negative
                        content="Detour"
                        labelPosition="right"
                        icon="remove"
                    />
                    </Segment>
                </Card.Content>
            </Card>

        </Container>
    );
}

export default Arrival;