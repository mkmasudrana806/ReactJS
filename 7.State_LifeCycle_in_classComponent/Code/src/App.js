import "./App.css";
import Clock from "./components/Clock";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock locale="bn-BD" />
        <Form />
      </header>
    </div>
  );
}

export default App;
