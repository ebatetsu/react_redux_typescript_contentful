import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import './assets/css/index.scss'

import routes from './routes'
import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
  , document.getElementById('root')
)

serviceWorker.unregister()
