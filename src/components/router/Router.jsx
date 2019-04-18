import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomagePage/HomePage';
import Easter from '../Easter/Easter';

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/Easter' component={Easter}/>
    </Switch>
  );
}