import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink';
import Message from './Message';
import News from './News';


export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
          {/* //! 注册的匹配顺序是按照路由的注册顺序进行的，所有二级路由都会先去一级注册路由处进行模糊配置，在回到二级注册路由处进行匹配*/}
            <li>
              <MyNavLink to='/home/news' >News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message' >Message</MyNavLink>
            </li>
          </ul>

          {/* //! 注册二级路由的时候，需要加上一级路由的 path 值*/}

          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>

        </div>

      </div>
    )
  }
}
