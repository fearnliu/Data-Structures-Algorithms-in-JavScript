/**
 * Created by lfkid
 * Stack in JavaScript
 */

var Stack = function () {
    this.items = [];
};

Stack.prototype.clear = function () {
    this.items = [];
};

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
};

Stack.prototype.size = function () {
    return this.items.length;
};

Stack.prototype.getTop = function () {
    return this.items[this.items.length - 1];
};

Stack.prototype.push = function (elem) {
    this.items.push(elem);
};

Stack.prototype.pop = function () {
    return this.items.pop();
};

Stack.prototype.print = function () {
    console.log(this.items.join(' '));
};

// test
var stack = new Stack();
console.log(stack.isEmpty());   // true
console.log(stack.size());      // 0
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.isEmpty());   // false
console.log(stack.size());      // 5
console.log(stack.getTop());    // 4
stack.print();  // 0 1 2 3 4
console.log(stack.pop());   // 4
console.log(stack.getTop());  // 3
stack.print();  // 0 1 2 3
stack.clear();
stack.print();  // outputs null string
