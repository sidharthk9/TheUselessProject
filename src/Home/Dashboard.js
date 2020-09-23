import React from "react";
import { Container, Card, Icon } from 'semantic-ui-react';
//Components
import "../assets/semantic/dist/semantic.min.css";

const Dashboard = () => {
    return(
        <div>
            <br/>
            <Container textAlign='center'>

                <div className="ten wide column">
                    <Card fluid>

                        <Card.Content>
                            <Card.Header>Welcome!</Card.Header>
                            <Card.Description>
                                Prototype of the SD Project
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                ~ .Net + FireBase
                            </a>
                        </Card.Content>
                    </Card>
                </div>

            </Container>
        </div>
    );
}

export default Dashboard;