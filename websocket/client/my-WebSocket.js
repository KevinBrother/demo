class MyWebSocket {

    constructor(url, option) {
        this.ws = new WebSocket(url, option);
    }

    onopen(fn) {
        this.ws.onopen = function(evt) { 
           fn(evt);
        };
    }

    send(msg) {
        this.ws.send(msg)
    }

    onmessage(fn) {
        this.ws.onmessage = function(evt) {
            fn(evt.data, evt)
        }
    }

    close() {
        this.ws.close();
    }

    onclose(evt) {
        this.ws.onclose = function(evt) {
            fn(evt)
        }
    }

}


const myWs = new MyWebSocket("this.wss://echo.websocket.org");

myWs.onmessage((data, evt) => {
    console.log('来自服务端的数据', data);
})


myWs.send('服务端，我发消息来啦！！！')
