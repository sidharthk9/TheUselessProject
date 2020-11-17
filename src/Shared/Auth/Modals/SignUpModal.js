import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Divider, Form, Modal, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../../assets/semantic/dist/semantic.min.css";
import { useAuth } from "../AuthContext";


const SignUpModal = () => {
    const [open, setOpen] = useState(false);
    const { signUpProcess } = useAuth();
    const [signUpErrors, updateError] =useState(null);
    const history = useHistory();

    const accountCreation = (values) => {
        signUpProcess(values.email, values.password)
            .then( (response) => {
                console.log(response);
                history.push("/signup");

            })
            .catch( (error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                //TODO: Add the other error responses
                if (errorCode === "auth/weak-password") {
                    updateError("The password is too weak.");
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    };

    const signUpForm = useFormik({
        initialValues: {
            firstName: "",
            surname: "",
            email: "",
            contactNumber: "",
            password:"",
            confirmPassword:""
        },
        validate: (values) => {
            let errors = {};

            if(!values.firstName){ errors.firstName = "Field is Required"; }
            if(values.firstName.length > 20 ) { errors.firstName = "Length exceeds 20 characters"; }

            if(!values.surname){ errors.surname = "Field is Required"; }
            if(values.surname.length > 20 ) { errors.surname = "Length exceeds 20 characters"; }

            if(!values.email){ errors.email = "Field is Required"; }
            if(values.email.length < 5 ) { errors.email = "Length is below 5 characters"; }

            if(!values.contactNumber){ errors.contactNumber = "Field is Required"; }

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

                    { ( signUpForm.touched.firstName && signUpForm.errors.firstName )
                        ? <Label pointing="below" prompt> { signUpForm.errors.firstName } </Label>
                        : null
                    }
                    <Form.Input
                        label="First Name"
                        id="firstName"
                        value={ signUpForm.values.firstName }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                        placeholder="John"
                    />

                    { ( signUpForm.touched.surname && signUpForm.errors.surname )
                        ? <Label pointing="below" prompt> { signUpForm.errors.surname } </Label>
                        : null
                    }
                    <Form.Input
                        label="Surname"
                        id="surname"
                        value={ signUpForm.values.surname }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                        placeholder="Doe"
                    />

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

                    { ( signUpForm.touched.contactNumber && signUpForm.errors.contactNumber )
                        ? <Label pointing="below" prompt> { signUpForm.errors.contactNumber } </Label>
                        : null
                    }
                    <Form.Input
                        label="Phone Number"
                        id="contactNumber"
                        value={ signUpForm.values.contactNumber }
                        onBlur={ signUpForm.handleBlur }
                        onChange={ signUpForm.handleChange }
                        placeholder="00971501234567"
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

                    { (signUpErrors === null)
                        ? null
                        : <Label
                            pointing="below"
                            prompt
                            onClick={ updateError(null) }
                        > { signUpErrors } </Label>
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