import { NodeTree, NodeResult } from './index'

export function preOrder(root: NodeTree, arr: number[]): void {
    if(!root) {
        return;
    }

    arr.push(root.value);

    if(root.left) {
        preOrder(root.left, arr);
    }

    if(root.right) {
        preOrder(root.right, arr);
    }
}

export function inOrder(root: NodeTree, arr: number[]): void {
    if(!root) {
        return;
    }

    if(root.left) {
        inOrder(root.left, arr);
    }

    arr.push(root.value);

    if(root.right) {
        inOrder(root.right, arr);
    }
}

export function posOrder(root: NodeTree, arr: number[]): void {
    if(!root) {
        return;
    }

    if(root.left) {
        posOrder(root.left, arr);
    }

    if(root.right) {
        posOrder(root.right, arr);
    }

    arr.push(root.value);
}


export function bfs(root: NodeTree, arr: number[]): void {
    if(!root) {
        return;
    }

    const queue: NodeTree[] = [];
    queue.push(root);

    while(queue.length > 0) {
        const curr = queue.shift()!;

        arr.push(curr.value);

        if(curr.left) {
            queue.push(curr.left)
        }

        if(curr.right) {
            queue.push(curr.right);
        }
    }
}

export function bfsWithLevels0(root: NodeTree, arr: Array<NodeResult>) {
    if(!root) {
        return;
    }

    const queue: [node: NodeTree, level: number][] = [];
    queue.push([root, 1]);

    while(queue.length > 0) {
        const [node, level] = queue.shift()!;

        arr.push({
            value: node.value,
            level: level
        });

        if(node.left) {
            queue.push([node.left, level + 1]);
        }

        if(node.right) {
            queue.push([node.right, level + 1 ]);
        }
    }
}

export function bfsWithLevels(root: NodeTree, arr: Array<NodeResult>) {
    if(!root) {
        return;
    }

    const queue:NodeTree[] = [];
    queue.push(root);

    let level = 0;
    while(queue.length > 0) {
        level++;
        let len = queue.length;

        for(let i = 0; i < len; i++)
        {
            const node = queue.shift()!;

            arr.push({
                value: node.value,
                level: level
            });

            if(node.left) {
                queue.push(node.left);
            }

            if(node.right) {
                queue.push(node.right);
            }
        }
    }
}
