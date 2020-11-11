import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import LogOut from "../Auth/LogOut";
import ChangeDrop from "../../Parent/Modals/ChangeDrop";


const MainNavigation = () => {
    return(
        <Dropdown.Menu>

            <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
            <Dropdown.Item as={Link} to="/registerstudent">Register Student</Dropdown.Item>
            <Dropdown.Item as={Link} to="/dropoff">Drop Student</Dropdown.Item>
            <Dropdown.Item as={Link} component={ ChangeDrop } >Change Location</Dropdown.Item>
            <Dropdown.Item as={Link} to="/mapselection">Map Selection</Dropdown.Item>
            <Dropdown.Item as={Link} to="/arrival">Arrival Time</Dropdown.Item>
            <Dropdown.Item as={Link} to="/tracking">Bus Tracking</Dropdown.Item>
            <Dropdown.Item as={Link} to="/routes">Routes</Dropdown.Item>
            <Dropdown.Item as={Link} to="/registeredparents">Registered Parents</Dropdown.Item>
            <Dropdown.Item as={Link} to="/personnelselection">Personnel Selection</Dropdown.Item>
            <Dropdown.Item as={Link} to="/fleettracking">Fleet Tracking</Dropdown.Item>
            <Dropdown.Item as={Link} to="/studentlist">Student List</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Settings</Dropdown.Header>
            <Dropdown.Item as={Link} to="/account">Account</Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">Log In</Dropdown.Item>
            <Dropdown.Item as={Link} to="/signup">Sign Up</Dropdown.Item>
            <Dropdown.Item as={Link} component={ LogOut }>Log Out</Dropdown.Item>

        </Dropdown.Menu>
    );
}

export default MainNavigation;