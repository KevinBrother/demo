
console.log('start importScripts');
// 引入的脚本会共享作用域
importScripts('./worker-02-lifecycle.js');
importScripts('./worker-01.js');

console.log('end importScripts');

// importScripts('http://106.53.12.110/index.js');
importScripts('http://127.0.0.1:8080/worker-01.js');

