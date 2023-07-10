import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/Home'   // 路由组件
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件
import MyNavLink from './components/MyNavLink' // 一般组件

//! 路由组件和一般组件的主要区别是接收到更多的路由相关的props
/**
 *history: 
    action: "PUSH"
    block: ƒ block(prompt)
    createHref: ƒ createHref(location)
    //! go:ƒ go(n)
    //! goBack: ƒ goBack()
    //! goForward: ƒ goForward()
    length: 5
    listen: ƒ listen(listener)
    location: {pathname: '/about', search: '', hash: '', state: undefined, key: 'd0uudc'}
    //! push: ƒ push(path, state)
    //! replace: ƒ replace(path, state)
    [[Prototype]]: Object
  location: 
    hash: ""
    key: "bgpzj1"
    //! pathname: "/about"
    //! search: ""
    //! state: undefined
    [[Prototype]]: Object
  match: 
    //! isExact: true 
    //! params: {}
    //! path: "/about"
    //! url: "/about"
    [[Prototype]]: Object
  staticContext: undefined
 */

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
                {/* //! 默认的是模拟查询，导航栏可以多给，如果包含被注册的路由(只匹配开头)，就可以匹配上；但是少给就匹配不上 */}
                {/* //! <Route exact /> 开启路由的严格匹配，严格匹配不能随便开，如果很多路径都往一个组件跳，才考虑严格匹配，因为开启严格匹配无法继续匹配二级路由 */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  <Switch>
                    <Route extre path="/home" component={Home} /> 
                    <Route extre={true} path="/about" component={About} />
                    <Redirect to="/home"/> {/* 如果都没有匹配上，就走 redirect  */}
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
