import React from "react";
import { Button, Form, Label, Modal } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";


const SurnameModal = () => {
    const [open, setOpen] = React.useState(false);

    const surnameEditForm = useFormik({
        initialValues: {
            surname: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.surname){ errors.surname = "Field is Required"; }

            if(values.surname.length < 20){ errors.surname = "Length exceeds 20 characters"; }

            return errors;
        },
        onSubmit: (values) => { surnameEditing(values) }
    });

    const surnameEditing = (values) => {
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
                    content="Surname"
                />
            }
        >
            <Modal.Header>Change the Surname?</Modal.Header>

            <Modal.Content>
                { ( surnameEditForm.touched.surname && surnameEditForm.errors.surname )
                    ? <Label pointing="below" prompt content={ surnameEditForm.errors.surname } />
                    : null
                }
                <Form onSubmit={ surnameEditForm.handleSubmit }>
                    <Form.Input
                        label="New Surname"
                        placeholder="Doe"
                        id="surname"
                        value={ surnameEditForm.values.surname }
                        onBlur={ surnameEditForm.handleBlur }
                        onChange={ surnameEditForm.handleChange }
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

export default SurnameModal;