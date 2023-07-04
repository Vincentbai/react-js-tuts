import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  /**
   * !gitHub 通过后端服务器设置 cors 来解决跨域问题，但是上线的项目一般都不使用cors，防止恶意访问
   */

  search = () =>{

    const {keywordElement: {value}} = this
    const {updateAppState} = this.props

    updateAppState({isFirst: false, isLoading: true})
    
    // 获取用户的请求在输入框中
    // 发送网络请求，获取数据
    // axios.get(`http://localhost:3002/api1/search/users?q=${value}`).then( //! 给本机同样的的端口发送请求，可以省略本机地址和端口后
    axios.get(`/api1/search/users?q=${value}`).then(
      response=>{
        updateAppState({isLoading: false, users: response.data.items})
      },
      error => {
        updateAppState({isLoading: false, errMsg: error.message})
      }
    )
    
  }
  
  //! onKeyUp 的 event 中有 keyCode的属性，onChange 这个回调函数中没有 keyCode的属性
  handleOnKeyUp = (event) =>{
    
    if(event.keyCode !== 13) return
    
    const {keywordElement: {value}} = this
    console.log(value)
    
  }
  
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onKeyUp={event => this.handleOnKeyUp(event)} ref={c=>this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
