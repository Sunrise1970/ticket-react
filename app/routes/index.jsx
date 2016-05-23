import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Bill } from '../containers';

export default (
  <Route path="/" component={App}>
    <Route path="bill/:keyword" component={Bill} />
    <IndexRoute component={Home} />
  </Route>
)