import React from "react";
import { Header, Image, Table, Card, Divider, Icon, Container } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import profileImage from "../Static/Images/truePotato.png";
import PendingDriverModal from "./Modals/PendingDriverModal";
import DriverDetailsModal from "./Modals/DriverDetailsModal";


export function  RegisterDrivers() {
    return(
        <Container textAlign="center" fluid>

            <Divider horizontal>
                <Header as="h4">
                    <Icon name="bus" />
                    <Header.Content>Driver Registration</Header.Content>
                </Header>
            </Divider>

            <Card centered color="pink" fluid>
                <Table padded celled size="large" textAlign="center" selectable>

                    <Table.Header>

                        <Table.Row>
                            <Table.HeaderCell>Bus ID</Table.HeaderCell>
                            <Table.HeaderCell>Driver Name</Table.HeaderCell>
                            <Table.HeaderCell>Registration Status</Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>

                    <Table.Body>

                        <Table.Row>

                            <Table.Cell>66</Table.Cell>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <DriverDetailsModal name="Lana" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell warning> <PendingDriverModal /> </Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>67</Table.Cell>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <DriverDetailsModal name="Lena" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell warning><PendingDriverModal /></Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>68</Table.Cell>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <DriverDetailsModal name="Lina" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell positive>Registered</Table.Cell>

                        </Table.Row>

                    </Table.Body>

                </Table>
            </Card>
        </Container>
    );
}