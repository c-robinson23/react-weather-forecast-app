import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <footer>
          This project was coded by
          <a
            href="https://github.com/c-robinson23"
            target="_blank"
            rel="noreferrer"
          >
            Candace Robinson
          </a>
          , is
          <a
            href="https://github.com/c-robinson23/react-weather-forecast-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
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
  );
}

export default App;
