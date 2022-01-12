const crypto = require('crypto');

function md5(data) { 
    let hash = crypto.createHash('md5');
    return hash.update(data).digest('base64');
}

let mima = md5('{ d: 2, a: { b: 1, c: 2 } }');
let mima2 = md5('{ a: { c: 2, b: 1 }, d: 2 }');



console.log(mima, mima2);