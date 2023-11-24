import React from "react";

class Clock extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
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
