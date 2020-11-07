import React from 'react';
import {Button, Image, Modal} from "semantic-ui-react";
import profileImage from "../../../Static/Images/potato.svg";
import editImage from "../../../Static/Images/edit.svg";


function ImageModal() {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            dimmer={ "blurring" }
            trigger={ <Image src={ editImage } size="small" rounded/> }
        >
            <Modal.Header>Change the Profile Picture?</Modal.Header>

            <Modal.Content image>
                <Image size="medium" src={ profileImage } wrapped/>
                <Modal.Description>
                    <p>
                        Please choose a new picture.
                    </p>
                    <Button color="yellow">
                        Insert
                    </Button>
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

export default ImageModal;