import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";


const ForgotPasswordModal = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    content="Forgot Password?"
                    color="violet"
                    size="large"
                />
            }
        >
            <Modal.Header>Forgot the Password?</Modal.Header>

            <Modal.Content>
                <p>
                    Enter your Email Address to receive the editing link.
                </p>
                <Form>
                    <Form.Input label="Email" placeholder="john@doe.edu" />
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

                    as={Link}
                    to="/signup"
                />
            </Modal.Actions>

        </Modal>
    );
}

export default ForgotPasswordModal;