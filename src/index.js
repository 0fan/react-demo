import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import reducers from './reducer'
import Auth from './auth'
import Dashboard from './dashboard'

const store = createStore(reducers, compose (
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

console.log(store.getState())

// 登录
// 没有登录信息.统一跳转到login
// 页面 导航 显示 注销
// 一营
// 二营
// 骑兵连
// router + redux
ReactDom.render((
  <Provider store = { store }>
    <BrowserRouter>
      <Switch>
        <Route path = '/login' component = { Auth }></Route>
        <Route path = '/dashboard' component = { Dashboard }></Route>
        <Redirect to = '/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))