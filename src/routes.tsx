import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from './components/template/Layout'
import App from './components/container/App'
import ArticlesShow from './components/container/Articles/Show'

export const Path = {
  app: '/',
  articlesShow: '/articles/:id',
}

const routes = (
  <Layout>
    <Switch>
      <Route exact path={Path.app} component={App} />
      <Route exact path={Path.articlesShow} component={ArticlesShow} />
      <Redirect to={Path.app} />
    </Switch>
  </Layout>
)

export default routes
