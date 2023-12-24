import { expect } from '@jest/globals';
import each from 'jest-each';
import { isTriplicate } from './index'

const testCases = [
    [122555211, true],
    [663633, false],
    [9990, false],
    [122555244411, true],
    [122344433211, true],
    [411433314111444, false],
    [122234443322211, true]
];

each(testCases).test('Triplicate numbers', (num: number, expected: boolean) => {
    expect(isTriplicate(num)).toBe(expected);
});
