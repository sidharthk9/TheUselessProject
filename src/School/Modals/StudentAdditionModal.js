import React, { useState } from "react";
import {Button, Divider, Form, Modal, Label} from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const StudentAdditionModal = () => {
	const [open, setOpen] = useState(false);

	const additionForm = useFormik({
		initialValues: {
			firstName: "",
			surname: "",
		},
		validate: (values) => {
			let errors = {};

			if(!values.firstName){ errors.firstName = "Field is Required"; }
			if(values.firstName.length > 20 ) { errors.firstName = "Length exceeds 20 characters"; }

			if(!values.surname){ errors.surname = "Field is Required"; }
			if(values.surname.length > 20 ) { errors.surname = "Length exceeds 20 characters"; }

			return errors;
		},
		onSubmit: (values) => { fieldCreation(values) }
	});

	const fieldCreation = (values) => {
		alert(JSON.stringify(values, null, 2));
	};


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
					floated="left"
					content="Add New Student"
					size="medium"
					color="vk"
				/>
			}
		>
			<Modal.Header>Create a New Student Field</Modal.Header>

			<Modal.Content>
				<Form onSubmit={ additionForm.handleSubmit }>

					{ ( additionForm.touched.firstName && additionForm.errors.firstName )
						? <Label pointing="below" prompt> { additionForm.errors.firstName } </Label>
						: null
					}
					<Form.Input
						label="First Name"
						id="firstName"
						value={ additionForm.values.firstName }
						onBlur={ additionForm.handleBlur }
						onChange={ additionForm.handleChange }
						placeholder="John"
					/>

					<Divider/>

					{ ( additionForm.touched.surname && additionForm.errors.surname )
						? <Label pointing="below" prompt> { additionForm.errors.surname } </Label>
						: null
					}
					<Form.Input
						label="Surname"
						id="surname"
						value={ additionForm.values.surname }
						onBlur={ additionForm.handleBlur }
						onChange={ additionForm.handleChange }
						placeholder="Doe"
					/>

					<Form.Button
						type="submit"
						color="olive"
						content="Submit"
					/>

				</Form>
			</Modal.Content>

		</Modal>
	);
}

export default StudentAdditionModal;