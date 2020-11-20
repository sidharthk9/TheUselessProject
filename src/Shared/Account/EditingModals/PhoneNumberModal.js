import React, { useState } from "react";
import { Button, Form, Label, Modal } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";

const PhoneNumberModal = () => {
    const [open, setOpen] = useState(false);

    const contactNumberEditForm = useFormik({
        initialValues: {
            contactNumber: ""
        },
        validate: (values) => {
            let errors = {};

            if(!values.contactNumber){ errors.contactNumber = "Field is Required"; }

            if(values.contactNumber.length > 15){ errors.contactNumber = "Length exceeds 15 characters"; }

            return errors;
        },
        onSubmit: (values) => { contactNumberEditing(values) }
    });

    const contactNumberEditing = (values) => {
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
                    rounded="true"
                    content="Phone Number"
                />
            }
        >
            <Modal.Header>Change the Phone Number?</Modal.Header>

            <Modal.Content>
                { ( contactNumberEditForm.touched.contactNumber && contactNumberEditForm.errors.contactNumber )
                    ? <Label pointing="below" prompt content={ contactNumberEditForm.errors.contactNumber } />
                    : null
                }
                <Form onSubmit={ contactNumberEditForm.handleSubmit }>
                    <Form.Input
                        label="New Number"
                        placeholder="+971509874563"
                        id="contactNumber"
                        value={ contactNumberEditForm.values.contactNumber }
                        onBlur={ contactNumberEditForm.handleBlur }
                        onChange={ contactNumberEditForm.handleChange }
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
                    content="Cancel"
                    onClick={ () => setOpen(false) }
                />
                <Button
                    positive
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={ () => setOpen(false) }
                />
            </Modal.Actions>
        </Modal>
    );
}

export default PhoneNumberModal;