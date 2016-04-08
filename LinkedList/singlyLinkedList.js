/**
 * Created by lfkid
 * SinglyLinkedList in JavaScript
 */

function SinglyLinkedList() {
    this.head   = null;
    this.length = 0;
}

function Node(element) {
    this.element = element;
    this.next    = null;
}

SinglyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

SinglyLinkedList.prototype.getLength = function () {
    return this.length;
};

SinglyLinkedList.prototype.getHead = function () {
    return this.head;
};

SinglyLinkedList.prototype.clear = function () {
    if (!this.isEmpty()) {
        this.head   = null;
        this.length = 0;
        return true;
    }

    return false;
};

SinglyLinkedList.prototype.getElem = function (position) {
    var current = this.head,
        index   = 0;

    if (position > -1 && position < this.length) {
        while (index++ < position) {
            current = current.next;
        }

        return current.element;
    }

    return undefined;
};

SinglyLinkedList.prototype.print = function () {
    var current = this.head,
        str     = '';

    while (current) {
        str += current.element + ' ';
        current = current.next;
    }

    console.log(str);
};

SinglyLinkedList.prototype.indexOf = function (element) {
    var current = this.head,
        index   = 0;

    while (current) {
        if (current.element === element) {
            return index;
        }

        index++;
        current = current.next;
    }

    return -1;
};

SinglyLinkedList.prototype.append = function (element) {
    var node    = new Node(element),
        current = this.head;

    if (this.head !== null) {
        while (current.next) {
            current = current.next;
        }

        current.next = node;
    } else {
        this.head = node;
    }

    this.length++;
    return this;
};

SinglyLinkedList.prototype.insert = function (element, position) {
    var node     = new Node(element),
        index    = 0,
        current  = this.head,
        previous = null;

    if (position >= 0 && position <= this.length) {
        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            while (index++ < position) {
                previous = current;
                current  = current.next;
            }

            previous.next = node;
            node.next     = current;
        }

        this.length++;
        return true;
    }
    return false;
};

SinglyLinkedList.prototype.removeAt = function (position) {
    var current  = this.head,
        index    = 0,
        previous = null;

    if (position > -1 && position < this.length) {
        // removing the first item in list
        if (position === 0) {
            this.head    = current.next;
            current.next = null;
        } else {

            while (index++ < position) {
                previous = current;
                current  = current.next;
            }

            previous.next = current.next;
            current.next  = null;
        }

        this.length--;
        return current.element;
    }

    return false;
};

SinglyLinkedList.prototype.remove = function (element) {
    return this.removeAt(this.indexOf(element));
};

SinglyLinkedList.prototype.reverse = function () {
    var nextNode = null,
        previous = null,
        current  = this.head;

    if (current.next) {
        while (current) {
            nextNode     = current.next;
            current.next = previous;
            previous     = current;
            current      = nextNode;
        }

        this.head = previous;
    }
};

SinglyLinkedList.prototype.reverse2 = function () {
    var that = this;

    var reverseByRecursion = function (node) {
        if (node.next === null) {
            that.head = node;
            return node;
        } else {
            var tail  = reverseByRecursion(node.next);
            tail.next = node;
            node.next = null;
        }

        return node;
    };

    if (this.head.next) {
        reverseByRecursion(this.head);
    }
};


// test
var list = new SinglyLinkedList();

// test for empty SinglyLinkedList
console.log(list.isEmpty());    // true
list.print();   // outputs empty
console.log(list.getHead());    // null
console.log(list.getLength());  // 0
console.log(list.getElem('lfkid'));  // undefined
console.log(list.remove('lfkid'));  // false
console.log(list.indexOf('lfkid')); // -1
console.log(list.insert('lfkid', 0));   // true
list.print();   // 'lfkid'
list.clear();
list.print();   // outputs empty

// test for not empty SinglyLinkedList
list.append('kid').append('kaito').append('shinichi').append('conan');
console.log(list.isEmpty());    // false
console.log(list.getHead());    // Node { element: 'kid', next: Node { element: 'kaito', next: Node { element: 'shinichi', next: [Object] } } }
console.log(list.getLength());  // 4

list.print();   // 'kid kaito shinichi conan'
list.reverse();
list.print();   // 'conan shinichi kaito kid'
list.reverse2();
list.print();   // 'kid kaito shinichi conan'

console.log(list.indexOf('haha'));  // -1
console.log(list.indexOf('kid'));  // 0

console.log(list.getElem(-1));  // undefined
console.log(list.getElem(0));   // 'kid'
console.log(list.getElem(4));   // undefined

list.insert('lfkid', 5);
list.insert('lfkid', -1);
list.insert('lfkid', 0);
list.print();   // 'lfkid kid kaito shinichi conan'

list.remove('haha');
list.remove('lfkid');
list.print();   // 'kid kaito shinichi conan'
list.removeAt(0);
list.print();   // 'kaito shinichi conan'

console.log(list.getHead().element);    // 'kaito'
console.log(list.getLength());  // 3

list.clear();
console.log(list.getHead());    // null
console.log(list.getLength());  // 0
list.print();   //  outputs empty

