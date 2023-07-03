import React, {Component} from 'react'
import welcomeCSS from './index.module.css'

export default class Welcome extends Component {

  render(){

    return (
      <h3 className={welcomeCSS.demo}>Welcome!</h3>
    )
  }

}