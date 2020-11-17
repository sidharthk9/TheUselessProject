import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Image, Modal, Table, Label } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import profileImage from "../../Static/Images/truePotato.png";


const ParentDetailsModal = (props) => {
    const [open, setOpen] = useState(false);
    //Use props instead?
    const [name, setName] = useState("Null");
    const [surname, setSurname] = useState("Nullsson");
    const [email, setEmail] = useState("null@nulltown.com");
    const [contactNumber, setContactNumber] = useState(0);
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
                <Header.Content>
                    { props.name }
                </Header.Content>
            }
        >
            <Modal.Header>Parent Information</Modal.Header>

            <Modal.Content image>

                <Image size="medium" src={ profileImage } wrapped/>
                <Modal.Description>
                    <Table celled padded textAlign="center" color="violet" key="violet" inverted>
                        <Table.Body>

                            <Table.Row>
                                <Table.Cell>
                                    <Label ribbon="left" size="large">Student Number</Label>
                                </Table.Cell>
                                <Table.Cell>{ studentNumber }</Table.Cell>

                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>First Name</Table.Cell>
                                <Table.Cell>{ name }</Table.Cell>

                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Surname</Table.Cell>
                                <Table.Cell>{ surname }</Table.Cell>

                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Email Address</Table.Cell>
                                <Table.Cell>{ email }</Table.Cell>

                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Contact Number</Table.Cell>
                                <Table.Cell>{ contactNumber }</Table.Cell>

                            </Table.Row>

                        </Table.Body>
                    </Table>
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
                    to="/registeredparents"
                />
            </Modal.Actions>

        </Modal>
    );
}

export default ParentDetailsModal;