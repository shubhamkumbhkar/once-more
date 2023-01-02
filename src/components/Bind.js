import React, { Component } from 'react'

class Bind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Button dikh rha he?" 
    }
    // this.changeMessage = this.changeMessage.bind(this)
  }

  // changeMessage() {
  //   this.setState({
  //     message: "Nahi dabana tha"
  //   })
  // }

  changeMessage = () => {
    this.setState({
      message: "Nahi dabana tha"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage.bind(this)}>Button</button> */}
        {/* <button onClick={() => this.changeMessage()}>Button</button> */}
        {/* <button onClick={this.changeMessage}>Button</button> */}
        <button onClick={this.changeMessage}>Button</button>
      </div>
    )
  }
}

export default Bind