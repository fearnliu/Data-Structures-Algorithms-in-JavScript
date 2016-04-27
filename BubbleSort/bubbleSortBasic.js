/**
 * Created by lfkid
 * Bubble Sort(basic) in JavaScript
 */


function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBasic(array) {

    var len = array.length,
        i,
        j;

    for (i = 0; i < len; i++) {
        for (j = 1; j < len; j++) {
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
}
