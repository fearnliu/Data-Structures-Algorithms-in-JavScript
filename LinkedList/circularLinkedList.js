/**
 * Created by lfkid
 * CircularLinkedList in JavaScript
 */

function CircularLinkedList() {
    this.length = 0;
    this.head   = null;
}

function Node(element) {
    this.element = element;
    this.next    = null;
}

CircularLinkedList.prototype.clear = function () {
    if (!this.isEmpty()) {
        this.head   = null;
        this.length = 0;
    }
};

CircularLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

CircularLinkedList.prototype.getLength = function () {
    return this.length;
};

CircularLinkedList.prototype.getHead = function () {
    return this.head;
};

CircularLinkedList.prototype.getElem = function (position) {
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

CircularLinkedList.prototype.indexOf = function (element) {
    var current = this.head,
        index   = 0;

    if (this.isEmpty()) {
        return -1;
    } else {

        while (current.next !== this.head) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }

        if (current.element === element) {
            return index;
        }
    }

    return -1;
};

CircularLinkedList.prototype.append = function (element) {
    var node    = new Node(element),
        current = this.head;

    if (this.head !== null) {
        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = node;
    } else {
        this.head = node;
    }

    node.next = this.head;
    this.length++;

    return this;
};

CircularLinkedList.prototype.insert = function (element, position) {
    var node     = new Node(element),
        current  = this.head,
        previous = null,
        index    = 0;

    if (position >= 0 && position <= this.length) {
        if (position === 0) {
            if (!this.isEmpty()) {  // 循环链表，表非空时在表头插入需要单独处理
                node.next = this.head;
                while (current.next !== this.head) {
                    current = current.next;
                }
                current.next = node;
                this.head    = node;
            } else {
                this.head = node;
                node.next = node;
            }
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

CircularLinkedList.prototype.removeAt = function (position) {
    var current     = this.head,
        previous    = null,
        index       = 0,
        removedElem = null;

    if (position > -1 && position < this.length) {
        if (position === 0) {
            removedElem = this.head.element;
            if (this.length !== 1) {
                while (current.next !== this.head) {
                    current = current.next;
                }
                this.head    = this.head.next;
                current.next = this.head;
            } else {
                this.head = null;
            }
        } else {
            while (index++ < position) {
                previous = current;
                current  = current.next;
            }

            removedElem   = current.element;
            previous.next = current.next;
            current       = null;
        }

        this.length--;
        return removedElem;
    }
    return false;
};

CircularLinkedList.prototype.remove = function (element) {
    return this.removeAt(this.indexOf(element));
};

CircularLinkedList.prototype.print = function () {
    var current = this.head,
        str;

    if (!this.isEmpty()) {
        str = current.element;

        while (current.next !== this.head) {
            current = current.next;
            str += ' ' + current.element;
        }

    } else {
        str = '';
    }

    console.log(str);
};

// test
var list = new CircularLinkedList();
console.log(list.isEmpty());    // true
console.log(list.getLength());  // 0
console.log(list.getHead());  // null
console.log(list.getElem(0));  // undefined
console.log(list.indexOf('haha'));  // -1
console.log(list.remove('haha'));  // false
console.log(list.removeAt(0));  // false
console.log(list.insert('kid', 0));  // true
list.print();   // 'kid'
console.log(list.getHead().element);  // 'kid'
console.log(list.getHead().next.element);  // 'kid'
list.removeAt(0);
list.print();   // outputs empty

list.append('kid').append('kaito').append('shinichi').append('conan');
list.print();   // 'kid kaito shinichi kaito'
console.log(list.getLength());  // 4
console.log(list.getHead().element);    // 'kid'
console.log(list.getHead().next.element);   // 'kaito'


console.log(list.indexOf('kid'));   // 0
console.log(list.indexOf('haha'));  // -1

console.log(list.getElem(-1));  // undefined
console.log(list.getElem(0));  // 'kid'
console.log(list.getElem(4));  // undefined

list.print();   // 'kid kaito shinichi conan'
console.log(list.removeAt(-1)); // false
console.log(list.removeAt(0)); // 'kid'
console.log(list.getHead().element); // 'kaito'
console.log(list.removeAt(2)); // 'conan'
console.log(list.insert('kid', 0)); // true
list.print();   // 'kid kaito shinichi'

console.log(list.getHead().element);    // 'kid'
list.clear();
list.print();   // outputs empty

