import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>Home</h1>} />
      </Switch>
    </BrowserRouter>
  );
};
