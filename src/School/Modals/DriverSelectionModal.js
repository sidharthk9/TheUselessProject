import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Button, Modal, Divider, Form} from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const DriverSelectionModal = () => {
    const [open, setOpen] = useState(false);
    const [driverName, setDriverName] = useState("Null");

    return(
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    inverted
                    color="olive"
                    size="medium"
                    content= { driverName }
                />
            }
        >
            <Modal.Header>Driver Selection</Modal.Header>

            <Modal.Content>
                <Modal.Content>
                    Chosen driver: { driverName }
                </Modal.Content>
                <Divider />
                <Modal.Description>
                    <Form>
                        <Form.Field>Enter the New Driver's name</Form.Field>
                        <Form.Input />
                    </Form>
                </Modal.Description>
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

                    as={ Link }
                    to="/buspersonnel"
                />
            </Modal.Actions>

        </Modal>
    );
}

export default DriverSelectionModal;