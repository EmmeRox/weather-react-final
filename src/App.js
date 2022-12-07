import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://www.emmelineocampo.me/">Emmeline Ocampo</a> and it is{" "}
          <a href="https://github.com/EmmeRox/weather-react-final">
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
