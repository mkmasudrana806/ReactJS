import "./App.css";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock locale="bn-BD" />
        <Form />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
