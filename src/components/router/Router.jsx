import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
    </Switch>
  );
}