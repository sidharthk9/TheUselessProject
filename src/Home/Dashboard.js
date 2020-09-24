import React from "react";
import { Container, Card, Icon } from 'semantic-ui-react';
//Components
import "../assets/semantic/dist/semantic.min.css";

const Dashboard = () => {
    return(
        <div>
            <Container textAlign="center">

                    <Card centered>

                        <Card.Content>
                            <Card.Header>Welcome!</Card.Header>
                            <Card.Description>
                                Prototype of the SD Project
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>
                                <Icon name="user" />
                                ~ .Net + FireBase
                            </p>
                        </Card.Content>
                    </Card>

            </Container>
        </div>
    );
}

export default Dashboard;