let list = [];
let list_id = [];
onconnect = function(e) {
    let port = e.ports[0];
    port.addEventListener('message', function(e) {
        if(e.data.id){
            let index = list_id.indexOf(e.data.id);
            if(index === -1){
                list.push(port);
                list_id.push(e.data.id);
            }else{
                //关闭上个链接
                list[index].close();
                list[index] = port;
            };
        }else{
            send(e.data[1],e.data[0]);
        };
    });
    port.start();
}
let send = function(data,id){
    let index = list_id.indexOf(id);
    if(index !== -1){
        list[index].postMessage([id,data]);
    };
    
};