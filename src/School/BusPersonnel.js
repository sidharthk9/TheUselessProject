import React from "react";
import { Link } from "react-router-dom";
import { Table, Card, Button } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import DriverSelectionModal from "./Modals/DriverSelectionModal";
import MonitorSelectionModal from "./Modals/MonitorSelectionModal";


const BusPersonnel = () => {
    return(
        <Card centered color="purple" fluid>
            <Table padded celled size="large" textAlign="center" selectable>
                <Table.Header>

                    <Table.Row>
                        <Table.HeaderCell>Driver Name</Table.HeaderCell>
                        <Table.HeaderCell>Monitor Name</Table.HeaderCell>
                        <Table.HeaderCell>Bus Number</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>

                </Table.Header>

                <Table.Body>

                    <Table.Row>
                        <Table.Cell><DriverSelectionModal /></Table.Cell>
                        <Table.Cell><MonitorSelectionModal /></Table.Cell>
                        <Table.Cell>67</Table.Cell>
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
                        <Table.Cell><DriverSelectionModal /></Table.Cell>
                        <Table.Cell><MonitorSelectionModal /></Table.Cell>
                        <Table.Cell>68</Table.Cell>
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
                        <Table.Cell><DriverSelectionModal /></Table.Cell>
                        <Table.Cell><MonitorSelectionModal /></Table.Cell>
                        <Table.Cell>69</Table.Cell>
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
    );
}

export default BusPersonnel;