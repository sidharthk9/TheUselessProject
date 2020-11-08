import React from "react";
import { Card, Form } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";


const RegisterStudent = () => {
    return(
        <Card centered>

            <Card.Content>
                <Card.Header>Register a Student</Card.Header>
                <Card.Description>

                    <Form>
                        <Form.Field content="Request will be submitted to the school for approval." />
                        <Form.Input fluid label="Student Identification Number" />

                        <Form.Button fluid color="instagram">
                            Confirm
                        </Form.Button>
                    </Form>

                </Card.Description>
            </Card.Content>

        </Card>
    );
}

export default RegisterStudent;