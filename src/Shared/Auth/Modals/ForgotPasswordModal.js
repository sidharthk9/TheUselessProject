import React, { useState } from "react";
import { Button, Modal, Form, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";
import { useAuth } from "../AuthContext";


const ForgotPasswordModal = () => {
    const [open, setOpen] = useState(false);
    const [responseStatus, updateStatus] = useState(null);
    const { resetPasswordProcess } = useAuth();

    const passwordEditForm = useFormik({
        initialValues: {
            email: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.email){ errors.email = "Field is Required"; }
            if(values.email.length < 5){ errors.email = "Length is too short"; }

            return errors;
        },
        onSubmit: (values) => { passwordEditing(values); }
    });

    const passwordEditing = (values) => {
        resetPasswordProcess(values.email)
            .then( updateStatus("Check your mail for the link") )
            .catch( (error) => {
                const errorMessage = error.message;
                updateStatus(errorMessage);
            });
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

                    { (responseStatus === null)
                        ? null
                        : <Label
                            pointing="below"
                            prompt
                            content= { responseStatus }
                        />
                    }
                    <Form.Button
                        type="submit"
                        content="Submit"
                        color="olive"
                        size="large"
                    />
                </Form>
            </Modal.Content>

            <Modal.Actions>
                <Button
                    color="grey"
                    onClick={ () => setOpen(false) }
                    content="Cancel"
                />
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