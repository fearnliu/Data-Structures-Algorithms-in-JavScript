/**
 * Created by lfkid
 * DoublyLinkedList in JavaScript
 */

function DoublyLinkedList() {
    this.length = 0;
    this.head   = null;
    this.tail   = null;
}

function Node(element) {
    this.element = element;
    this.prev    = null;
    this.next    = null;
}

DoublyLinkedList.prototype.clear = function () {
    if (this.head) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
};

DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

DoublyLinkedList.prototype.getLength = function () {
    return this.length;
};

DoublyLinkedList.prototype.getHead = function () {
    return this.head;
};

DoublyLinkedList.prototype.getTail = function () {
    return this.tail;
};

DoublyLinkedList.prototype.getElem = function (position) {
    var current = this.head,
        index   = 0;

    if (position > -1 && position < this.length) {
        if (position < this.length / 2) {
            while (index++ < position) {
                current = current.next;
            }
        } else {

            index   = this.length - 1;
            current = this.tail;

            while (index-- > position) {
                current = current.prev;
            }
        }

        return current.element;
    }

    return undefined;
};

DoublyLinkedList.prototype.indexOf = function (element) {
    var current = this.head,
        index   = 0;

    while (current) {
        if (current.element === element) {
            return index;
        }

        current = current.next;
        index++;
    }

    return -1;
};

DoublyLinkedList.prototype.append = function (element) {
    var node = new Node(element);

    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
    return this;
};

DoublyLinkedList.prototype.insert = function (element, position) {
    var node    = new Node(element),
        current = this.head,
        index   = 0;

    if (position >= 0 && position <= this.length) {
        if (position === 0) {
            if (this.head === null) {   // 表为空时需要控制tail指针，所以单独处理
                this.head = node;
                this.tail = node;
            } else {
                node.next      = this.head;
                this.head.prev = node;  // 若表为空的场景不单独处理，此时this.head为空，this.head.prev会出错
                this.head      = node;
            }

        } else if (position === this.length) {  // 若插入到表尾，由于需要控制tail指针，所以单独处理
            node.prev      = this.tail;
            this.tail.next = node;
            this.tail      = node;

        } else {
            if (position < this.length / 2) {
                while (index++ < position) {
                    current = current.next;
                }
            } else {
                index   = this.length - 1;
                current = this.tail;

                while (index-- > position) {
                    current = current.prev;
                }
            }
            node.next = current;
            node.prev = current.prev;   // 若插入为最后一项的场景不单独处理，此时current为空，current.prev会出错
            // 下面两行代码顺序不可变，且必须在以上两行代码之后
            current.prev.next = node;
            current.prev      = node;
        }

        this.length++;
        return true;
    }

    return false;
};

DoublyLinkedList.prototype.removeAt = function (position) {
    var index   = 0,
        current = this.head;

    if (position > -1 && position < this.length) {
        if (position === 0) {
            this.head = current.next;
            current.next = null;
            // head.prev    = null; 不可写在这里，若表只有1项，此时 head===null，head.prev 会报错

            if (this.length === 1) {    // 若表只有一项，需要更新 tail
                this.tail = null;
            } else {
                this.head.prev = null;  // 只有 length>=2 时，head.prev 才有意义
            }

        } else if (position === this.length - 1){
            current = this.tail;
            this.tail = current.prev;

            // 解除引用，断开被移除结点与表中结点的链接
            this.tail.next = null;
            current.prev = null;

        } else {

            if (position < this.length / 2) {
                while (index++ < position) {
                    current = current.next;
                }
            } else {
                index   = this.length - 1;
                current = this.tail;

                while (index-- > position) {
                    current = current.prev;
                }
            }

            current.prev.next = current.next;
            current.next.prev = current.prev;

            // 解除引用，断开被移除结点与表中结点的链接
            current.prev = null;
            current.next = null;
        }

        this.length--;
        return current.element;
    }

    return false;
};

DoublyLinkedList.prototype.remove = function (element) {
    return this.removeAt(this.indexOf(element));
};

DoublyLinkedList.prototype.print = function () {
    var current = this.head,
        str     = '';

    while (current) {
        str += current.element + ' ';
        current = current.next;
    }

    console.log(str);
};


// test
var list = new DoublyLinkedList();
console.log(list.isEmpty());    // true
console.log(list.getLength());  // 0
console.log(list.getHead());    // null
console.log(list.getTail());    // null
console.log(list.getElem(0));   // undefined
console.log(list.indexOf('haha'));  // -1
console.log(list.remove('haha'));   // false
console.log(list.insert('haha', 0));    // true
list.print();   // 'haha'
list.clear();
list.print();   // outputs empty

list.append('a').append('b').append('c').append('d').append('e');
list.print();   // 'a b c d e'
console.log(list.isEmpty());    // false
console.log(list.getLength());  // 5
console.log(list.getHead().element);    // 'a'
console.log(list.getTail().element);    // 'e'

console.log(list.getElem(-1));  // undefined
console.log(list.getElem(0));  // 'a'
console.log(list.getElem(4));  // 'e'
console.log(list.getElem(5));   // undefined

console.log(list.indexOf('haha'));  // -1
console.log(list.indexOf('c'));  // 2

console.log(list.insert('hei', -1));    // false
console.log(list.insert('hei', 5)); // true
list.print();   // 'a b c d e hei'
list.insert('i', 0);
list.insert('y', 6);
list.print();   // 'i a b c d e y hei'

list.removeAt(-1);
list.print();   // 'i a b c d e y hei'
list.removeAt(6);
list.print();   // 'i a b c d e hei'

console.log(list.getHead().element);    // 'i'
console.log(list.getTail().element);    // 'hei'
console.log(list.getLength());  // 7

list.clear();   // outputs empty
list.print();


