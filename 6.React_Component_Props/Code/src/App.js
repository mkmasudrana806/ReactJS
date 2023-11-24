import React from "react";
import "./App.css";

// class component
class Clock extends React.Component {
  // never change the props inside of a component
  // this.props.local='bn-EN';
  render() {
    return (
      <h1 className="heading">
        <span>{this.props.children}</span>
        <span> Hellow {new Date().toLocaleDateString(this.props.local)}</span>
      </h1>
    );
  }
}

<Clock local="bn-BD">this a string inside a component a children</Clock>;

// access class component by creating a new instance of the component
const clock = new Clock();
clock.print();

// below is functional component
function App({ local }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>masud rana inside div and header is mainly a react element</h2>
      </header>
    </div>
  );
}

<App local="bd-880" />;

export default App;
