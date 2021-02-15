// This file is exported to src/App.js
// React required
import React from "react";
import { Route, Switch } from "react-router-dom";
// Containers - Pages
import Home from "./containers/Home";  
import Login from "./containers/Login";   
import NotFound from "./containers/NotFound";
import Register from "./containers/Register";    
import PostNew from "./containers/PostNew";
import PostEdit from "./containers/PostEdit";
import Dashboard from "./containers/Dashboard";
import PostFilter from "./containers/PostFilter";
import PostView from "./containers/PostView"; 
import ResetPassword from "./containers/ResetPassword"; 
import SignupConfirmation from "./containers/SignupConfirmation";
// Components
import AppliedRoute from "./components/AppliedRoute";
// -------------- Application  Begins Bellow ----- ------- //


export default function Routes({ appProps }) {
    return (
        <Switch>

            { /* AppliedRoute - Public & Private accessible links - Start */ }
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />    
            <AppliedRoute path="/filter/:name" exact component={PostFilter} appProps={appProps} />   
            <AppliedRoute path="/view/:id" exact component={PostView} appProps={appProps} />    
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <AppliedRoute path="/register" exact component={Register} appProps={appProps} />
            <AppliedRoute path="/reset" exact component={ResetPassword} appProps={appProps} />
            <AppliedRoute path="/confirmation" exact component={SignupConfirmation} appProps={appProps} />  
            <AppliedRoute path="/postnew" exact component={PostNew} appProps={appProps} />
            <AppliedRoute path="/dashboard" exact component={Dashboard} appProps={appProps} />
            <AppliedRoute path="/postedit/:id" exact component={PostEdit} appProps={appProps} />  
            { /* AppliedRoute - Public & Private accessible links - End */ }

            { /* 404 Page - Start */ }
            <Route component={NotFound} />
            { /* 404 Page - End */}

        </Switch>
    );
}