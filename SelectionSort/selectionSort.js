/**
 * Created by lfkid
 * Selection Sort in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    var len = array.length,
        indexMin;

    for (var i = 0; i < len; i++) {
        indexMin = i;

        for (var j = i+1; j < len; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            swap(array, i, indexMin);
        }
    }
}
