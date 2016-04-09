/**
 * Created by lfkid
 * MySet by Object in JavaScript
 */

function MySet() {
    this.items = {};
}

MySet.prototype.clear = function () {
    this.items = {};
};

MySet.prototype.isEmpty = function () {
    return (this.getLength() === 0);
};

MySet.prototype.getLength = function () {
    return Object.keys(this.items).length;
};

MySet.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
};

MySet.prototype.values = function () {
    return Object.keys(this.items);
};

MySet.prototype.add = function (value) {
    if (!this.has(value)) {
        this.items[value] = value;
    }
    return this;
};

MySet.prototype.remove = function (value) {
    if (this.has(value)) {
        delete this.items[value];
        return true;
    }
    return false;
};

MySet.prototype.print = function () {
    console.log(this.values().join(' '));
};

MySet.prototype.union = function (otherSet) {
    var unionSet = new MySet(),
        values = this.values(),
        i,
        l;

    for (i = 0, l = values.length; i < l; i++) {
        unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (i = 0, l = values.length; i < l; i++) {
        unionSet.add(values[i]);
    }

    return unionSet;
};

MySet.prototype.intersection = function (otherSet) {
    var intersectionSet = new MySet(),
        values = this.values(),
        i,
        l;

    for (i = 0, l = values.length; i < l; i++) {
        if (otherSet.has(values[i])) {
            intersectionSet.add(values[i]);
        }
    }

    return intersectionSet;
};

MySet.prototype.difference = function (otherSet) {
    var differenceSet = new MySet(),
        values = this.values(),
        i,
        l;

    for (i = 0, l = values.length; i < l; i++) {
        if (!otherSet.has(values[i])) {
            differenceSet.add(values[i]);
        }
    }

    return differenceSet;
};

MySet.prototype.subset = function (otherSet) {
    var values = this.values(),
        i,
        l;

    if (this.getLength() > otherSet.getLength()) {
        return false;
    } else {
        for (i = 0, l = values.length; i < l; i++) {
            if (!otherSet.has(values[i])) {
                return false;
            }
        }
        return true;
    }
};


// test
var myset = new MySet();
console.log(myset.isEmpty());   // true;
myset.add(0).add(1).add(2).add(3).add(4).add(5).add(1);
console.log(myset.isEmpty());   // false
myset.print();  // "0 1 2 3 4 5"
console.log(myset.getLength()); // 6
console.log(myset.has(0)); // true
console.log(myset.has(-1)); // false
console.log(myset.values()); // "[ '0', '1', '2', '3', '4', '5' ]"

myset.remove(0);
myset.print();  // "1 2 3 4 5"
myset.remove(4);
myset.print();  // "1 2 3 5"
console.log(myset.getLength()); // 4
myset.clear();
myset.print();  // outputs empty

var setA = new MySet();
setA.add(1).add(2).add(3);

var setB = new MySet();
setB.add(3).add(4).add(5).add(6);

var setC = new MySet();
setC.add(2).add(3).add(4).add(5).add(6);

setA.union(setB).print();   // "1 2 3 4 5 6"
setA.intersection(setB).print();    // "3"
setA.difference(setB).print();  // "1 2"

console.log(setA.subset(setB)); // false
console.log(setB.subset(setC)); // true

