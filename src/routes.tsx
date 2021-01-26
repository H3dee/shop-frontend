import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/index";
import HomePage from "./pages/HomePage/index";

export const routes = (
  <Switch>
    <Route component={HomePage} path="/home" exact />
    <Route component={CategoryPage} path='/category/:name/:id'/>  
    <Redirect to="/home" />
  </Switch>
);
