import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
//Components
import "./assets/semantic/dist/semantic.min.css";
import Dashboard from "./Home/Dashboard";
import MainHeader from "./Shared/Navigation/MainHeader";
import PickUp from "./Parent/PickUp";
import Routes from "./Bus/Routes";
import Account from "./Shared/Account/Account";
import SignUp from "./Shared/Auth/SignUp";

function App() {

    return (
        <Router>
            <MainHeader />
            <Switch>

                <Route path="/" exact>
                    <Container fluid>
                        <Dashboard />
                    </Container>
                </Route>

                <Route path="/parent">
                    <Container fluid>
                        <PickUp />
                    </Container>
                </Route>

                <Route path="/routes">
                    <Container fluid>
                        <Routes />
                    </Container>
                </Route>

                <Route path="/account">
                    <Container fluid>
                        <Account />
                    </Container>
                </Route>

                <Route path="/signup">
                    <Container fluid>
                        <SignUp />
                    </Container>
                </Route>

                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;