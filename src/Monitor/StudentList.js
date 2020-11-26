import React from "react";
import { Container, Divider, Header, Icon, Label, Table } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import DropToggleButton from "./DropToggleButton";
import PositionToggleButton from "./PositionToggleButton";


export function StudentList() {
    return(
        <Container fluid>

            <Divider horizontal>
                <Header as="h4">
                    <Icon name="child" />
                    <Header.Content>Student List</Header.Content>
                </Header>
            </Divider>

            <Table celled padded textAlign="center" color="blue" key="blue" inverted>
                <Table.Body>

                    <Table.Row>
                        <Table.HeaderCell>Student ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Position Status</Table.HeaderCell>
                        <Table.HeaderCell>Drop Status</Table.HeaderCell>
                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">67</Label>
                        </Table.Cell>
                        <Table.Cell>Dan</Table.Cell>
						<Table.Cell>
							<PositionToggleButton />
						</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">68</Label>
                        </Table.Cell>
                        <Table.Cell>Den</Table.Cell>
						<Table.Cell>
							<PositionToggleButton />
						</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">69</Label>
                        </Table.Cell>
                        <Table.Cell>Din</Table.Cell>
						<Table.Cell>
							<PositionToggleButton />
						</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">70</Label>
                        </Table.Cell>
                        <Table.Cell>Don</Table.Cell>
						<Table.Cell>
							<PositionToggleButton />
						</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
            </Table>
        </Container>
    );
}