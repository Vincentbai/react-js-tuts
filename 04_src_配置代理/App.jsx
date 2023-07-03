import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  
  //! 跨域的本质是 ajax 引擎 给拦截住了，通过代理服务器可以解决，代理服务器不是通过ajax引擎驱动的
  /**
   * 在 react 中有两种方式开启代理服务器
   * 1. 在 package.json 中：设置 "proxy": "http://localhost:5000"
   *    这个方法的问题是，只能访问一台后端服务，访问顺序是 public -> 后端 5000 端口的服务器，所有在public路径下找不到的请求，都会转到5000端口，
   *    如果想从另外一台 5002 端口的服务器上请求数据就办不到了
   * 2. 创建 setupProxy.js 在这个文件中可以配置多个后端访问地址，解决了第一个方法的问题
   */
  
  getUsersData = ()=>{
    axios.get('http://localhost:3002/students').then(
      response=>{console.log("Success!", response.data)},
      error => {console.log('Failed!', error)}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsersData}>Get Users</button>
      </div>
    )
  }
}
