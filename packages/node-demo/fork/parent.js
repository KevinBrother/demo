let cp = require('child_process')

let child = cp.fork('./child')

child.on('message', function (msg) {
    console.log('got a message: ', msg);
})

child.send('hello world');

setTimeout(()=> {

    // child.disconnect();
})
