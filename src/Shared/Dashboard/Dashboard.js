import React from "react";
import { Container, Card, Icon } from 'semantic-ui-react';
//Components
import "../../assets/semantic/dist/semantic.min.css";

const Dashboard = () => {
    return(
        <div>
            <Container textAlign="center">

                    <Card centered>

                        <Card.Content>
                            <Card.Header>Dashboard</Card.Header>
                            <Card.Description>
                                Other Features TBA
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>
                                <Icon name="code" />
                                Node.Js + Firebase
                            </p>
                        </Card.Content>
                    </Card>

            </Container>
        </div>
    );
}

export default Dashboard;