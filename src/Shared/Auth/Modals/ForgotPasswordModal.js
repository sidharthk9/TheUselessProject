import React from "react";
import {Button, Modal, Form, Label} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

//Components
import "../../../assets/semantic/dist/semantic.min.css";


const ForgotPasswordModal = () => {
    const [open, setOpen] = React.useState(false);

    const passwordEditForm = useFormik({
        initialValues: {
            email: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.email){ errors.email = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { passwordEditing(values) }
    });

    const passwordEditing = (values) => {
        alert(JSON.stringify(values, null, 2) );
    };

    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    content="Forgot Password?"
                    color="violet"
                    size="large"
                />
            }
        >
            <Modal.Header>Forgot the Password?</Modal.Header>

            <Modal.Content>
                <p>
                    Enter your Email Address to receive the editing link.
                </p>
                <Form onSubmit={ passwordEditForm.handleSubmit }>
                    { ( passwordEditForm.touched.email && passwordEditForm.errors.email )
                        ? <Label pointing="below" prompt content={ passwordEditForm.errors.email } />
                        : null
                    }
                    <Form.Input
                        label="Email"
                        id="email"
                        placeholder="john@doe.edu"
                        value={ passwordEditForm.values.email }
                        onBlur={ passwordEditForm.handleBlur }
                        onChange={ passwordEditForm.handleChange }
                    />
                    <Form.Button
                        type="submit"
                        content="Continue"
                        color="olive"
                        size="large"
                    />
                </Form>
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
                    to="/signup"
                />
            </Modal.Actions>

        </Modal>
    );
}

export default ForgotPasswordModal;