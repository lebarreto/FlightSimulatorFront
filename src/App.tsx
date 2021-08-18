import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import AircraftPlans from "./pages/AircraftPlans";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/aircraftplans" component={AircraftPlans} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
