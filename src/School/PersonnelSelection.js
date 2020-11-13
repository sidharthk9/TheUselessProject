import React from "react";
import { Link } from "react-router-dom";
import { Table, Card, Button, Header, Icon, Divider } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import DriverSelectionModal from "./Modals/DriverSelectionModal";
import MonitorSelectionModal from "./Modals/MonitorSelectionModal";


const PersonnelSelection = () => {
    return(
        <>
            <Divider horizontal>
                <Header as="h4">
                    <Icon name="user circle outline" />
                    <Header.Content>Personnel Selection</Header.Content>
                </Header>
            </Divider>

            <Card centered color="purple" fluid>
                <Table padded celled size="large" textAlign="center" selectable>
                    <Table.Header>

                        <Table.Row>
                            <Table.HeaderCell>Bus Number</Table.HeaderCell>
                            <Table.HeaderCell>Driver Name</Table.HeaderCell>
                            <Table.HeaderCell>Monitor Name</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>

                    <Table.Body>

                        <Table.Row>
                            <Table.Cell>67</Table.Cell>
                            <Table.Cell><DriverSelectionModal /></Table.Cell>
                            <Table.Cell><MonitorSelectionModal /></Table.Cell>
                            <Table.Cell>
                                <Button
                                    inverted
                                    color="teal"
                                    content="On Route"
                                    labelPosition="right"
                                    icon="bus"

                                    as={ Link }
                                    to="/fleettracking"
                                />
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>68</Table.Cell>
                            <Table.Cell><DriverSelectionModal /></Table.Cell>
                            <Table.Cell><MonitorSelectionModal /></Table.Cell>
                            <Table.Cell>
                                <Button
                                    inverted
                                    color="teal"
                                    content="On Route"
                                    labelPosition="right"
                                    icon="bus"

                                    as={ Link }
                                    to="/fleettracking"
                                />
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>69</Table.Cell>
                            <Table.Cell><DriverSelectionModal /></Table.Cell>
                            <Table.Cell><MonitorSelectionModal /></Table.Cell>
                            <Table.Cell>
                                <Button
                                    inverted
                                    color="teal"
                                    content="On Route"
                                    labelPosition="right"
                                    icon="bus"

                                    as={ Link }
                                    to="/fleettracking"
                                />
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </Card>
        </>
    );
}

export default PersonnelSelection;