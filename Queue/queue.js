/**
 * Created by lfkid(锋)
 * Queue in JavaScript
 */

function Queue() {
    this.items = [];
}

Queue.prototype.clear = function () {
    this.items = [];
};

Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
};

Queue.prototype.size = function () {
    return this.items.length;
};

Queue.prototype.front = function () {
    return this.items[0]
};

Queue.prototype.enqueue = function (elem) {
    this.items.push(elem);
};

Queue.prototype.dequeue = function () {
    return this.items.shift();
};

Queue.prototype.print = function () {
    console.log(this.items.join(' '));
};

var queue = new Queue();
console.log(queue.isEmpty());   // true
console.log(queue.size());  // 0

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();  // 0 1 2 3 4
console.log(queue.front()); // 0

console.log(queue.isEmpty());   // false
console.log(queue.size());  // 5
console.log(queue.dequeue());   // 0
console.log(queue.dequeue());   // 1
queue.print();  // 2 3 4

queue.clear();
queue.print();  // outputs null string
console.log(queue.isEmpty());   // true
console.log(queue.size());  // 0
console.log(queue.front()); // undefined
