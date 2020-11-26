import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Divider } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const PendingParentModal = () => {
    const [open, setOpen] = useState(false);
    //Use props instead?
    const [parentName, setParentName] = useState("Null");
    const [studentNumber, setStudentNumber] = useState(0);

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
                    A Parent is requesting approval to use the application. <br />
                    Confirm Credentials?
                </Modal.Content>
                <Divider />
                <Modal.Description>
                    Parent Name: { parentName } <br />
                     Student ID: { studentNumber } <br />
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

				/>
            </Modal.Actions>

        </Modal>
    );
}

export default PendingParentModal;