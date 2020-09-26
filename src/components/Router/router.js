import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Users from '../pages/Users/Users';
import EditUser from '../pages/EditUser/EditUser';
import CreateUser from '../pages/CreateUser/CreateUser';
import Error404 from '../pages/Error404/Error404';
import Operators from '../pages/Operators/Operators';
import PrivateRoute from "./PrivateRoute";
import ParticularCall from "../pages/ParticularCall/ParticularCall";

const routesConfig = [
  { path: '/login', component: Login, requireAuthentication: false },
  { path: '/administration', component: Users, requireAuthentication: true },
  { path: '/dashboard', component: Dashboard, requireAuthentication: true },
  { path: '/edit-user', component: EditUser, requireAuthentication: true },
  { path: '/create-user', component: CreateUser, requireAuthentication: true },
  { path: '/operadores', component: Operators, requireAuthentication: true },
  { path: '/', component: Dashboard, requireAuthentication: true, exact: true },
  { path: '/call', component: ParticularCall, requireAuthentication: true },
  { component: Error404, requireAuthentication: false }
];

export const Router = () => {
  const routes = routesConfig.map((route, index) => <PrivateRoute key={index} {...route} />);
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
