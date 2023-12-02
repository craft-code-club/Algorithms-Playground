import pytest

from binary_tree_traversals import TreeNode, inorder_traversal, preorder_traversal, postorder_traversal, level_order_traversal


def test_inorder_traversal_01():
    example = build_example_tree_01()
    visiteds = inorder_traversal(example)
    assert visiteds == [2, 7, 5, 6, 11, 1, 9, 5, 9]


def test_inorder_traversal_02():
    example = build_example_tree_02()
    visiteds = inorder_traversal(example)
    assert visiteds == [4, 2, 7, 5, 8, 1, 9, 6, 10, 3]

    
def test_preorder_traversal_01():
    example = build_example_tree_01()
    visiteds = preorder_traversal(example)
    assert visiteds == [1, 7, 2, 6, 5, 11, 9, 9, 5]

    
def test_preorder_traversal_02():
    example = build_example_tree_02()
    visiteds = preorder_traversal(example)
    assert visiteds == [1, 2, 4, 5, 7, 8, 3, 6, 9, 10]


def test_postorder_traversal_01():
    example = build_example_tree_01()
    visiteds = postorder_traversal(example)
    assert visiteds == [2, 5, 11, 6, 7, 5, 9, 9, 1]


def test_postorder_traversal_02():
    example = build_example_tree_02()
    visiteds = postorder_traversal(example)
    assert visiteds == [4, 7, 8, 5, 2, 9, 10, 6, 3, 1]

    
def test_level_order_traversal_01():
    example = build_example_tree_01()
    visiteds = level_order_traversal(example)
    assert visiteds == [1, 7, 9, 2, 6, 9, 5, 11, 5]

    
def test_level_order_traversal_02():
    example = build_example_tree_02()
    visiteds = level_order_traversal(example)
    assert visiteds == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    

def build_example_tree_01():
    return TreeNode(1, 
        TreeNode(7, 
            TreeNode(2), 
            TreeNode(6, 
                TreeNode(5), 
                TreeNode(11))),
        TreeNode(9, 
            TreeNode(9, 
                None, 
                TreeNode(5))))


def build_example_tree_02():
    return TreeNode(1, 
        TreeNode(2, 
            TreeNode(4), 
            TreeNode(5, 
                TreeNode(7), 
                TreeNode(8))),
        TreeNode(3, 
            TreeNode(6, 
                TreeNode(9), 
                TreeNode(10))))
