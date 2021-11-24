import React from 'react';
import './css/calculator.css';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: 0,
    };
  }

  render() {
    const { answer } = this.state;

    return (
      <div className="calculator cols">
        <span className="answer d-flex">
          {answer}
        </span>
        <span className="d-flex row">
          <button type="button" data="ac">AC</button>
          <button type="button" data="pm">
            +
            <small>/</small>
            -
          </button>
          <button type="button" data="%">%</button>
          <button type="button" data="/" className="operator">&divide;</button>
        </span>
        <span className="d-flex row">
          <button type="button" data="7">7</button>
          <button type="button" data="8">8</button>
          <button type="button" data="9">9</button>
          <button type="button" data="x" className="operator">&times;</button>
        </span>
        <span className="d-flex row">
          <button type="button" data="4">4</button>
          <button type="button" data="5">5</button>
          <button type="button" data="6">6</button>
          <button type="button" data="-" className="operator">-</button>
        </span>
        <span className="d-flex row">
          <button type="button" data="1">1</button>
          <button type="button" data="2">2</button>
          <button type="button" data="3">3</button>
          <button type="button" data="+" className="operator">+</button>
        </span>
        <span className="d-flex row">
          <button type="button" data="0" className="zero">0</button>
          <button type="button" data=".">.</button>
          <button type="button" data="=" className="operator">=</button>
        </span>
      </div>
    );
  }
}
