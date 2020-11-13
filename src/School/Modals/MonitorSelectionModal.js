import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Divider, Form, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const MonitorSelectionModal = () => {
    const [open, setOpen] = useState(false);

    const monitorSelectionForm = useFormik({
        initialValues: {
            monitorName: "None"
        },
        validate: (values) => {
            let errors={};

            if(!values.monitorName){ errors.monitorName = "Field is Required"; }

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
                    color="green"
                    size="medium"
                    content= { monitorSelectionForm.values.monitorName }
                />
            }
        >
            <Modal.Header>Monitor Selection</Modal.Header>

            <Modal.Content>

                Chosen Monitor: { monitorSelectionForm.values.monitorName }

                <Divider />

                <Modal.Description>
                    <Form onSubmit={monitorSelectionForm.handleSubmit}>
                        <Form.Field>Enter the New Monitor's name</Form.Field>
                        { ( monitorSelectionForm.touched.monitorName && monitorSelectionForm.errors.monitorName )
                            ? <Label pointing="below" prompt content={ monitorSelectionForm.errors.monitorName } />
                            : null
                        }
                        <Form.Input
                            label="Driver Name"
                            id="monitorName"
                            value={ monitorSelectionForm.values.monitorName }
                            onBlur={ monitorSelectionForm.handleBlur }
                            onChange={ monitorSelectionForm.handleChange }
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

export default MonitorSelectionModal;