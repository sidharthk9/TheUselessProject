import React, {useCallback, useState} from "react";
import { Button } from "semantic-ui-react";
//Components
import "../assets/semantic/dist/semantic.min.css";


const DropToggleButton = () => {
    const [toggle, setToggle] = useState(false);

    //More massaging. Fuck Javascript.
    const toggleStatus = useCallback( (toggle) =>{
        const newStatus = !!toggle;
        setToggle(newStatus);
    }, []);

    return(
        <Button

            color={ (toggle)? "purple": "orange" }
            content={ (toggle)? "Dropped": "On Route"  }
            labelPosition="right"
            icon={ (toggle)? "check circle": "ellipsis horizontal" }
            onClick={ toggleStatus }
        />
    );
}

export default DropToggleButton;