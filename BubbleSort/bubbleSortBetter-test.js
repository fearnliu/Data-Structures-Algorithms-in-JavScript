/**
 * Created by lfkid
 * test for Bubble Sort(better) in JavaScript
 */

var arrayRandom   = [9, 3, 5, 4, 2, 6, 0, 8, 1, 7],
    arrayOrdered  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayReversed = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBetter(array) {
    var countOuter = 0,		// 外层循环的次数
        countInner = 0,		// 内层循环的次数
        countSwap  = 0;		// 进行交换的次数

    var len = array.length,
        i,
        j;

    for (i = 0; i < len; i++) {
        countOuter++;
        for (j = 1; j < len-i; j++) {	// 避免已经排好序的元素再次参与循环比较
            countInner++;
            if (array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }
    
    console.log('bubbleSortBetter: outer', countOuter, 'inner', countInner, 'swap', countSwap);

    return array;
}

console.log(bubbleSortBetter(arrayRandom));
/**
 * bubbleSortBetter: outer 10 inner 45 swap 25
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(bubbleSortBetter(arrayOrdered));
/**
 * bubbleSortBetter: outer 10 inner 45 swap 0
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(bubbleSortBetter(arrayReversed));
/**
 * bubbleSortBetter: outer 10 inner 45 swap 45
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
