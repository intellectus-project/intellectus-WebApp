import React from 'react';
import { Router } from './components/Router/router';
import { UserProvider } from './services/providers/user-context';
import { LinkProvider } from './services/providers/prev-link';

import './App.scss';

const App = () => (
  <UserProvider>
    <LinkProvider>
    <div className="App">
      <Router />
    </div>
    </LinkProvider>
  </UserProvider>

);

export default App;
