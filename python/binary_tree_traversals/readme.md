## Binary Tree Traversal Playground

This is a playground for binary tree traversal algorithms.
For those who want to practice and master various binary tree traversal techniques.

### To-Do:

- Implement a **Pre-order traversal** (DFS)
- Implement an **In-order traversal** (DFS)
- Implement a **Post-order traversal** (DFS)
- Implement a **Level-order traversal** (BFS)

`For all the above methos, return an array in the specified order`

### Steps:

1. **Implement it**:

    Check the selected language folder for instructions

1. **Test it**, run:
    Check the selected language folder for instructions

### Examples:

<img src="../../assets/binary-tree-example.png" style="background-color: white" alt="Binary Tree" width="300"/>

For the above tree, the traversals should return:

- Pre-order traversal: `[1, 2, 4, 5, 3, 6, 7]`
- In-order traversal: `[4, 2, 5, 1, 6, 3, 7]`
- Post-order traversal: `[4, 5, 2, 6, 7, 3, 1]`
- Level-order traversal: `[1, 2, 3, 4, 5, 6, 7]`

## Explanations

### Pre-order Traversal

Pre-order traversal is a type of depth-first search (DFS) algorithm. It is a recursive algorithm that starts from the root node and explores as far as possible along each branch before backtracking. Visit/Process the current node before its child nodes (first left, so right childs).

### In-order Traversal

In-order traversal is a type of depth-first search (DFS) algorithm. It is a recursive algorithm that starts from the root node and explores as far as possible along each branch. Visiting/Processing the current node between its child nodes (first visit the left, after it visit the parent, so right child).

### Post-order Traversal

Post-order traversal is a type of depth-first search (DFS) algorithm. It is a recursive algorithm that starts from the root node and explores as far as possible along each branch. Visiting/Processing the current node after its child nodes (first left, so right childs, after it visit the parent).

### Level-order Traversal

Level-order traversal is the breadth-first traversal way. Visiting/Checking the nodes level by level. First visit the root node, after it visit the left and right (level 2), so visit/check all the nodes from level 3 and so on.

---

Good studies!
