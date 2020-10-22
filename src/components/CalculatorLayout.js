import React from "react";

import Button from './Button';

class CalculatorLayout extends React.Component {
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
    else {
      console.log(value + ' is a number')
    }
    return(
      <Button value={value} className={className}/>
    );
  }

  render() {
    return (
      <div className="calculator-layout">
        <input type="text" className="calculator-display" value="0" />
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
