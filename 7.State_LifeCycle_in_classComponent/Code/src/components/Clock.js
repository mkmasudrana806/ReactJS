import React from "react";

class Clock extends React.Component {
  // constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   };
  // }

  state = { date: new Date() };
  // called this method when UI is showed
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  // clear the mount of the component
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  // tick mehtod seperately to change the date state
  tick() {
    this.setState({ date: new Date() });
  }



  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}
export default Clock;
