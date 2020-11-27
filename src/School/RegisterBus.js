import React from "react";
import { Card, Form, Label } from "semantic-ui-react";
import { useFormik } from "formik";
//Components
import "../assets/semantic/dist/semantic.min.css";


export function RegisterBus() {
	const busForm = useFormik({
		initialValues: {
			busNumber: "",
			capacity: ""
		},
		validate: (values) => {
			let errors = {};

			if(!values.busNumber){ errors.busNumber = "Field is Required"; }

			if(!values.capacity){ errors.capacity = "Field is Required"; }
			if(values.capacity > 68){ errors.capacity = "Field expects digits less than 69"; }

			return errors;
		},
		onSubmit: (values) => { busSubmission(values) }
	});

	const busSubmission = (values) => {
		alert(JSON.stringify(values, null, 2));
	};

	return(
		<Card centered>

			<Card.Content>
				<Card.Header>Register a Bus</Card.Header>
				<Card.Description>

					<Form onSubmit={ busForm.handleSubmit }>

						<Form.Field content="Include the Bus number and its Capacity." />


						{ ( busForm.touched.busNumber && busForm.errors.busNumber )
							? <Label pointing="below" prompt content={ busForm.errors.busNumber } />
							: null
						}
						<Form.Input
							fluid
							label="Bus Credentials"
							id="busNumber"
							value={ busForm.values.busNumber }
							onBlur={ busForm.handleBlur }
							onChange={ busForm.handleChange }
						/>

						{ ( busForm.touched.capacity && busForm.errors.capacity )
							? <Label pointing="below" prompt content={ busForm.errors.capacity } />
							: null
						}
						<Form.Input
							fluid
							label="Bus Capacity"
							id="capacity"
							value={ busForm.values.capacity }
							onBlur={ busForm.handleBlur }
							onChange={ busForm.handleChange }
						/>

						<Form.Button
							type="submit"
							fluid
							color="instagram"
							content="Confirm"
							size="medium"
						/>

					</Form>

				</Card.Description>
			</Card.Content>

		</Card>
	);
}