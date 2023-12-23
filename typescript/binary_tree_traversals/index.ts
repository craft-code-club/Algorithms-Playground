export type Nullable<T> = T | null;

export type NodeResult = {
    value: number;
    level: number;
}

export class NodeTree {
    constructor(public value: number, public left: Nullable<NodeTree> = null, public right: Nullable<NodeTree> = null) {}
}

export const graph = new NodeTree(
    1,

    new NodeTree(7,
        new NodeTree(2),
        new NodeTree(6,
            new NodeTree(5),
            new NodeTree(11))),

    new NodeTree(9,
        null,
        new NodeTree(9,
            new NodeTree(5))
));



export function preOrder(root: NodeTree, arr: number[]): void {
    // TODO: Implement pre-order traversal
}

export function inOrder(root: NodeTree, arr: number[]): void {
    // TODO: Implement in-order traversal
}

export function posOrder(root: NodeTree, arr: number[]): void {
    // TODO: Implement post-order traversal
}


export function bfs(root: NodeTree, arr: number[]): void {
    // TODO: Implement level order / BFS traversal
}