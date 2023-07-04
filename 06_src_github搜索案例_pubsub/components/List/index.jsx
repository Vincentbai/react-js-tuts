import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users:[],
    isFirst: true,
    isLoading: false,
    errMsg: '',
  }

  componentDidMount(){
    this.token = Pubsub.subscribe('updateList', ( _, stateObj)=>{

      this.setState(stateObj)

    })
  }

  componentWillUnmount(){

    Pubsub.unsubscribe(this.token)

  }

  render() {

    const {users, isFirst, isLoading, errMsg} = this.state

    return (
      <div className="row">
        {
          isFirst && <h2> Please enter the username to search on github...</h2> ||
          isLoading && <h2>loading... </h2> ||
          errMsg && <h2>{errMsg}</h2> ||
          users.map(user => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel='noreferrer'>
                  <img alt='profile' src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
