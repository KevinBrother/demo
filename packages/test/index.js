
let arr = [{
    name: 'foo',
    age: 36
}];

let rst = {}
for ([key, value] of Object.entries(arr[0])) {
    console.log(value);
    value += 'qaa';
    rst[key] = value;
};

console.log(arr, rst);


