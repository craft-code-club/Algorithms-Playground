import { NodeTree, NodeResult } from './index'

export function bfsWithLevels1(root: NodeTree, arr: Array<NodeResult>) {
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

export function bfsWithLevels2(root: NodeTree, arr: Array<NodeResult>) {
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
