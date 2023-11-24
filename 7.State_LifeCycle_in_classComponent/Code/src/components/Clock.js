import React from "react";

class Clock extends React.Component {
  // constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   };
  // }

  state = { date: new Date(), locale: "bn-BD" };
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

  // event handler for clock button
  handleClockButtonClick(parameter) {
    this.setState({ locale: "en-US" });
  }

  // lifecycle hook to control render
  shouldComponentUpdate(nextProps) {
    const { change: currentChange } = this.props;
    const { change: nextChange } = nextProps;
    if (currentChange === nextChange) return false;
    else return true;
  }
  render() {
    const { date, locale } = this.state;
    return (
      <>
        <h1 className="heading">
          <span className="text">
            {this.state.date.toLocaleTimeString(this.state.locale)}
          </span>
        </h1>
        <button onClick={() => this.handleClockButtonClick("en-US")}>
          click me EN Timer
        </button>
      </>
    );
  }
}
export default Clock;

// // this keywords problem and solution: use bind() method
// const javascript = {
//   name: "javascript",
//   libraries: ["javascript", "react", " node"],
//   printLibraries: function () {
//     this.libraries.forEach(
//       function (library) {
//         console.log(`${this.name} loves ${library}`);
//       }.bind(this)
//     );
//   },
// };
