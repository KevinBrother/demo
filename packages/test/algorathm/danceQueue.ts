class SeqQueue {
    element: string[] = [];
    front: number;
    rear: number;
    constructor(length: number) {
        this.element = new Array(length);
        this.front = this.rear = 0;
    }

    public isEmpty(): boolean {
        return this.front == this.rear;
    }

    public add(str: string): boolean {

        if (this.front == (this.rear + 1) % this.element.length) {
            let temp = this.element;
            this.element = new Array(this.element.length * 2);
            let j = 0;
            for (let i = this.front; i != this.rear; i = (i + 1) % temp.length) {
                this.element[j++] = temp[i];
            }
            this.front = 0;
            this.rear = j;
        }
        this.element[this.rear] = str;

        this.rear = (this.rear + 1) % this.element.length;
        return true;
    }

    public peek(): string {
        return this.isEmpty() ? null : this.element[this.front];
    }

    public poll(): string {
        if (this.isEmpty()) {
            return null;
        }
        let temp = this.front;
        this.front = (this.front + 1) % this.element.length;
        return this.element[temp];
    }
}

function run() {
    // 请输入跳舞轮数
    
    let round = 3;
    let boysCount = 5;
    let girlsCount = 8;

    let boys=new SeqQueue(boysCount); 
    let girls=new SeqQueue(girlsCount);

    for (let i=0; i < boysCount; i++) {
        boys.add(`Boy${i+1}`);
    }

    for (let i=0; i < girlsCount; i++) {
        girls.add(`Girl${i+1}`);
    }

    let j=0;
    let min=minLength(boys,girls);
    while(j<round) {
        for(let i=0;i<min;i++) {
            let boy=boys.poll();
            let girl=girls.poll();
            console.log("boy"+boy+"<-->girls"+girl);		
            boys.add(boy);
            girls.add(girl);
        }

        console.log("没有被配对的第一个人是："+minSeqQueue(girls, boys).peek());
        j++;
    }
}
function minLength( a: SeqQueue, b: SeqQueue): number {
    let aLength=a.rear-a.front;
    let bLength=b.rear-b.front;

    if(aLength<bLength) {
        return aLength;
    }else {
        return bLength;
    }
}
function minSeqQueue( a: SeqQueue, b: SeqQueue): SeqQueue {
    if(a.element.length<b.element.length) {
        return a;
    }else {
        return b;
    }
} 

run();
