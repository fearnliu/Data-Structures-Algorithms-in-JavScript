/**
 * Created by lfkid
 * Simple HashTable in JavaScript
 */

function HashTable() {
    this.table = [];
}

var loseloseHashCode = function (key) {
    var hash = 0,
        i,
        l;

    for (i = 0, l = key.length; i < l; i++) {
        hash += key.charCodeAt(i);
    }

    return hash % 37;
};

HashTable.prototype.put = function (key, value) {
    this.table[loseloseHashCode(key)] = value;
};

HashTable.prototype.remove = function (key) {
    this.table[loseloseHashCode(key)] = undefined;
};

HashTable.prototype.get = function (key) {
    return this.table[loseloseHashCode(key)];
};

