import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos:[
      {
        id: '001',
        name: "Eating",
        isDone: true,
      },
      {
        id: '002',
        name: "Sleeping",
        isDone: true,
      },
      {
        id: '003',
        name: "Studying",
        isDone: false,
      },
      {
        id: '004',
        name: "Shoping",
        isDone: false,
      },
    ]
  }

  // 该方法用于传递给子组件调用，将子组件的数据传递给父组件
  addTodo = (todoObj) =>{

    // 获取原todo
    const {todos} = this.state

    // 添加新todo
    const newTodos = [todoObj, ...todos]

    // 更新状态
    this.setState({todos: newTodos})

  }

  updateTodo = (id, isDone) =>{

    const {todos} = this.state
    
    const newTodos = todos.map(todo => {
      return todo.id === id && {...todo, isDone} || todo
    })

    this.setState({todos: newTodos})
    
  }

  deleteTodo = (id) =>{

    const {todos} = this.state

    const newTodos = todos.filter(td => td.id !== id)

    this.setState({
      todos: newTodos,
    })

  }

  handleAllCheck =(isDone)=>{

    const {todos} = this.state

    const newTodos = todos.map(todo=>{

      return {...todo, isDone}
      
    })

    this.setState({
      todos: newTodos,
    })
  }

  clearAllDone = ()=>{
    
    const {todos} = this.state

    const newTodos = todos.filter(todo=>{
      return !todo.isDone
    })

    this.setState({
      todos: newTodos,
    })

  }


  render() {

    const {todos} = this.state

    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} handleAllCheck={this.handleAllCheck} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
