import React, { Component } from "react";

class CalculatorDisplay extends Component {
  render() {
    let { result } = this.props;
    return (
      <div class="card">
        <div className="result">
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
