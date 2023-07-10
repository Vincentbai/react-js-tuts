// 引入react核心库
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, HashRouter} from 'react-router-dom'

// 引入App组件
import App from './App'

//! webpack中开启 devServer 运行前端项目，devServer 将 public 文件夹作为前端项目的根路径
//! 前端路径请求时，如果没有找个相对应的文件，就会返回 index.html

// 渲染App组件到页面
ReactDOM.render(
  // 将整个App包裹成一个路由
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,document.getElementById('root')
)