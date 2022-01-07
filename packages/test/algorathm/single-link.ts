
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 1. 从键盘输入数据
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  

function setNumber() {
    // rl.question('输入数字 ', (input: string) => {
    //     handleNumber(input);
    //     // rl.close();
    // });

    var inputArr:any = [];  
    rl.on('line', function (input: any) {  
        console.log(input);
        
        handleNumber(input);

        inputArr.push(input);// 获取此行数据  
        var nLine = parseInt(inputArr[0]);// 获取行数  
        if(inputArr.length==(nLine + 1)){ // 获取了此轮所有数据，此时获取元素 nLine+1 个，第一个元素为行数nLine.  
            var arr = inputArr.slice(1);// 除去行数的具体数据  
            // 下面就可以对数据进行处理......  
            console.log(arr);  
            inputArr = [];// 清空数组  
        }  
    }); 
}


function handleNumber(input: string) {
    console.log(typeof input);
    const number = parseInt(input);

    if(typeof number  !== 'number') {
        console.log('请输入数字，小于等于0则退出录入');
    }else if (number > 0){
        console.log(number);
        // setNumber();
    }else{
        rl.close();
        return;
    }
}


main();
function main() {
    setNumber();
}

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
