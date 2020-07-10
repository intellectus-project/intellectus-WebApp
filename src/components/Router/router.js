import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Users from '../pages/Users/Users';

import PrivateRoute from './PrivateRoute';

const routesConfig = [
  { path: '/login', component: Login, requireAuthentication: false },
  { path: '/users', component: Users, requireAuthentication: true },
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
