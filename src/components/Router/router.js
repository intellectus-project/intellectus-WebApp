import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Error404 from '../pages/Error404/Error404';

import PrivateRoute from "./PrivateRoute";

const routesConfig = [
  { path: "/login", component: Login, requireAuthentication: false },
  { path: "/users", component: Users, requireAuthentication: true },
  { path: "/dashboard", component: Dashboard, requireAuthentication: true },
  { component: Error404, requireAuthentication: false }
];

export const Router = () => {
  const routes = routesConfig.map((route, index) => (
    <PrivateRoute key={index} {...route} />
  ));
  return (
    <div className="AppContainer">
      <div className="MainContent">
        <div>
          <BrowserRouter>
            <Switch>{routes}</Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};
