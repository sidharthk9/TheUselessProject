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
import RegisteredParents from "./School/RegisteredParents";
import PersonnelSelection from "./School/PersonnelSelection";
import FleetTracking from "./School/FleetTracking";
import StudentList from "./Monitor/StudentList";
import { AuthContext } from "./Shared/Auth/AuthContext";


const App = () => {

    return (
        <AuthContext>
            <Router>
                <MainHeader />
                <Switch>

                    <Route exact path="/signup">
                        <Container fluid>
                            <SignUp />
                        </Container>
                    </Route>

                    <Route exact path="/login">
                        <Container fluid>
                            <LogIn />
                        </Container>
                    </Route>

                    <Route exact path="/exit">
                        <Container fluid>
                        </Container>
                    </Route>

                    <Route exact path="/">
                        <Container fluid>
                            <Dashboard />
                        </Container>
                    </Route>

                    <Route exact path="/account">
                        <Container fluid>
                            <Account />
                        </Container>
                    </Route>

                    <Route exact path="/registerstudent">
                        <Container fluid>
                            <RegisterStudent />
                        </Container>
                    </Route>

                    <Route exact path="/dropoff">
                        <Container fluid>
                            <DropOff />
                        </Container>
                    </Route>

                    <Route exact path="/mapselection">
                        <Container fluid>
                            <MapSelection />
                        </Container>
                    </Route>

                    <Route exact path="/arrival">
                        <Container fluid>
                            <Arrival />
                        </Container>
                    </Route>

                    <Route exact path="/tracking">
                        <Container fluid>
                            <Tracking />
                        </Container>
                    </Route>

                    <Route exact path="/routes">
                        <Container fluid>
                            <Routes />
                        </Container>
                    </Route>

                    <Route exact path="/registeredparents">
                        <Container fluid>
                            <RegisteredParents />
                        </Container>
                    </Route>

                    <Route exact path="/personnelselection">
                        <Container fluid>
                            <PersonnelSelection />
                        </Container>
                    </Route>

                    <Route exact path="/fleettracking">
                        <Container fluid>
                            <FleetTracking />
                        </Container>
                    </Route>

                    <Route exact path="/studentlist">
                        <Container fluid>
                            <StudentList />
                            </Container>
                    </Route>

                    <Redirect to="/signup" />
                </Switch>
            </Router>
        </AuthContext>
    );
}

export default App;