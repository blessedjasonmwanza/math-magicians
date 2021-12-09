import calculate from '../../logic/calculate';

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
});
