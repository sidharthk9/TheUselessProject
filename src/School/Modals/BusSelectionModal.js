import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Button, Icon, Modal} from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";


const BusSelectionModal = (props) => {
	const [open, setOpen] = useState(false);

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
					content={ props.number }
				/>
			}
		>
			<Modal.Header >
				<Icon circular name="trash"/>
				Bus Status
			</Modal.Header>

			<Modal.Content>This Bus instance can be deleted here.</Modal.Content>

			<Modal.Actions>
				<Button
					color="grey"
					onClick={ () => { setOpen(false); } }
					content="Cancel"
				/>
				<Button
					content="Delete"
					labelPosition="right"
					icon="times"
					onClick={ () => { setOpen(false); } }
					negative

					as={ Link }
					to="/personnelselection"
				/>
			</Modal.Actions>

		</Modal>
	);
}

export default BusSelectionModal;