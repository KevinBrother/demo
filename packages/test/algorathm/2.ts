
function deleteNode(root: TreeNode, key: number) {
    if (root == null) {
        return root;
    }

    let cur = root;
    let pre: TreeNode = null;

    while (cur != null) {
        if (key > cur.val) {
            pre = cur;
            cur = cur.right;
        } else if (key < cur.val) {
            pre = cur;
            cur = cur.left;
        } else {
            break;
        }
    }

    if (cur == null) {
        return root;
    }

    if (pre == null) {
        if (root.left == null && root.right == null) {
            return null;
        } else {
            if (root.left == null) {
                root = root.right;
                return root;
            }
            if (root.right == null) {
                root = root.left;
                return root;
            }
            let cur2 = root.right;
            let pre2 = root;

            while (cur2.left != null) {
                pre2 = cur2;
                cur2 = cur2.left;
            }
            root.val = cur2.val;
            if (pre2 == root) {
                root.right = cur2.right;
            } else {
                pre2.left = cur2.right;
            }
            return root;
        }
    } else {
        if (cur.left == null && cur.right == null) {
            if (pre.val > cur.val) {
                pre.left = null;
            } else {
                pre.right = null;
            }
            return root;
        } else {
            if (cur.left == null) {
                if (pre.val > cur.val) {
                    pre.left = cur.right;
                } else {
                    pre.right = cur.right;
                }
                return root;
            }
            if (cur.right == null) {
                if (pre.val > cur.val) {
                    pre.left = cur.left;
                } else {
                    pre.right = cur.left;
                }
                return root;
            }
            let cur2 = cur.right;
            let pre2 = cur;
            while (cur2.left != null) {
                pre2 = cur2;
                cur2 = cur2.left;
            }
            cur.val = cur2.val;
            if (pre2 == cur) {
                pre2.right = cur2.right;
            } else {
                pre2.left = cur2.right;
            }
            return root;
        }
    }
}

function insertNode(root: TreeNode | null, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    let pos = root;
    while (pos !== null) {
        if (val < pos.val) {
            if (pos.left === null) {
                pos.left = new TreeNode(val);
                break;
            } else {
                pos = pos.left;
            }
        } else {
            if (pos.right === null) {
                pos.right = new TreeNode(val);
                break;
            } else {
                pos = pos.right;
            }
        }
    }
    return root;
};

// 1. 添加插入和删除方法
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
    deleteNode = deleteNode
    insertNode = insertNode
    searchBST = searchBST
}

// 2. 三个遍历排序（非递归）
//  2.1 前序 
function preOrderIteration(head: TreeNode | null) {
    if (head == null) {
        return;
    }
    let stack: TreeNode[] = []
    stack.push(head);
    while (!stack.length) {
        let node = stack.pop();
        if (node.right != null) {
            stack.push(node.right);
        }
        if (node.left != null) {
            stack.push(node.left);
        }
    }
    console.log(stack);
}
//  2.2 中序 
function inOrderIteration(head: TreeNode | null) {
    if (head == null) {
        return;
    }
    let cur = head;

    let stack: TreeNode[] = []
    while (!stack.length || cur != null) {
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        if (node.right != null) {
            cur = node.right;
        }
    }

    console.log(stack);
}

// 2.3 后序
function postOrderIteration(head: TreeNode | null) {
    if (head == null) {
        return;
    }
    let cur = head;
    let stack: TreeNode[] = []
	stack.push(head);
	while (!stack.length) {
		let peek = stack[0];
		if (peek.left != null && peek.left != cur && peek.right != cur) {
			stack.push(peek.left);
		} else if (peek.right != null && peek.right != cur) {
			stack.push(peek.right);
		} else {
			cur = peek;
		}
	}
    console.log(stack);
}

// 3. 查找某个节点
function searchBST(root, val): TreeNode | null{
    if (!root) {
        return null;
    }
    if (val === root.val) {
        return root;
    }
    return searchBST(val < root.val ? root.left : root.right, val);
};