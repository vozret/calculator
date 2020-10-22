import React from "react";
import "./App.css";
import CalculatorLayout from "./components/CalculatorLayout";

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Calculator</p>
      </header>
      <main>
        <CalculatorLayout />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
