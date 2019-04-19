import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import Easter from '../Easter/Easter';
import SecretStory from '../secretStory/SecretStory'

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/Easter' component={Easter}/>
      <Route exact path='/secretStory' component={SecretStory} />
    </Switch>
  );
}