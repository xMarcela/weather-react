import React from "react";
import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <footer>
        <p>
          <a href="https://github.com/xMarcela/weather-react" target="_blank">Open-source code</a> by A. Marcela Ravn
        </p>
      </footer>
    </div>
  );
}

export default App;
