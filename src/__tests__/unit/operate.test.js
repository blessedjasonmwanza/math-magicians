import operate from '../../logic/operate';

describe('Validate operands functionality', () => {
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
});
