import { expect, test } from '@jest/globals';
import { preOrder, inOrder, posOrder, bfs, graph } from './index';

test('Pre-order traversal', () => {
    let arr = [];
    preOrder(graph, arr);

    expect(arr).toStrictEqual([1, 7, 2, 6, 5, 11, 9, 9, 5]);
});

test('In-order traversal', () => {
    let arr = [];
    inOrder(graph, arr);

    expect(arr).toStrictEqual([2, 7, 5, 6, 11, 1, 9, 5, 9]);
});

test('Post-order traversal', () => {
    let arr = [];
    posOrder(graph, arr);

    expect(arr).toStrictEqual([2, 5, 11, 6, 7, 5, 9, 9, 1]);
});

test('Level-order traversal (BFS)', () => {
    let arr = [];
    bfs(graph, arr);

    expect(arr).toStrictEqual([1, 7, 9, 2, 6, 9, 5, 11, 5]);
});
