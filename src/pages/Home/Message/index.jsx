import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      {id: '01', title: 'message1'},
      {id: '02', title: 'message2'},
      {id: '03', title: 'message3'},
    ]
  }

  render() {

    const {messageArr} = this.state

    return (
      <div>
        <ul>
          {
            messageArr.map(ma => {
              return (
                  <li key={ma.id}>
                    {/* <a href={`/${ma.title}`}>{ma.title}</a>&nbsp;&nbsp; */}
                    {/* <Link to={`/home/message/${ma.title}`}>{ma.title}</Link> //! 自己写的错误示范 */}
                    <Link to={`/home/message/detail/${ma.id}/${ma.title}`}>{ma.title}</Link> {/* //! 1. 通过params来传递参数 */}
                  </li>
              )
            })
          }
        </ul>
        <hr />
          <Route path="/home/message/detail/:id/:title" component={Detail} /> {/* //! 1. 通过冒号来接收params的参数 */}
      </div>
    )
  }
}
