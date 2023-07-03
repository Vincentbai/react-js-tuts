// 创建外壳组件
import React, {Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建并暴露app
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>  
    )
  }
}

// 默认暴露，不使用分别暴露，因为只暴露出去一个组件
// export default App