import React, {Component} from 'react'
import helloCSS from './index.module.css' // 如果使用less，就不需要这么写

export default class Hello extends Component{
  render(){
    return(
      <h2 className={helloCSS.title}>
        Hello React!!!
      </h2>
    )
  }
}