import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
// Components
import "../../assets/semantic/dist/semantic.min.css";
import logo from "../../Static/Images/logo.jpeg"
import SignUpModal from "./Modals/SignUpModal";



const SignUp = () => {

    return(
        <Card.Group itemsPerRow={1}>

            <Card color={ "purple" }>
                <Image
                    size="medium"
                    centered
                    wrapped
                    ui={ false }
                    src={ logo }
                />
                <Card.Content textAlign={ "center" }>
                    <Card.Header>BT RAK</Card.Header>
                    <Card.Meta>Welcome to the application!</Card.Meta>
                </Card.Content>
            </Card>

            <Card color={ "violet" }>

                <Card.Content textAlign={ "left" }>
                    <Card.Header>Get Started</Card.Header>
                </Card.Content>

                <Card.Content extra textAlign={ "center" }>
                    <Button.Group>

                        <SignUpModal />

                        <Button.Or />

                        <Button
                            content="Log In"
                            icon="user"
                            color={ "blue" }
                            size="large"
                            label={ { as: "p", basic: true, pointing: "left", content: "Continue?" } }
                            labelPosition="right"

                            as={Link}
                            to="/login"
                        />

                    </Button.Group>
                </Card.Content>

            </Card>

        </Card.Group>
    );
}

export default SignUp;