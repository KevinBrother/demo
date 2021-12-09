"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this._age = 18;
        this.age = age ? age : this._age;
        this.name = name;
    }
    return User;
}());
exports.User = User;
var user = new User('sir');
console.log(user);


interface Data {
    shadows: [],
    strokes: []
}

let data:Data = {
    
}