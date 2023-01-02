import React, { Component } from 'react'

export class State extends Component {
  constructor(){
    super()
    this.state = {
      message: "Don't press the button"
    }
  }

  changeMessage() {
    console.log(this.state.message)
    this.setState({
      message: "WHY DID YOU PRESSED THE BUTTON"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>DON'T</button>
      </div>
    )
  }
}

export default State