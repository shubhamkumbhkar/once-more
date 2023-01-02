import React, { Component } from 'react'

export class ControlledComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      comment: "",
      value: "react",
    }
  }

  handleNameValue = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCommentValue = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleTopicValue = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.name}   ${this.state.comment}   ${this.state.value}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.name} onChange={this.handleNameValue} />
        </div>
        <div>
          <label>Comment</label>
          <textarea type="text" value={this.state.comment} onChange={this.handleCommentValue} />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.value} onChange={this.handleTopicValue}>
            <option value="react">React</option>
            <option value="ror">Ruby on Rails</option>
            <option value="java">java</option>
          </select>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default ControlledComponent