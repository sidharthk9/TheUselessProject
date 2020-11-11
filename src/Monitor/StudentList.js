import React from "react";
import { Divider, Header, Icon, Label, Table } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";
import DropToggleButton from "./DropToggleButton";

const StudentList = () => {
    return(
        <>
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
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">67</Label>
                        </Table.Cell>
                        <Table.Cell>Dan</Table.Cell>
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
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">69</Label>
                        </Table.Cell>
                        <Table.Cell>Din</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row>

                        <Table.Cell>
                            <Label ribbon="left" color="purple" size="large">69.9</Label>
                        </Table.Cell>
                        <Table.Cell>Don</Table.Cell>
                        <Table.Cell>
                            <DropToggleButton />
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
            </Table>
        </>
    );
}

export default StudentList;