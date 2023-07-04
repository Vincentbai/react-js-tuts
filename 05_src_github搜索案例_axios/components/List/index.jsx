import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {

    const {users, isFirst, isLoading, errMsg} = this.props

    return (
      <div className="row">
        {
          // ! 不是使用 if（）jsx里面只能写表达式，可以通过三元表达式来写
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
