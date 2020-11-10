import React from "react";
import {Button, Divider, Form, Modal} from "semantic-ui-react";
//Components
import "../../../assets/semantic/dist/semantic.min.css";


const SignUpModal = () => {
    const [open, setOpen] = React.useState(false);

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
                    <Form.Input label="First Name" placeholder="John" />
                    <Form.Input label="Surname" placeholder="Doe" />
                    <Form.Input label="Email Address" placeholder="john@doe.edu" />
                    <Form.Input label="Phone Number" placeholder="+971501234567" />

                    <Divider/>
                    <Form.Input label="Password" />
                    <Form.Input label="Confirm Password" />

                </Form>
            </Modal.Content>

            <Modal.Actions>
                <Button color="grey" onClick={ () => setOpen(false) }>
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