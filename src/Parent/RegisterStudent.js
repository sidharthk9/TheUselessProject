import React from "react";
import { Card, Form, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../assets/semantic/dist/semantic.min.css";


export function RegisterStudent() {
    const studentForm = useFormik({
        initialValues: {
            studentNumber: ""
        },
		validate: (values) => {
            let errors = {};

            if(!values.studentNumber){ errors.studentNumber = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { numberSubmission(values) }
    });

    const numberSubmission = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return(
        <Card centered>

            <Card.Content>
                <Card.Header>Register a Student</Card.Header>
                <Card.Description>

                    <Form onSubmit={studentForm.handleSubmit}>
                        <Form.Field content="Request will be submitted to the school for approval." />

                        { ( studentForm.touched.studentNumber && studentForm.errors.studentNumber )
                            ? <Label pointing="below" prompt content={ studentForm.errors.studentNumber } />
                            : null
                        }
                        <Form.Input
                            fluid
                            label="Student Identification Number"
                            id="studentNumber"
                            value={ studentForm.values.studentNumber }
                            onBlur={ studentForm.handleBlur }
                            onChange={ studentForm.handleChange }
                        />

                        <Form.Button
                            type="submit"
                            fluid
                            color="instagram"
                            content="Confirm"
                            size="medium"
                        />

                    </Form>

                </Card.Description>
            </Card.Content>

        </Card>
    );
}