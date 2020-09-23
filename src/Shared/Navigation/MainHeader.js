import React from "react";
import { Menu , Dropdown } from "semantic-ui-react";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import MainNavigation from "./MainNavigation";

const MainHeader = () => {
    return(
        <Menu inverted>
            <Dropdown item icon="bars" simple>
                <MainNavigation />
            </Dropdown>
        </Menu>
    );
}

export default MainHeader;