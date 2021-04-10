import React from "react";

import { Route, Switch } from "react-router-dom";

import Login from "../Login/Login";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

function RouteTree() {
    return (
        <Switch>
            <Route exact path={"/"} component={Login}/>
            <Route exact path={"/register"} component={RegistrationForm}/>
        </Switch>
    );
}

export default RouteTree;