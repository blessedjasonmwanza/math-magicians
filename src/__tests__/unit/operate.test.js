import operate from '../../logic/operate';

describe('Validate and run operands test functionality', () => {
  test('multiply', () => {
    const result = operate('1', '2', 'x');
    expect(result).toBe('2');
  });
  test('add', () => {
    const result = operate('1', '2', '+');
    expect(result).toBe('3');
  });
  test('modular', () => {
    const result = operate('2', '2', '%');
    expect(result).toBe('0');
  });
  test('divide', () => {
    const result = operate('1', '2', '÷');
    expect(result).toBe('0.5');
  });
  test('minus', () => {
    const result = operate('2', '5', '-');
    expect(result).toBe('-3');
  });
});
