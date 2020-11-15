import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
//Components
import "../../assets/semantic/dist/semantic.min.css";
import { AuthContext } from "./AuthContext";


const AuthRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return(
        <Route
            { ...rest }
            render={ (routeProps) =>
                !!currentUser?
                    ( <RouteComponent {...routeProps} /> ):
                    ( <Redirect to="/signup" /> )
            }
        />
    );
};

export default AuthRoute;