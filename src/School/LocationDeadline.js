import React, { useState } from "react";
import { Button, Card, Divider } from "semantic-ui-react";
import DatePicker from "react-datepicker";
//Components
import "../assets/semantic/dist/semantic.min.css";
import "react-datepicker/dist/react-datepicker.min.css";


export function LocationDeadline() {
	const [startDate, setStartDate] = useState(new Date());

	const limitSubmission = (values) => {
		alert(JSON.stringify(values, null, 2));
	};

	return(
		<Card centered>

			<Card.Content textAlign="center">
				<Card.Header content="Location Submission Limit" />
				<Divider />
				<DatePicker
					selected={ startDate }
					onChange={ (date) => setStartDate(date) }
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={ 60 }
					timeCaption="Deadline"
					dateFormat="kk:mm"
				/>

			</Card.Content>

			<Divider fitted />
			<Button
				size="small"
				color="grey"
				content="Cancel"
			/>
			<Button
				positive
				size="small"
				content="Submit"
				onClick={ (event) => {
					event.preventDefault();
					limitSubmission(startDate.getHours());
				} }
			/>

		</Card>
	);
}