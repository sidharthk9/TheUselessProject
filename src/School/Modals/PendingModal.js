import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const PendingModal = () => {
    const [open, setOpen] = useState(false);

    return(
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size="tiny"
            dimmer="blurring"
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
                    This User is requesting approval to use the application.
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
                />

            </Modal.Actions>

        </Modal>
    );
}

export default PendingModal;