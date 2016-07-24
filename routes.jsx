import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'

import Application from './components/app'
import NotFound from './components/404'
import Pills from './components/pills'
import Spinner from './components/Spinner'

module.exports = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="pills" component={Pills} />
      <Route path="spinners" component={Spinner} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}
