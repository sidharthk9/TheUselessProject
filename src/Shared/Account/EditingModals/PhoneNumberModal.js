import React from "react";
import {Button, Form, Modal} from "semantic-ui-react";
//Components
import "../../../assets/semantic/dist/semantic.min.css";

const PhoneNumberModal = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={ <Button size="medium" color={"white"} basic rounded>Phone Number</Button> }
        >
            <Modal.Header>Change the Phone Number?</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Input label="New Number" placeholder="+971509874563" />
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

export default PhoneNumberModal;