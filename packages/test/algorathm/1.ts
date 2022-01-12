
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 1. 输入判断

// 2. 链表结构
let root: ListNode = null;
function createNode(value) {
    if(root === null) {
        root = new ListNode(value);
    }else {
        root.next = new ListNode(value);
    }
}

// 3. 链表查找
let findIdx = 0;
function findIndex(root:ListNode | null, value: number): number {
    if(root === null) {
        return 0;
    }

    if(root.val === value) {
        return findIdx;
    }

    findIndex(root.next, value);
    findIdx++
}

function findIndexByInput(value: number) {
    const index = findIndex(root, value);
    if(index) {
        console.log(`该节点为第${index}个节点`);
    }else {
        console.log('找不到此节点');
    }
}

// 4. 删除节点
function deleteIndex(root:ListNode | null, value: number): boolean {
    if(root === null) {
        return false;
    }

    if(root.val === value) {
        root = root.next;
        return true;
    }

    findIndex(root.next, value);
}

function deleteByValue(value: number) {
    const isDeleted = deleteIndex(root, value);

    if(isDeleted) {
        console.log(`已删除`);
    }else {
        console.log('链表中没有此节点， 无法删除');
    }
}


// 5. 链表去重
function deleteDuplicates(head: ListNode | null): ListNode | null {
    const rst = head;
    
    while(head) {
        if(head.val === head.next?.val) {
            head.next = head.next?.next;
        }else {
            head = head.next;
        }
    }
    return rst;
};

function removeRep() {
    console.log(deleteDuplicates(root));
}
