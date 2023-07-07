import React, { Component } from 'react'
import {Link, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'   // 路由组件
import About from './pages/About' // 路由组件
import Header from './components/Header' // 一般组件

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
            <div> Link 组件没有高亮效果</div>
            <div className="list-group">
              {/* 在原生的html中，跳转靠 <a> 标签*/}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在 React 中靠路由链接来切换组件--编写路由链接 */}
                <Link className="list-group-item" to="/home">Home</Link>
                <Link className="list-group-item" to="/about">About</Link>
            </div>
            <div> NavLink 组件有高亮效果</div>
            <div className="list-group">
                <NavLink activeClassName="customActive" className="list-group-item" to="/home">Home</NavLink>
                <NavLink activeClassName="customActive" className="list-group-item" to="/about">About</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                  <Route path="/home" component={Home} /> 
                  <Route path="/about" component={About} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
