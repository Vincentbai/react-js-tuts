import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false,
  }

  // 需要传递数据，所以需要高级函数，如果是非高阶函数，初始化时会被直接运行
  handleMouse = (flag) =>{
    return () =>{
      this.setState({mouse: flag})
    }
  }

  //! 高阶函数的写法
  handleCheckbox = (id) =>{
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  //! 非高阶函数的写法
  handleDelete = (id) =>{

    const {deleteTodo} = this.props

    deleteTodo(id)
  }

  render() {

    const {id, name, isDone} = this.props
    const {mouse} = this.state

    return (
      <li 
        style={{backgroundColor: mouse ? '#ddd' : 'white'}} 
        onMouseEnter={this.handleMouse(true)} 
        onMouseLeave={this.handleMouse(false)}
      >
				<label>
          {/* defaultChecked 后期会有bug: defaultChecked只有第一次有效，之后就改不了了，所以需要checked */}
					<input type="checkbox" checked={isDone} onChange={this.handleCheckbox(id)}/> 
					<span>{name}</span>
				</label>
				<button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>Delete</button>
			</li>
    )
  }
}
