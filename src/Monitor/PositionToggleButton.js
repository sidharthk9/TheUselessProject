import React, { useCallback, useState } from "react";
import { Button } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";


const PositionToggleButton = () => {
	const [toggle, setToggle] = useState(false);

	//More massaging. Fuck Javascript.
	const toggleStatus = useCallback( (toggle) =>{
		const newStatus = !!toggle;
		setToggle(newStatus);
	}, []);

	return(
		<Button

			color={ (toggle)? "purple": "orange" }
			content={ (toggle)? "Aboard": "Away"  }
			labelPosition="right"
			icon={ (toggle)? "check circle": "ellipsis horizontal" }
			onClick={ toggleStatus }
		/>
	);
}

export default PositionToggleButton;