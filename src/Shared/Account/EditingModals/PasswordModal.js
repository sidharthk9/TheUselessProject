import React, { useState } from "react";
import { Button, Form, Label, Modal } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";
import { useAuth } from "../../Auth/AuthContext";

const PasswordModal = () => {
    const [open, setOpen] = useState(false);
    const [responseStatus, updateStatus] = useState(null);
    const { updatePasswordProcess } = useAuth();

    const passwordEditForm = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.oldPassword){ errors.oldPassword = "Field is Required"; }

            if(!values.newPassword){ errors.newPassword = "Field is Required"; }
            if(values.newPassword.length < 5){ errors.newPassword = "Length is below 5 characters"; }

            if(!values.confirmPassword){ errors.confirmPassword = "Field is Required"; }
            if(values.newPassword !== values.confirmPassword){ errors.confirmPassword = "Given Passwords do not match"; }

            return errors;
        },
        onSubmit: (values) => { passwordEditing(values) }
    });

    const passwordEditing = (values) => {
        if(values.oldPassword === values.newPassword){
            updateStatus("Given Password matches the existing password");
        }
        else {
            updatePasswordProcess(values.newPassword)
                .then( updateStatus("Updated") )
                .catch( (error) => {
                    const errorMessage = error.message;
                    updateStatus(errorMessage);
                });
        }
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
                    rounded="true"
                    content="Password"
                />
            }
        >
            <Modal.Header>Change the Password?</Modal.Header>

            <Modal.Content>
                <Form onSubmit={ passwordEditForm.handleSubmit }>
                    { ( passwordEditForm.touched.oldPassword && passwordEditForm.errors.oldPassword )
                        ? <Label pointing="below" prompt content={ passwordEditForm.errors.oldPassword } />
                        : null
                    }
                    <Form.Input
                        label="Old Password"
                        id="oldPassword"
                        type="password"
                        value={ passwordEditForm.values.oldPassword }
                        onBlur={ passwordEditForm.handleBlur }
                        onChange={ passwordEditForm.handleChange }
                    />
                    { ( passwordEditForm.touched.newPassword && passwordEditForm.errors.newPassword )
                        ? <Label pointing="below" prompt content={ passwordEditForm.errors.newPassword } />
                        : null
                    }
                    <Form.Input
                        label="New Password"
                        id="newPassword"
                        type="password"
                        value={ passwordEditForm.values.newPassword }
                        onBlur={ passwordEditForm.handleBlur }
                        onChange={ passwordEditForm.handleChange }
                    />
                    { ( passwordEditForm.touched.confirmPassword && passwordEditForm.errors.confirmPassword )
                        ? <Label pointing="below" prompt content={ passwordEditForm.errors.confirmPassword } />
                        : null
                    }
                    <Form.Input
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        value={ passwordEditForm.values.confirmPassword }
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
                />
            </Modal.Actions>
        </Modal>
    );
}

export default PasswordModal;