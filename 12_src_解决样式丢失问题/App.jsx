import React, { Component } from 'react'
import {Link, Route, NavLink, Switch} from 'react-router-dom'
import Home from './pages/Home'   // 路由组件
import About from './pages/About' // 路由组件
import Test from './pages/Test' // 路由组件
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
            <div> MyNavLink 封装 NavLink 来复用代码</div>
            <div className="list-group">
                <MyNavLink to="/xxx/home">Home</MyNavLink>
                <MyNavLink to="/xxx/about">About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                  {/* 注册路由 */}
                  {/* //! 如果不被 Switch 组件包裹，那么 /about 路径会配置两个路由组件，而且两个路由组件都会显示出来
                      //! 但是一般来说一个路径只需要匹配一个路由组件就可以，Switch 可以让路由器匹配到一个路由组件后就停止工作，提高效率 （单一匹配）
                  */}
                  <Switch>
                    <Route path="/xxx/home" component={Home} /> 
                    <Route path="/xxx/about" component={About} />
                    <Route path="/xxx/about" component={Test} />
                  </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
