import React, { Component } from 'react'

const fakeDetailDate = [
  {id:'01', content: 'Hello World'},
  {id:'02', content: 'Hello Austarlia'},
  {id:'03', content: 'Hello Asia'},
]

export default class Detail extends Component {


  render() {

    const {id, title} = this.props.match.params
    const matchedData = fakeDetailDate.find(fd=> fd.id === id)

    return (
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {matchedData && matchedData.content}</li>
      </ul>
    )
  }
}
