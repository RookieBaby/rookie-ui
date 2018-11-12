import {Redirect, Router} from '@reach/router'
import NProgress from 'nprogress'
import React from 'react'
import ReactDOM from 'react-dom'
import Imported, {whenComponentsReady} from 'react-imported-component'
import Chrome from './apps/Chrome'
import App from './apps/index'

const asyncComponent = path => Imported(() => {
  NProgress.start()
  whenComponentsReady().then(() => NProgress.done())
  return import(`./apps/${path}` /* webpackChunkName: 'chunk-[request][index]' */)
})

const Intro = () => React.createElement(asyncComponent('Intro'))
const Start = routeProps => React.createElement(asyncComponent(`Start`), {routeProps: routeProps})
const Color = () => React.createElement(asyncComponent('Color'))
const Font = () => React.createElement(asyncComponent('Font'))
const Changelog = () => React.createElement(asyncComponent('Changelog'))
const Dox = routeProps => React.createElement(asyncComponent(`Chrome/dox/${routeProps.component}.doc`))
const NotFound = () => React.createElement(asyncComponent('NotFound'))

ReactDOM.render((
  <Router>
    <App path="/">
      <Chrome path="/">
        <Intro path="/intro" />
        <Start path="/start/:step" />
        <Color path="/color" />
        <Font path="/font" />
        <Changelog path="/changelog" />
        <Dox path="/components/:component" />
      </Chrome>
      <Redirect noThrow from="/" to="/intro" />
      <NotFound default />
    </App>
  </Router>
), document.getElementById('app'))