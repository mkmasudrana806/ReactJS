const toCelcius = (farenheit) => {
  return ((farenheit - 32) * 5) / 9;
};

const toFarenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const convert = (tem, convertTo) => {
  const input = parseFloat(tem);
  if (Number.isNaN(input)) return "";
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export { toCelcius, toFarenheit, convert };
