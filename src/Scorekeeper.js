import React, { Component } from "react";
class Scorekeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.doubleKill = this.doubleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
    this.reset = this.reset.bind(this);
  }

  //   singleKill() {
  //     this.setState({ score: this.state.score + 1 });
  //   }

  //   doubleKill() {
  //     this.setState({ score: this.state.score + 1 });
  //     this.setState({ score: this.state.score + 2 });
  //     this.setState({ score: this.state.score + 2 });
  //   }

  incrementScore(currState) {
    return { score: currState.score + 1 }; //this is the preferred way of changing the state
  }

  singleKill() {
    this.setState(this.incrementScore);
  }
  doubleKill() {
    for (let i = 0; i < 2; i++) {
      //running a loop to iterate it over and over again.
      this.setState(this.incrementScore);
    }
  }

  tripleKill() {
    for (let i = 0; i < 3; i++) {
      this.setState(this.incrementScore);
    }
  }
  reset() {
    this.setState({ score: 0 });
  }
  render() {
    return (
      <div>
        <h1>Score {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.doubleKill}>Double Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
        <button onClick={this.reset}>Reset!</button>
      </div>
    );
  }
}
export default Scorekeeper;
