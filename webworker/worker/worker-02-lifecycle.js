// 在工作者线程内部，使用importScripts()可以加载其他源的脚本。

self.name = '2 号打工人-222';
self.postMessage('first msg');
// self.close();
self.postMessage('second msg');

setTimeout(function () {
    self.postMessage('来自' + self.name + '的消息');
}, 2000);

self.addEventListener('message', function(ev) {
    console.log('接到主线程的消息： ', ev, ev.data);
});
