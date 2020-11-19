import React from "react";
import { Header, Image, Table, Card, Divider, Icon, Container } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import profileImage from "../Static/Images/truePotato.png";
import PendingParentModal from "./Modals/PendingParentModal";
import ParentDetailsModal from "./Modals/ParentDetailsModal";


export function  RegisteredParents() {
    return(
        <Container textAlign="center" >
            <Divider horizontal>
                <Header as="h4">
                    <Icon name="child" />
                    <Header.Content>Parent Registration</Header.Content>
                </Header>
            </Divider>

            <Card centered color="pink" fluid>
                <Table padded celled size="large" textAlign="center" selectable>
                    <Table.Header>

                        <Table.Row>
                            <Table.HeaderCell>Parent Name</Table.HeaderCell>
                            <Table.HeaderCell>Student ID</Table.HeaderCell>
                            <Table.HeaderCell>Registration Status</Table.HeaderCell>
                        </Table.Row>

                    </Table.Header>

                    <Table.Body>

                        <Table.Row>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <ParentDetailsModal name="Lana" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell>66</Table.Cell>

                            <Table.Cell warning> <PendingParentModal /> </Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <ParentDetailsModal name="Lena" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell>67</Table.Cell>

                            <Table.Cell warning><PendingParentModal /></Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <ParentDetailsModal name="Lina" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell>68</Table.Cell>

                            <Table.Cell positive>Registered</Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <ParentDetailsModal name="Lona" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell>69</Table.Cell>

                            <Table.Cell positive>Registered</Table.Cell>

                        </Table.Row>

                        <Table.Row>

                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={ profileImage } rounded size="small" circular/>
                                    <ParentDetailsModal name="Luna" />
                                </Header>
                            </Table.Cell>

                            <Table.Cell>70</Table.Cell>

                            <Table.Cell positive>Registered</Table.Cell>

                        </Table.Row>

                    </Table.Body>

                </Table>
            </Card>
        </Container>
    );
}