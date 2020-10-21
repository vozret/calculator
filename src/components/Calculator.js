import React from "react";
import Square from "./Square";

class Calculator extends React.Component {
  renderSquare(char, typeofchar) {
    return <Square value={char} onClick={this.handleClick} className={typeofchar} />;
  }

  handleClick() {
    console.log("clicked:");
  }

  render() {
    return (
      <div className="calculator-outlook">
        <div className="display">
          <input type="text" className="calculator-screen" value="0" disabled />
        </div>
        <div className="calculator-keys">
          <div className="calculator-row">
            {this.renderSquare(7, "number")}
            {this.renderSquare(8, "number")}
            {this.renderSquare(9, "number")}
            {this.renderSquare("+", "functional")}
          </div>
          <div className="calculator-row">
            {this.renderSquare(4, "number")}
            {this.renderSquare(5, "number")}
            {this.renderSquare(6, "number")}
            {this.renderSquare("-", "functional")}
          </div>
          <div className="calculator-row">
            {this.renderSquare(1, "number")}
            {this.renderSquare(2, "number")}
            {this.renderSquare(3, "number")}
            {this.renderSquare("*", "functional")}
          </div>
          <div className="calculator-row">
            {this.renderSquare(0, "number")}
            {this.renderSquare(".", "functional")}
            {this.renderSquare("AC", "functional")}
            {this.renderSquare("/", "functional")}
          </div>
          <div className="calculator-row equal-sign" >{this.renderSquare("=", "functional")}</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
