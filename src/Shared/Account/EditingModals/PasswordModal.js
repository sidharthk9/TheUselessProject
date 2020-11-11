import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
//Components
import "../../../assets/semantic/dist/semantic.min.css";

const PasswordModal = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={ <Button size="medium" color={"white"} basic rounded>Password</Button> }
        >
            <Modal.Header>Change the Password?</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Input label="Old Password" />
                    <Form.Input label="New Password" />
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

export default PasswordModal;