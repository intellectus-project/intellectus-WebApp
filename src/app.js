import React from 'react';
import { Router } from './components/Router/router';
import { UserProvider } from './services/providers/user-context';

const App = () => (
  <UserProvider>
    <div className="App">
      <Router />
    </div>
  </UserProvider>

);

export default App;
