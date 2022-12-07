import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chicago" />
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.emmelineocampo.me/"
            target="_blank"
            rel="noreferrer"
          >
            Emmeline Ocampo
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/EmmeRox/weather-react-final"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
