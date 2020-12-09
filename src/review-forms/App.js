import React, { Component } from "react";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { title: 'REACT', input2: 'Name 3', input3: 'tom' }
  }
  onInputChange = (event) => {
    this.setState({title: event.target.value})
  }
  onInputChange1 = (event) => {
    this.setState({input2: event.target.value})
  }
  onInputChange2 = (event) => {
    this.setState({input3: event.target.value})
  }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.input2}</h1>
                <h1>{this.state.input3}</h1>
                <input type="text" onChange={this.onInputChange} />
                <input type="text" onChange={this.onInputChange1} />
                <input type="text" onChange={this.onInputChange2} />
            </div>
        )
    }
}