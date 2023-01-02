import React, { Component } from 'react'

export class SetState extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  changeCount() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {console.log(this.state.count)})
    // console.log(this.state.count)
    this.setState((prevState) => ({
      count: prevState.count + 1  
    }))
  }
 
  incrementFive(){
    this.changeCount()
    this.changeCount()
    this.changeCount()
    this.changeCount()
    this.changeCount()
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>increase count</button>
      </div>
    )
  }
}

export default SetState