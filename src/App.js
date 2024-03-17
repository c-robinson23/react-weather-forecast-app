import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <header className="App-header">
          <Weather />
          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/c-robinson23"
              target="_blank"
              rel="noreferrer"
            >
              Candace Robinson
            </a>
            , is{" "}
            <a
              href="https://github.com/c-robinson23/react-weather-forecast-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://aesthetic-ganache-13d759.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
