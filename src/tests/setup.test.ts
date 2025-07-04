import { sum } from './setup';
import { it, expect, describe } from 'vitest';

describe('setupTest', () => {
  it('should return the sum of two integers', () => {
    const a = 12;
    const b = 52;
    const expected = 64;
    const actual = sum(a, b);
    expect(actual).toBe(expected);
  });

  it('should throw an error given non integer input', () => {
    const a = 12;
    const b = '52';
    const expected = `Error: whole integers only please`;
    // @ts-expect-error - Testing type errors
    const actual = () => sum(a, b);
    expect(actual).toThrow(expected);
  });
});
