/**
 * Created by lfkid
 * test fot Insertion Sort in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function insertionSort(array) {
    var countOuter = 0,
        countInner = 0,
        countSwap  = 0;


    var len = array.length,
        i,
        j,
        temp;

    for (i = 1; i < len; i++) {
        countOuter++;

        temp = array[i];
        j    = i;

        while (j > 0 && array[j - 1] > temp) {
            countInner++;
            countSwap++;

            array[j] = array[j - 1];
            j--;
        }

        array[j] = temp;
    }

    console.log('insertionSort: outer', countOuter, 'inner', countInner, 'swap', countSwap);

    return array;
}

var arrayRandom   = [9, 3, 5, 4, 2, 6, 0, 8, 1, 7],
    arrayOrdered  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayReversed = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


console.log(insertionSort(arrayRandom));
/**
 * insertionSort: outer 9 inner 25 swap 25
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(insertionSort(arrayOrdered));
/**
 * insertionSort: outer 9 inner 0 swap 0
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(insertionSort(arrayReversed));
/**
 * insertionSort: outer 9 inner 45 swap 45
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
