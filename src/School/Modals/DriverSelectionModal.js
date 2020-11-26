import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Divider, Form, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const DriverSelectionModal = () => {
    const [open, setOpen] = useState(false);

    const driverSelectionForm = useFormik({
        initialValues: {
            driverName:"None"
        },
        validate: (values) => {
            let errors={};

            if(!values.driverName){ errors.driverName = "Field is Required"; }

            return errors;
        },
        onSubmit: (values) => { selectionSubmission(values) }
    });

    const selectionSubmission = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return(
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "tiny" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    inverted
                    color="olive"
                    size="medium"
                    content={ driverSelectionForm.values.driverName }
                />
            }
        >
            <Modal.Header>Driver Selection</Modal.Header>

            <Modal.Content>

                Chosen driver: { driverSelectionForm.values.driverName }

                <Divider />

                <Modal.Description>
                    <Form onSubmit={driverSelectionForm.handleSubmit}>
                        <Form.Field content="Enter the New Driver's name" />
                        { ( driverSelectionForm.touched.driverName && driverSelectionForm.errors.driverName )
                            ? <Label pointing="below" prompt content={ driverSelectionForm.errors.driverName } />
                            : null
                        }
                        <Form.Input
                            label="Driver Name"
                            id="driverName"
                            value={ driverSelectionForm.values.driverName }
                            onBlur={ driverSelectionForm.handleBlur }
                            onChange={ driverSelectionForm.handleChange }
                        />
                        <Form.Button
                            type="submit"
                            content="Submit"
                            color="blue"
                            size="large"
                        />
                    </Form>
                </Modal.Description>

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
                    to="/personnelselection"
                />
            </Modal.Actions>

        </Modal>
    );
}

export default DriverSelectionModal;