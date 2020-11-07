import React from "react";
import {Button, Form, Modal} from "semantic-ui-react";


function SurnameModal() {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={ <Button size="medium" color={"white"} basic rounded>Surname</Button> }
        >
            <Modal.Header>Change the Surname?</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Input label="New Surname" placeholder="Doe" />
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

export default SurnameModal;