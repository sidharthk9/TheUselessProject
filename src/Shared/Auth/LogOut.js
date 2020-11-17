import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import { useAuth } from "./AuthContext";


const LogOut = () => {
    const [open, setOpen] = useState(false);
    const { logoutProcess } = useAuth();
    const history = useHistory();

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
                    content="Confirm"
                    onClick={ () => {
                        logoutProcess()
                            .then( () => {
                                history.push("/signup");
                                setOpen(false);
                            }).catch( (error) => {
                                console.log(error);
                            })
                    } }
                />
            </Modal.Actions>
        </Modal>
    );

}

export default LogOut;