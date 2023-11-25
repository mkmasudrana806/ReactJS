function Boiling({ celcius }) {
  if (celcius > 100) return <p>The water would boiled</p>;
  else return <p>The water would not boiled</p>;
}

export default Boiling;
