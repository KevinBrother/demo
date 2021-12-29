// index.html
const channel = new MessageChannel();

const worker = new Worker('./worker.js');

// 工作者线程负责初始化信息通道
worker.postMessage(null, [channel.port1]);

// 通过信息通道发送数据
channel.port2.addEventListener('message', ({data}) => {console.log(data);});

// 通过信息通道发送数据
channel.port2.postMessage('hello');


// worker.js
// 存储messagePort
let messagePort = null;

// 消息处理的监听
self.onmessage =  ({ports}) => {
    if(!messagePort) {
        
        messagePort = ports[0];
        self.onmessage = null;

        messagePort.onmessage = ({data}) => {
            console.log('接受到了消息');
            messagePort.postMessage('这是发送的消息');
        };
    }
};






