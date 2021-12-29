// index.html 
/* const worker = new Worker('./worker.js');
const arrayBuffer = new ArrayBuffer(32);
console.log(`page's buffer size: ${arrayBuffer.length}`); // 32
worker.postMessage({foo: {bar: arrayBuffer}}, [arrayBuffer]);
console.log(`page's buffer size: ${arrayBuffer.length}`); // 0

// worker.js
self.addEventListener('message', (message) => {
    console.log(`worker's buffer size: ${arrayBuffer.length}`) // 32
}) 
 */

// index.html
const workers = [];
for(let i = 0; i < 4; i++) {
    workers.push(new Worker('./worker.js'));
}

// 创建1 字节缓冲区
const sharedArrayBuffer = new SharedArrayBuffer(1);
// 创建1 字节缓冲区仕途6
const view = new Uint8Array(sharedArrayBuffer);
// 父上下文赋值
view[0] = 1;

let responseCount = 0;
for(const worker of workers) {
    worker.addEventListener('message', () => {
        if(++responseCount === workers.length) {
            console.log(`Final 's buffer size: ${view[0]}'`);
        }
    })
}



// worker.js