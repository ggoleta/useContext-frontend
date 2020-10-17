import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
