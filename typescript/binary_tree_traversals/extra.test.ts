import { expect, test } from '@jest/globals';
import { bfsWithLevels } from './extra';
import { graph } from './index';

test('BFS With levels', () => {
    let arr = [];
    bfsWithLevels(graph, arr);

    expect(arr).toStrictEqual([
        { value: 1, level: 1 },
        { value: 7, level: 2 },
        { value: 9, level: 2 },
        { value: 2, level: 3 },
        { value: 6, level: 3 },
        { value: 9, level: 3 },
        { value: 5, level: 4 },
        { value: 11, level: 4 },
        { value: 5, level: 4 },
    ]);
});
