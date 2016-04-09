/**
 * Created by lfkid
 * MySet by Array in JavaScript
 */

function MySet() {
    this.items = [];
}

MySet.prototype.clear = function () {
    this.items = [];
};

MySet.prototype.isEmpty = function () {
    return this.items.length === 0
};

MySet.prototype.getLength = function () {
    return this.items.length;
};

MySet.prototype.has = function (value) {
    var i,
        l;

    for (i = 0, l = this.items.length; i < l; i++) {
        if (this.items[i] === value) {
            return true;
        }
    }

    return false;
};

MySet.prototype.values = function () {
    return this.items;
};

MySet.prototype.add = function (value) {
    if (!this.has(value)) {
        this.items.push(value);
        return this;
    }
};

MySet.prototype.remove = function (value) {
    if (this.has(value)) {
        this.items.splice(this.items.indexOf(value), 1);
        return true;
    }
    return false;
};

MySet.prototype.print = function () {
    console.log(this.items.join(' '));
};

MySet.prototype.union = function (otherSet) {
    var unionSet = new MySet(),
        i,
        l;

    for (i = 0, l = this.items.length; i < l; i++) {
        unionSet.add(this.items[i]);
    }
    
    for (i = 0, l = otherSet.getLength(); i < l; i++) {
        unionSet.add(otherSet.items[i]);
    }
    
    return unionSet;
};

MySet.prototype.intersection = function (otherSet) {
    var intersectionSet = new MySet(),
        i,
        l;
    
    for (i = 0, l = this.items.length; i < l; i++) {
        if (otherSet.has(this.items[i])) {
            intersectionSet.add(this.items[i]);
        }
    }
    
    return intersectionSet;
};

MySet.prototype.difference = function (otherSet) {
    var differenceSet = new MySet(),
        i,
        l;
    
    for (i = 0, l = this.items.length; i < l; i++) {
        if (!otherSet.has(this.items[i])){
            differenceSet.add(this.items[i]);
        }
    }
    
    return differenceSet;
};

MySet.prototype.subset = function (otherSet) {
    var i,
        l;

    if (this.items.length > otherSet.getLength()) {
        return false;
    } else {
        for (i = 0, l = this.items.length; i < l; i++) {
            if (!otherSet.has(this.items[i])) {
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

