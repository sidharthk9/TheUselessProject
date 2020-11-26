import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Divider } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const PendingParentModal = () => {
    const [open, setOpen] = useState(false);

    return(
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "small" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    basic
                    content="Pending"
                    color="grey"
                    size="medium"
                />
            }
        >
            <Modal.Header>Pending Registration</Modal.Header>

            <Modal.Content>
                <Modal.Content>
                    A Driver is requesting approval to use the application. <br />
                    Confirm User?
                </Modal.Content>
            </Modal.Content>

            <Modal.Actions>

                <Button
                    color="grey"
                    onClick={ () => setOpen(false) }
                    content="Cancel"
                />

                <Button
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={ () => setOpen(false) }
                    positive

                    as={ Link }
                    to="/registeredparents"
                />

            </Modal.Actions>

        </Modal>
    );
}

export default PendingParentModal;