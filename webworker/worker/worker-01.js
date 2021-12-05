// 在工作者线程内部，使用importScripts()可以加载其他源的脚本。

console.log('welcome to worker!!!');
console.log(this);
console.log(self);

self.name = '1号打工人- 111';

setTimeout(function () {
    self.postMessage('来自' + self.name + '的消息');
}, 2000);


self.addEventListener('message', function(ev) {
    console.log('接到主线程的消息： ', ev, ev.data);
});

// importScripts('http://127.0.0.1:8080/outer.js');