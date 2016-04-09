/**
 * Created by lfkid
 * Dictionary in JavaScript
 */

function Dictionary() {
    this.items = {};
}

Dictionary.prototype.clear = function () {
    this.items = {};
};

Dictionary.prototype.isEmpty = function () {
    return (this.getLength() === 0);
};

Dictionary.prototype.getLength = function () {
    return Object.keys(this.items).length;
};

Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
};

Dictionary.prototype.get = function (key) {
    return this.has(key)? this.items[key] : undefined;
};

Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
    return this;
};

Dictionary.prototype.remove = function (key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    }
    return false;
};

Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
};

Dictionary.prototype.values = function () {
    var values = [];
    for (var k in this.items) {
        if (this.has(k)) {
            values.push(this.items[k]);
        }
    }
    return values;
};

Dictionary.prototype.each = function (fn) {
    for (var k in this.items) {
        if (this.has(k)) {
            fn(k, this.items[k]);
        }
    }
};

Dictionary.prototype.getItems = function () {
    return this.items;
};


// test
var dictionary = new Dictionary();
console.log(dictionary.isEmpty());  // true
console.log(dictionary.getLength());    // 0
dictionary.set('kid', 'kid@email.com').set('conan', 'conan@email.com').set('kaito', 'kaito@email.com');

console.log(dictionary.has('kid'));   // true
console.log(dictionary.getLength());   // 3

console.log(dictionary.keys()); // [ 'kid', 'conan', 'kaito' ]
console.log(dictionary.values()); // [ 'kid@email.com', 'conan@email.com', 'kaito@email.com' ]
console.log(dictionary.get('kaito')); // kaito@email.com

dictionary.remove('conan');

console.log(dictionary.keys()); // [ 'kid', 'kaito' ]
console.log(dictionary.values()); // [ 'kid@email.com', 'kaito@email.com' ]

console.log(dictionary.getItems()); // { kid: 'kid@email.com', kaito: 'kaito@email.com' }

dictionary.clear();
console.log(dictionary.getItems()); // {}

