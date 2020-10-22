import React from "react";

import Button from './Button';

class CalculatorLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      result: '',
    }
  }

  handleClick(button) {
    if(button === "=") {
      console.log("you pressed the equal sign")
    } else if (button === "AC") {
      this.setState({
        result: ""
      });
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  }

  renderButton(value) {
    let className = "calculator-button";
    if (value === '='){
      className += ' equal-sign';
    }else if(value === 'AC') {
      className += ' delete-key';
    } 
    else if(isNaN(value)) {
      className += ' function-key';
    }
    return(
      <Button name={value} className={className} onClick={() => this.handleClick(value)}/>
    );
  }

  render() {
    return (
      <div className="calculator-layout">
        <input type="text" className="calculator-display" value={this.state.result} />
        <div className="calculator-keys" >
          {this.renderButton("+")}
          {this.renderButton("-")}
          {this.renderButton("X")}
          {this.renderButton("/")}

          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}

          {this.renderButton("0")}
          {this.renderButton(".")}
          {this.renderButton("AC")}

          {this.renderButton("=")}
        </div>
      </div>
    );
  }
}

export default CalculatorLayout;
