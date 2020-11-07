import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'semantic-ui-react';
//Components
import "../../assets/semantic/dist/semantic.min.css";


const MainNavigation = () => {
    return(
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
            <Dropdown.Item as={Link} to="/parent">Pick Up</Dropdown.Item>
            <Dropdown.Item as={Link} to="/routes">Routes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Settings</Dropdown.Header>
            <Dropdown.Item as={Link} to="/account">Account</Dropdown.Item>
            <Dropdown.Item as={Link} to="/exit">Log Out</Dropdown.Item>

        </Dropdown.Menu>
    );
}

export default MainNavigation;