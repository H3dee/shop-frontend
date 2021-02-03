import { Switch, Route, Redirect } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage/index";
import HomePage from "./pages/HomePage/index";
import ShopCart from "./pages/ShopCartPage/index";

export const routes = (
  <Switch>
    <Route component={HomePage} path="/home" exact />
    <Route component={CategoryPage} path="/category/:name" />
    <Route component={ShopCart} path="/cart" exact />
    <Route component={ProductPage} path="/product/:id" />
    <Redirect to="/home" />
  </Switch>
);
