/**
 * Created by lfkid
 * test for Selection Sort in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    var countOuter = 0,
        countInner = 0,
        countSwap  = 0;

    var len = array.length,
        indexMin;

    for (var i = 0; i < len; i++) {
        countOuter++;
        indexMin = i;

        for (var j = i + 1; j < len; j++) {
            countInner++;

            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            countSwap++;
            swap(array, i, indexMin);
        }
    }

    console.log('selectionSort: outer', countOuter, 'inner', countInner, 'swap', countSwap);

    return array;
}

var arrayRandom   = [9, 3, 5, 4, 2, 6, 0, 8, 1, 7],
    arrayOrdered  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayReversed = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


console.log(selectionSort(arrayRandom));
/**
 * selectionSort: outer 10 inner 45 swap 9
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(selectionSort(arrayOrdered));
/**
 * selectionSort: outer 10 inner 45 swap 0
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(selectionSort(arrayReversed));
/**
 * selectionSort: outer 10 inner 45 swap 5
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
