import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parent: "This is parent"
    }
    this.greet = this.greet.bind(this)
  }
  greet(para) {
    alert(`Hi ${this.state.parent} got ${para}`)
  }
  
  render() {
    return (
      <div><Child greet= {this.greet}/></div>
    )
  }
}

export default Parent