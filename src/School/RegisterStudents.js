import React from "react";
import { Header, Table, Card, Divider, Icon, Container, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
//Components
import "../assets/semantic/dist/semantic.min.css";
import StudentSelectionModal from "./Modals/StudentSelectionModal";
import ParentDetailsModal from "./Modals/ParentDetailsModal";
import StudentAdditionModal from "./Modals/StudentAdditionModal";


export function AddStudent() {
	return(
		<Container textAlign="center" fluid>

			<Divider horizontal>
				<Header as="h4">
					<Icon name="child" />
					<Header.Content>Student Addition</Header.Content>
				</Header>
			</Divider>

			<StudentAdditionModal />

			<Divider hidden section />

			<Card centered color="pink" fluid>
				<Table padded celled size="large" textAlign="center" selectable>

					<Table.Header>

						<Table.Row>
							<Table.HeaderCell>Student ID</Table.HeaderCell>
							<Table.HeaderCell>First Name</Table.HeaderCell>
							<Table.HeaderCell>Surname</Table.HeaderCell>
							<Table.HeaderCell>Parent</Table.HeaderCell>
							<Table.HeaderCell>Bus ID</Table.HeaderCell>
						</Table.Row>

					</Table.Header>

					<Table.Body>

						<Table.Row>

							<Table.Cell><StudentSelectionModal number={ 67 } /></Table.Cell>
							<Table.Cell>Dan</Table.Cell>
							<Table.Cell>Lana</Table.Cell>
							<Table.Cell><ParentDetailsModal name="Lana" /></Table.Cell>
							<Table.Cell >
								<Button
									inverted
									color="green"
									content={ 1 }

									as={Link}
									to="/personnelselection"
								/>
							</Table.Cell>

						</Table.Row>

						<Table.Row>

							<Table.Cell><StudentSelectionModal number={ 68 } /></Table.Cell>
							<Table.Cell>Den</Table.Cell>
							<Table.Cell>Lena</Table.Cell>
							<Table.Cell><ParentDetailsModal name="Lena" /></Table.Cell>
							<Table.Cell >
								<Button
									inverted
									color="green"
									content={ 2 }

									as={Link}
									to="/personnelselection"
								/>
							</Table.Cell>

						</Table.Row>

						<Table.Row>

							<Table.Cell><StudentSelectionModal number={ 69 } /></Table.Cell>
							<Table.Cell>Din</Table.Cell>
							<Table.Cell>Lina</Table.Cell>
							<Table.Cell><ParentDetailsModal name="Lina" /></Table.Cell>
							<Table.Cell >
								<Button
									inverted
									color="green"
									content={ 3 }

									as={Link}
									to="/personnelselection"
								/>
							</Table.Cell>

						</Table.Row>

						<Table.Row>

							<Table.Cell><StudentSelectionModal number={ 70 } /></Table.Cell>
							<Table.Cell>Don</Table.Cell>
							<Table.Cell>Lona</Table.Cell>
							<Table.Cell><ParentDetailsModal name="Lona" /></Table.Cell>
							<Table.Cell >
								<Button
									inverted
									color="green"
									content={ 4 }

									as={Link}
									to="/personnelselection"
								/>
							</Table.Cell>

						</Table.Row>

					</Table.Body>

				</Table>
			</Card>
		</Container>
	);
}