/**
 * Created by lfkid
 * PriorityQueue in JavaScript
 */

function PriorityQueue() {
    this.items = [];
}

var QueueElement = function (element, priority) {
    this.element  = element;
    this.priority = priority;
};

PriorityQueue.prototype.clear = function () {
    this.items = [];
};

PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
};

PriorityQueue.prototype.size = function () {
    return this.items.length;
};

PriorityQueue.prototype.getFront = function () {
    return this.items[0].element;
};

PriorityQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority),
        added        = false,
        i            = 0,
        l            = this.items.length;

    if (!this.isEmpty()) {
        for (i; i < l; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }

    } else {
        this.items.push(queueElement);
    }
};

PriorityQueue.prototype.dequeue = function () {
    return this.items.shift().element;
};

PriorityQueue.prototype.print = function () {
    var str = '',
        i   = 0,
        l   = this.items.length;

    for (i; i < l; i++) {
        str += this.items[i].element + ' ';
    }

    console.log(str);
};

// test
var priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());   // true
console.log(priorityQueue.size());  // 0

priorityQueue.enqueue('kid', 3);
priorityQueue.enqueue('conan', 2);
priorityQueue.enqueue('shinichi', 2);
priorityQueue.enqueue('kaito', 1);
priorityQueue.enqueue('fan', 4);

console.log(priorityQueue.isEmpty());   // false
console.log(priorityQueue.size());  // 5
priorityQueue.print();  // "kaito conan shinichi kid fan"

console.log(priorityQueue.getFront()); // "kaito"
priorityQueue.dequeue();
console.log(priorityQueue.getFront()); // "conan"
priorityQueue.dequeue();
console.log(priorityQueue.getFront()); // "shinichi"
priorityQueue.print();  // "shinichi kid fan"

priorityQueue.clear();
priorityQueue.print();  // outputs null string
console.log(priorityQueue.isEmpty());   // true
console.log(priorityQueue.size());   // 0
