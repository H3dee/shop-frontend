import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/HomePage";

export const routes = (
  <Switch>
    <Route component={MainPage} path="/home" exact />
    <Redirect to="/home" />
  </Switch>
);
