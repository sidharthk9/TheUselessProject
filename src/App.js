import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
//Components
import "./assets/semantic/dist/semantic.min.css";
import Dashboard from "./Shared/Dashboard/Dashboard";
import MainHeader from "./Shared/Navigation/MainHeader";
import DropOff from "./Parent/DropOff";
import Account from "./Shared/Account/Account";
import SignUp from "./Shared/Auth/SignUp";
import LogIn from "./Shared/Auth/LogIn";
import RegisterStudent from "./Parent/RegisterStudent";
import MapSelection from "./Parent/MapSelection";
import Arrival from "./Parent/Arrival";
import Tracking from "./Parent/Tracking";
import Routes from "./Driver/Routes";


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

                <Route path="/dropoff">
                    <Container fluid>
                        <DropOff />
                    </Container>
                </Route>

                <Route path="/mapselection">
                    <Container fluid>
                        <MapSelection />
                    </Container>
                </Route>

                <Route path="/arrival">
                    <Container fluid>
                        <Arrival />
                    </Container>
                </Route>

                <Route path="/tracking">
                    <Container fluid>
                        <Tracking />
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