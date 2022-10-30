import React, { Component } from "react";
class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  render() {
    return (
      <div className="BrokenClick">
        <h1>{this.state.clicked ? "Clicked! successfully" : "not clicked"}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default BrokenClick;
