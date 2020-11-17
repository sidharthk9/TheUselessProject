import React, { useState } from "react";
import { Button, Modal, Form, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";


const EmailModal = () => {
    const [open, setOpen] = useState(false);

    const emailEditForm = useFormik({
        initialValues: {
            email: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.email){ errors.email = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { emailEditing(values) }
    });

    const emailEditing = (values) => {
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
                    size="medium"
                    color="grey"
                    basic
                    rounded
                    content="Email"
                />
            }
        >
            <Modal.Header>Change the Email Address?</Modal.Header>

            <Modal.Content>
                <Form onSubmit={ emailEditForm.handleSubmit }>
                    { ( emailEditForm.touched.email && emailEditForm.errors.email )
                        ? <Label pointing="below" prompt content={ emailEditForm.errors.email } />
                        : null
                    }
                    <Form.Input
                        label="New Address"
                        id="email"
                        placeholder="john@doe.edu"
                        value={ emailEditForm.values.email }
                        onBlur={ emailEditForm.handleBlur }
                        onChange={ emailEditForm.handleChange }
                    />
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
                />
            </Modal.Actions>
        </Modal>
    );
}

export default EmailModal;