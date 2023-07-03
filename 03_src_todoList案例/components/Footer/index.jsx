import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	state = {
		doneCount: 0,
		totalCount: 0,
	}

	handleCheckAll=(event)=>{

		const {handleAllCheck} = this.props

		handleAllCheck(event.target.checked)

	}

	handleClearAllDone = () =>{

		this.props.clearAllDone()

	}
	
  render() {
		
		const {todos} = this.props
		
		const doneCount = todos.reduce((acc, cur)=> acc + (cur.isDone ? 1 : 0), 0)
	
		const totalCount = todos.length
		
    return (
      <div className="todo-footer">
				<label>
					<input type="checkbox" checked={doneCount === totalCount && totalCount !== 0 ? true : false} onChange={this.handleCheckAll}/>
				</label>
				<span>
					<span>Done {doneCount}</span> / Total {totalCount}
				</span>
				<button className="btn btn-danger" onClick={this.handleClearAllDone}>Delete all finished Tasks</button>
			</div>
    )
  }
}
