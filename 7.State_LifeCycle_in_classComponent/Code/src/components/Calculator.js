import React from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelcius, toFarenheit } from "../lib/convertTemp";

class Calculator extends React.Component {
  state = { temperature: "", scale: "c" };
  handleChange = (e, scale) => {
    this.setState({ temperature: e.target.value, scale: scale });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelcius) : temperature;
    const farenheit =
      scale === "c" ? convert(temperature, toFarenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={farenheit}
          onTemperatureChange={this.handleChange}
        />
        <Boiling celcius={temperature} />
      </div>
    );
  }
}

export default Calculator;
