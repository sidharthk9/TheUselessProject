import React from "react";
import { Card, Image, Form, Button, Segment } from "semantic-ui-react";
// Components
import "../../assets/semantic/dist/semantic.min.css";
import logo from "../../Static/Images/logo.jpeg"
import ForgotPasswordModal from "./Modals/ForgotPasswordModal";
import {Link} from "react-router-dom";


const LogIn = () => {
    return(
        <Card.Group itemsPerRow={1}>

            <Card color={ "purple" }>
                <Image
                    size="small"
                    centered
                    wrapped
                    ui={ false }
                    src={ logo }
                />
                <Card.Content textAlign={ "center" }>
                    <Card.Header>BT RAK</Card.Header>
                    <Card.Meta>Welcome Back!</Card.Meta>
                </Card.Content>
            </Card>

            <Card color={ "violet" }>

                <Card.Content textAlign={ "left" }>
                    <Card.Header>Log In</Card.Header>
                </Card.Content>

                <Card.Content extra textAlign={ "center" }>
                    <Segment inverted>
                        <Form inverted>

                            <Form.Group widths="equal">
                                <Form.Input fluid label="Email" />
                                <Form.Input fluid label="Password" />
                            </Form.Group>
                            <Form.Checkbox label="Stay Logged In" />

                            <Button
                                content="Log In"
                                color="blue"
                                size="large"

                                as={ Link }
                                to="/"
                            />
                            <ForgotPasswordModal />

                        </Form>
                    </Segment>
                </Card.Content>

            </Card>

        </Card.Group>
    );
}

export default LogIn;