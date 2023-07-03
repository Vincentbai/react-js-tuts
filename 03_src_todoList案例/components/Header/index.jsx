import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  // 对于接收的props进行类型和必要性的验证
  static propTyps = {

    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,

  }

  // 可控组件, 不需要通过 ref 来获取值，因为绑定事件的元素和需要操作的元素是同一个元素，所有不使用ref来
  handleKeyUp = (event) =>{

    const {keyCode, target} = event

    if(keyCode !== 13) return

    if(target.value.trim() === '') return alert('Please enter the new task name')

    const todoObj = {
      id: nanoid(),
      name: target.value,
      done: false,
    }

    // 将 todoObj 传递给 app
    this.props.addTodo(todoObj)

    // 清空输入
    target.value = ''

  }

  render() {
    return (
      <div className="todo-header">
				<input type="text" onKeyUp={this.handleKeyUp} placeholder="Please enter the new task, and press enter to confirm"/>
			</div>
    )
  }
}
