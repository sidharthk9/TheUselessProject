import React, { useState, useEffect } from "react";
import { Button, Divider, Form, Modal, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";
import { useAuth } from "../AuthContext";


const SignUpModal = () => {
    const [open, setOpen] = useState(false);
    const { signUpProcess } = useAuth();
    const [signUpStatus, updateStatus] = useState(null);

    const accountCreation = (values) => {
        signUpProcess(values.email, values.password)
            .then( () => {
                updateStatus("Creation Complete. Verify your address.");
                setOpen(false);

            })
            .catch( (error) => {
                console.log(error);
                const errorMessage = error.message;
                updateStatus(errorMessage);
            });
    };

    const signUpForm = useFormik({
        initialValues: {
            email: "",
            password:"",
            confirmPassword:""
        },
        validate: (values) => {
            let errors = {};
/*
            if(!values.firstName){ errors.firstName = "Field is Required"; }
            if(values.firstName.length > 20 ) { errors.firstName = "Length exceeds 20 characters"; }

            if(!values.surname){ errors.surname = "Field is Required"; }
            if(values.surname.length > 20 ) { errors.surname = "Length exceeds 20 characters"; }
*/
            if(!values.email){ errors.email = "Field is Required"; }
            if(values.email.length < 5 ) { errors.email = "Length is below 5 characters"; }

            //if(!values.contactNumber){ errors.contactNumber = "Field is Required"; }

            if(!values.password){ errors.password = "Field is Required"; }
            if(values.password.length < 5 ) { errors.password = "Length is below 5 characters"; }

            if(!values.confirmPassword){ errors.confirmPassword = "Field is Required"; }
            if(values.confirmPassword.length < 5 ) { errors.confirmPassword = "Length is below 5 characters"; }
            if(values.password !== values.confirmPassword) { errors.confirmPassword = "Given passwords do not match"; }

            return errors;
        },
        onSubmit: (values) => { accountCreation(values) }
    });


    return (
        <Modal
            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            closeIcon
            size={ "small" }
            dimmer={ "blurring" }
            trigger={
                <Button
                    content="Sign Up"
                    icon="user outline"
                    color={ "teal" }
                    size="medium"
                    label={ { as: "p", basic: true, pointing: "right", content: "New User?" } }
                    labelPosition="left"
                />
            }
        >
            <Modal.Header>Create a New Account</Modal.Header>

            <Modal.Content>
                <Form onSubmit={ signUpForm.handleSubmit }>

                    { ( signUpForm.touched.email && signUpForm.errors.email )
                        ? <Label pointing="below" prompt> { signUpForm.errors.email } </Label>
                        : null
                    }
                    <Form.Input
                        label="Email Address"
                        id="email"
                        value={ signUpForm.values.email }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                        placeholder="john@doe.edu"
                    />

                    <Divider/>

                    { ( signUpForm.touched.password && signUpForm.errors.password )
                        ? <Label pointing="below" prompt> { signUpForm.errors.password } </Label>
                        : null
                    }
                    <Form.Input
                        label="Password"
                        id="password"
                        type="password"
                        value={ signUpForm.values.password }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                    />

                    { ( signUpForm.touched.confirmPassword && signUpForm.errors.confirmPassword )
                        ? <Label pointing="below" prompt> { signUpForm.errors.confirmPassword } </Label>
                        : null
                    }
                    <Form.Input
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        value={ signUpForm.values.confirmPassword }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                    />

                    { (signUpStatus === null)
                        ? null
                        : <Label
                            pointing="below"
                            prompt
                            content= { signUpStatus }
                          />
                    }
                    <Form.Button
                        type="submit"
                        color="olive"
                        content="Submit"
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

export default SignUpModal;