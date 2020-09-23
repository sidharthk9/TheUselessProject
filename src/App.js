import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
//Components
import "./assets/semantic/dist/semantic.min.css";
import Dashboard from "./Home/Dashboard";
import MainHeader from "./Shared/Navigation/MainHeader";
import PickUp from "./Parent/PickUp";
import Routes from "./Bus/Routes";

function App() {

    return (
        <Router>
            <MainHeader />
            <Switch>

                <Route path="/" exact>
                    <Segment attached='bottom'>
                        <Dashboard />
                    </Segment>
                </Route>

                <Route path="/parent">
                    <Segment attached='bottom'>
                        <PickUp />
                    </Segment>
                </Route>

                <Route path="/route">
                    <Segment attached='bottom'>
                        <Routes />
                    </Segment>
                </Route>

                <Redirect to="/" />

            </Switch>
        </Router>
    );
}

export default App;