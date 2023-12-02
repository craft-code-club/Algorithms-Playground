from collections import deque

class TreeNode:
    def __init__(self, value=0, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def preorder_traversal(root: TreeNode, visiteds: [int] = None) -> [int]:
    # TODO: Implement pre-order traversal
    if visiteds is None: visiteds = []
    if not root: return None
    
    visiteds.append(root.value)
    preorder_traversal(root.left, visiteds)
    preorder_traversal(root.right, visiteds)
     
    return visiteds


def inorder_traversal(root: TreeNode, visiteds: [int] = None) -> [int]:
    # TODO: Implement in-order traversal
    if visiteds is None: visiteds = []
    
    if root is None: 
        return None

    inorder_traversal(root.left, visiteds)
    visiteds.append(root.value)
    inorder_traversal(root.right, visiteds)
    
    return visiteds


def postorder_traversal(root: TreeNode, visiteds: [int] = None) -> [int]:
    # TODO: Implement post-order traversal
    if visiteds is None: visiteds = []
    
    if root is None: 
        return None
    
    postorder_traversal(root.left, visiteds)
    postorder_traversal(root.right, visiteds)
    visiteds.append(root.value)

    return visiteds


def level_order_traversal(root: TreeNode) -> [int]:
    # TODO: Implement level order / BFS traversal
    queue = deque()
    queue.append(root)
    visiteds = []
    
    while queue:
        node = queue.popleft()
        visiteds.append(node.value)
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)
    
    return visiteds
