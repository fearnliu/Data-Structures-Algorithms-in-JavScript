/**
 * Created by lfkid
 * Insertion Sort in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function insertionSort(array) {
    var len = array.length,
        i,
        j,
        temp;

    for (i = 1; i < len; i++) {
        temp = array[i];
        j    = i;

        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = temp;
    }
}
