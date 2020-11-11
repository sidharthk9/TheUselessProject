import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";


const EmailModal = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={ <Button size="medium" color={"white"} basic rounded>Email</Button> }
        >
            <Modal.Header>Change the Email Address?</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Input label="New Address" placeholder="john@doe.edu" />
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

export default EmailModal;