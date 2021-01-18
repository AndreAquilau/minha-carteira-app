import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../layout';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </BrowserRouter>
  );
};
