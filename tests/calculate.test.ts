import { calculate } from '../src/app/utils/calculate';

describe('calculate utility function', () => {
  test('adds two numbers', () => {
    expect(calculate('2+3')).toBe('5');
  });

  test('subtracts two numbers', () => {
    expect(calculate('10-3')).toBe('7');
  });

  test('multiplies two numbers', () => {
    expect(calculate('4*3')).toBe('12');
  });

  test('divides two numbers', () => {
    expect(calculate('12/4')).toBe('3');
  });

  test('handles negative numbers', () => {
    expect(calculate('-5+3')).toBe('-2');
    expect(calculate('10+-3')).toBe('7');
  });

  test('handles mixed operators', () => {
    expect(calculate('2+3*4')).toBe('14');
    expect(calculate('(2+3)*4')).toBe('20');
  });
});

