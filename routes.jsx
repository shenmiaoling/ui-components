import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'

import Application from './components/app'
import NotFound from './components/404'

module.exports = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}
