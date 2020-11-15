import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import firebase from "../Firebase/Firebase";


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
            <Header icon={"sign out"} content="Log Out" />
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
                    icon="checkmark"
                    onClick={ () => {
                        setOpen(false);
                        firebase
                            .auth()
                            .signOut()
                            .then(function() {
                                // Sign-out successful.
                            }).catch(function(error) {
                                // An error happened.
                            })
                    } }
                />
            </Modal.Actions>
        </Modal>
    );

}

export default LogOut;