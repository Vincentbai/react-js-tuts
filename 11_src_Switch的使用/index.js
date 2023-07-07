// 引入react核心库
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, HashRouter} from 'react-router-dom'

// 引入App组件
import App from './App'

// 渲染App组件到页面
ReactDOM.render(
  // 将整个App包裹成一个路由
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,document.getElementById('root'))