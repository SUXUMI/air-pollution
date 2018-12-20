import { changeArray } from '../src/utils/functions';

describe('test changeArray functions', () => {
  test('Valid response', () => {
    const arr1 = [[1, 2], [3, 4]];
    const arr2 = [5, 6];
    const res = [[1, 2, 5], [3, 4, 6]];

    expect(changeArray(arr1, arr2)).toEqual(res);
  });
});
