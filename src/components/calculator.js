import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import Answer from './Answer';
import './css/calculator.css';

const Calculator = () => {
  const [state, callBack] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  useEffect(() => {
    const btns = document.querySelectorAll('button');
    Array.from(btns).forEach((btn) => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data');
        callBack(calculate(state, value));
      });
    });
  }, [state]);

  const { total, next, operation } = state;
  return (
    <section className="calculator-holder flex rows">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator cols">
        <Answer
          total={total}
          next={next}
          operation={operation}
        />
        <span className="d-flex row">
          <button type="button" data="AC">AC</button>
          <button type="button" data="+/-">
            +
            <small>/</small>
            -
          </button>
          <button type="button" data="%">%</button>
          <button type="button" data="÷" className="operator">&divide;</button>
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
    </section>
  );
};

export default Calculator;
