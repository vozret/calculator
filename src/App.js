import React from "react";
import "./App.css";
import CalculatorLayout from "./components/CalculatorLayout";

import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: "nula"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Calculator</p>
        </header>
        <main>
          <CalculatorLayout result={this.state.result} />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
