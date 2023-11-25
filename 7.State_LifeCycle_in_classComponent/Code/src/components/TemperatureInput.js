import React from "react";
const scaleName = {
  c: "Celcius",
  f: "Farenheit",
};

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleName[scale]}: </legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}

export default TemperatureInput;
