import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
//Components
import "./assets/semantic/dist/semantic.min.css";
import { Dashboard } from "./Shared/Dashboard/Dashboard";
import MainHeader from "./Shared/Navigation/MainHeader";
import { DropOff } from "./Parent/DropOff";
import { Account } from "./Shared/Account/Account";
import SignUp from "./Shared/Auth/SignUp";
import LogIn from "./Shared/Auth/LogIn";
import { RegisterStudent } from "./Parent/RegisterStudent";
import { MapSelection } from "./Parent/MapSelection";
import { Arrival } from "./Parent/Arrival";
import { Tracking } from "./Parent/Tracking";
import { Routes } from "./Driver/Routes";
import { RegisterParents } from "./School/RegisterParents";
import { RegisterDrivers } from "./School/RegisterDrivers";
import { RegisterMonitors } from "./School/RegisterMonitors";
import { PersonnelSelection } from "./School/PersonnelSelection";
import { FleetTracking } from "./School/FleetTracking";
import { StudentList } from "./Monitor/StudentList";
import { AuthProvider } from "./Shared/Auth/AuthContext";
import PrivateRoute from "./Shared/Auth/PrivateRoute";
import {RegisterAdmins} from "./School/RegisterAdmins";
import {LocationDeadline} from "./School/LocationDeadline";
import {RegisterBus} from "./School/RegisterBus";
import {AddStudent} from "./School/RegisterStudents";


const App = () => {

    return (
        <Router>
            <AuthProvider>

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

                    <PrivateRoute exact path="/dashboard" component={ Dashboard } />

                    <PrivateRoute exact path="/account" component={ Account } />

                    <PrivateRoute exact path="/registerstudent" component={ RegisterStudent } />

                    <PrivateRoute exact path="/dropoff" component={ DropOff } />

                    <PrivateRoute exact path="/mapselection" component={ MapSelection } />

                    <PrivateRoute exact path="/arrival" component={ Arrival } />

                    <PrivateRoute exact path="/tracking" component={ Tracking } />

                    <PrivateRoute exact path="/routes" component={ Routes } />

                    <PrivateRoute exact path="/registerparents" component={ RegisterParents } />

                    <PrivateRoute exact path="/registerdrivers" component={ RegisterDrivers } />

                    <PrivateRoute exact path="/registermonitors" component={ RegisterMonitors } />

                    <PrivateRoute exact path="/registeradmins" component={ RegisterAdmins } />

                    <PrivateRoute exact path="/registerbus" component={ RegisterBus } />

                    <PrivateRoute exact path="/addstudent" component={ AddStudent } />

                    <PrivateRoute exact path="/personnelselection" component={ PersonnelSelection } />

					<PrivateRoute exact path="/locationdeadline" component={ LocationDeadline } />

					<PrivateRoute exact path="/fleettracking" component={ FleetTracking } />

                    <PrivateRoute exact path="/studentlist" component={ StudentList } />

                    <Redirect to="/signup" />

                </Switch>

            </AuthProvider>
        </Router>
    );
}

export default App;