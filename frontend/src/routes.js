import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pages from './pages';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ pages.Home }/>
      <Route exact path="/services" component={ pages.Services }/>
      <Route exact path="/services/all-services" component={ pages.AllServices }/>
      <Route exact path="/orders" component={ pages.Orders }/>
    </Switch>
  )
}

export default Routes;
