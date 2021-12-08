
console.log('welcome to worker!!!');

// console.log(this);
self.name = '1号打工人';

console.log(self);

setTimeout(function () {
    self.postMessage('来自' + self.name + '的消息');
}, 2000);

self.addEventListener('message', function(ev) {
    console.log('接到主线程的消息： ', ev, ev.data);
});
