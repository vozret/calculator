import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <main>
        <Calculator />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
