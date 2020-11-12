import React, { useState, useCallback, useEffect } from "react";
import { Button, Divider, Form, Modal } from "semantic-ui-react";
//Components
import "../../../assets/semantic/dist/semantic.min.css";
import firebase from "../../Firebase/FirebaseConfig";


const SignUpModal = () => {
    const [open, setOpen] = useState(false);
    const [firstName, updateFirstName] = useState("");
    const [surname, updateSurname] = useState("");
    const [email, updateEmail] = useState("");
    const [contactNumber, updateContactNumber] = useState("");
    const [password, updatePassword] = useState("");


    const accountCreation = useEffect( () => {

    }, []);

    const formPrototype = useEffect( (event) => {
        console.log(event);
    }, []);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "small" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    content="Sign Up"
                    icon="user outline"
                    color={ "teal" }
                    size="medium"
                    label={ { as: "p", basic: true, pointing: "right", content: "New User?" } }
                    labelPosition="left"
                />
            }
        >
            <Modal.Header>Create a New Account</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Input
                        label="First Name"
                        value={ firstName }
                        onChange={ (event) => {
                           console.log(firstName);
                        } }
                        placeholder="John"
                    />
                    <Form.Input
                        label="Surname"
                        value={ surname }
                        placeholder="Doe"
                    />
                    <Form.Input
                        label="Email Address"
                        value={ email }
                        placeholder="john@doe.edu"
                    />
                    <Form.Input
                        label="Phone Number"
                        value={ contactNumber }
                        placeholder="+971501234567"
                    />

                    <Divider/>

                    <Form.Input
                        label="Password"
                        value={ password }
                    />
                    <Form.Input
                        label="Confirm Password"
                    />

                </Form>
            </Modal.Content>

            <Modal.Actions>
                <Button
                    color="grey"
                    onClick={ (event) => {
                        console.log(firstName);
                        console.log(surname);
                        console.log(email);
                    } }
                >
                    Cancel
                </Button>
                <Button
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={ () => setOpen(false) }
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
}

export default SignUpModal;