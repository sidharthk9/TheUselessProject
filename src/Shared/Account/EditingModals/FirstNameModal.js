import React from "react";
import {Button, Form, Label, Modal} from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";


const FirstNameModal = () => {
    const [open, setOpen] = React.useState(false);

    const firstNameEditForm = useFormik({
        initialValues: {
            firstName: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.firstName){ errors.firstName = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { firstNameEditing(values) }
    });

    const firstNameEditing = (values) => {
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
                    color="white"
                    basic
                    rounded
                    content="First Name"
                />
            }
        >
            <Modal.Header>Change the Name?</Modal.Header>

            <Modal.Content>
                <Form onSubmit={ firstNameEditForm.handleSubmit }>
                    { ( firstNameEditForm.touched.firstName && firstNameEditForm.errors.firstName )
                        ? <Label pointing="below" prompt content={ firstNameEditForm.errors.firstName } />
                        : null
                    }
                    <Form.Input
                        label="New Name"
                        id="firstName"
                        placeholder="John"
                        value={ firstNameEditForm.values.firstName }
                        onBlur={ firstNameEditForm.handleBlur }
                        onChange={ firstNameEditForm.handleChange }
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
                <Button color="grey" onClick={ () => setOpen(false) }>
                    Cancel
                </Button>
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

export default FirstNameModal;