/**
 * Created by lfkid
 * Bubble Sort(better2) in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBetter2(array) {
    var len = array.length,
        i,
        swaped;

    do {
        swaped = false;
        for (i = 0; i < len; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swaped = true;
            }
        }
    } while (swaped);
}

