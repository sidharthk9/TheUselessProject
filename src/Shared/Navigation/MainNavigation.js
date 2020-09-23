import React from "react";
import { Dropdown } from 'semantic-ui-react';
//Components
import "../../assets/semantic/dist/semantic.min.css";


const MainNavigation = () => {
    return(
        <Dropdown.Menu>
            <Dropdown.Item>Pick Up</Dropdown.Item>
            <Dropdown.Item>Routes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Settings</Dropdown.Header>
            <Dropdown.Item>Account</Dropdown.Item>
        </Dropdown.Menu>
    );
}

export default MainNavigation;