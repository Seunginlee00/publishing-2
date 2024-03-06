import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './page/LoginPage';
import { HomePage } from './page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;