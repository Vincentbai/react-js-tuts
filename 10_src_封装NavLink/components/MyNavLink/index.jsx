import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {

  //! {...this.props} 将接收到所有参数都传递到自定义的组件中
  //! <MyNavLink>Hello</MyNavLink> 这个写法是可以将 Hello 当做 children 传递到 MyNavLink 中
  //! this.props.children = 'Hello'
  
  render() {

    return (
      <NavLink activeClassName="customActive" className="list-group-item" {...this.props}/>
    )

  }
}
