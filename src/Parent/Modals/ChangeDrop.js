import React from "react";
import { Link } from "react-router-dom";
import {Button, Header, Icon, Modal} from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const ChangeDrop = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            closeIcon
            open={ open }
            trigger={ <Button color="grey" fluid>Change Location</Button> }
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
        >
            <Header icon="map marker" content="Changing Drop Location" />
            <Modal.Content>
                <p>
                    Are you sure about changing the drop location?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    color="grey"
                    onClick={ () => setOpen(false) }
                >
                    <Icon name="remove" />Cancel
                </Button>
                <Button
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={ () => setOpen(false) }
                    positive

                    as= {Link}
                    to="/mapselection"
                />
            </Modal.Actions>
        </Modal>
    );

}

export default ChangeDrop;