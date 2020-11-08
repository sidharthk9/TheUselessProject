import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
//Components
import "./assets/semantic/dist/semantic.min.css";
import Dashboard from "./Shared/Dashboard/Dashboard";
import MainHeader from "./Shared/Navigation/MainHeader";
import PickUp from "./Parent/PickUp";
import Routes from "./Driver/Routes";
import Account from "./Shared/Account/Account";
import SignUp from "./Shared/Auth/SignUp";
import LogIn from "./Shared/Auth/LogIn";
import RegisterStudent from "./Parent/RegisterStudent";


function App() {

    return (
        <Router>
            <MainHeader />
            <Switch>

                <Route path="/signup">
                    <Container fluid>
                        <SignUp />
                    </Container>
                </Route>

                <Route path="/login">
                    <Container fluid>
                        <LogIn />
                    </Container>
                </Route>

                <Route path="/exit">
                    <Container fluid>
                    </Container>
                </Route>

                <Route path="/" exact>
                    <Container fluid>
                        <Dashboard />
                    </Container>
                </Route>

                <Route path="/account">
                    <Container fluid>
                        <Account />
                    </Container>
                </Route>

                <Route path="/registerstudent">
                    <Container fluid>
                        <RegisterStudent />
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

                <Redirect to="/signup" />
            </Switch>
        </Router>
    );
}

export default App;