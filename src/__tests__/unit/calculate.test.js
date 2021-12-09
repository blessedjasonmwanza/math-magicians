import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import calculate from '../../logic/calculate';
import Calculator from '../../components/calculator';

describe('Calculator test', () => {
  test('simulate number', () => {
    render(<Calculator />);
    const numFour = screen.getByText('4');
    const output = screen.getByRole('none');
    fireEvent.click(numFour);
    expect(output.textContent).toBe('4');
  });
  test('simulate operation', () => {
    render(<Calculator />);
    const plusSymbol = screen.getByText('+');
    const output = screen.getByRole('none');
    fireEvent.click(plusSymbol);
    expect(output.textContent).toBe('0+');
  });
  test('displays correct answer', () => {
    render(<Calculator />);
    const two = screen.getByText('2');
    const three = screen.getByText('9');
    const plusSymbol = screen.getByText('+');
    const equal = screen.getByText('=');
    const output = screen.getByRole('none');
    fireEvent.click(two);
    fireEvent.click(plusSymbol);
    fireEvent.click(three);
    fireEvent.click(equal);
    expect(output.textContent).toBe('11');
  });
});

describe('Validate calculate functionality', () => {
  const num = { total: null, next: null, operation: null };
  test('multiplication', () => {
    let result = calculate(num, '10');
    result = calculate(result, 'x');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('50');
  });
  test('plus', () => {
    let result = calculate(num, '10');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('15');
  });
  test('divide', () => {
    let result = calculate(num, '10');
    result = calculate(result, '÷');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('2');
  });
  test('modular', () => {
    let result = calculate(num, '10');
    result = calculate(result, '%');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('0');
  });

  test('minus', () => {
    let result = calculate(num, '10');
    result = calculate(result, '-');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.total).toBe('5');
  });
  test('Division by zero', () => {
    let result = calculate(num, '2');
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result.total).toBe('Can\'t divide by 0.');
  });
});
