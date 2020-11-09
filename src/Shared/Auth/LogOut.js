import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const LogOut = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            closeIcon
            open={ open }
            trigger={ <Button color="grey" fluid>Log Out</Button> }
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
        >
            <Header icon="archive" content="Log Out" />
            <Modal.Content>
                <p>
                    Are you sure about logging out?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button color="yellow" onClick={ () => setOpen(false) }>
                    <Icon name="remove" /> No
                </Button>
                <Button
                    color="green"
                    as={Link}
                    to="/signup"
                    onClick={ () => setOpen(false) }
                >
                    <Icon name="checkmark" /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );

}

export default LogOut;