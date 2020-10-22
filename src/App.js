import React from "react";
import "./App.css";
import CalculatorLayout from "./components/CalculatorLayout";

import './App.css'

class App extends React.Component {

  render() {
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
}

export default App;
