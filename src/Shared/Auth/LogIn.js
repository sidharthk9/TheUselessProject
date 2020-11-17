import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Image, Label, Segment } from "semantic-ui-react";
import { useFormik } from "formik";
// Components
import "../../assets/semantic/dist/semantic.min.css";
import logo from "../../Static/Images/logo.jpeg"
import ForgotPasswordModal from "./Modals/ForgotPasswordModal";
import { useAuth } from "./AuthContext";


const LogIn = () => {
    const { loginProcess } = useAuth();
    const history = useHistory();

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
            persistentAccount: false
        },
        validate: (values) => {
            let errors = {};

            if(!values.email){ errors.email = "Field is Required"; }

            if(!values.password){ errors.password = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { loginSubmission(values) }
    });

    const accountPersistence = () => {
        loginForm.values.persistentAccount = !loginForm.values.persistentAccount;
    };

    const loginSubmission = (values) => {
        loginProcess(values.email, values.password)
            .then( (response) => {
                console.log(response);
                history.push("/");
            })
            .catch( (error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                alert(`${errorCode}: ${errorMessage}`);
            });
    };

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
                        <Form onSubmit={ loginForm.handleSubmit } inverted widths="equal">
                            { ( loginForm.touched.email && loginForm.errors.email )
                                ? <Label pointing="below" prompt content={ loginForm.errors.email } />
                                : null
                            }
                            <Form.Input
                                fluid
                                label="Email"
                                id="email"
                                value={ loginForm.values.email }
                                onBlur={ loginForm.handleBlur }
                                onChange={ loginForm.handleChange }
                            />

                            { ( loginForm.touched.password && loginForm.errors.password )
                                ? <Label pointing="below" prompt content={ loginForm.errors.password } />
                                : null
                            }
                            <Form.Input
                                fluid
                                label="Password"
                                id="password"
                                value={ loginForm.values.password }
                                onBlur={ loginForm.handleBlur }
                                onChange={ loginForm.handleChange }
                            />

                            <Form.Checkbox
                                label="Stay Logged In?"
                                id="persistentAccount"
                                value={ loginForm.values.persistentAccount }
                                onBlur={ loginForm.handleBlur }
                                onClick={ accountPersistence }
                            />

                            <Form.Button
                                type="submit"
                                content="Log In"
                                color="blue"
                                size="large"
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