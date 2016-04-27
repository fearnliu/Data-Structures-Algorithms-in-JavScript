/**
 * Created by lfkid
 * test for Bubble Sort(better2) in JavaScript
 */
 
var arrayRandom   = [9, 3, 5, 4, 2, 6, 0, 8, 1, 7],
    arrayOrdered  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayReversed = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBetter2(array) {
    var countOuter = 0,		// 外层循环的次数
        countInner = 0,		// 内层循环的次数
        countSwap  = 0;		// 进行交换的次数

    var len = array.length,
        i,
        swaped;

    do {
        countOuter++;
        swaped = false;
        for (i = 0; i < len; i++) {
            countInner++;
            if (array[i] > array[i + 1]) {
                countSwap++;
                swap(array, i, i + 1);
                swaped = true;
            }
        }
    } while (swaped);

    console.log('bubbleSortBetter2: outer', countOuter, 'inner', countInner, 'swap', countSwap);

    return array;
}


console.log(bubbleSortBetter2(arrayRandom));
/**
 * bubbleSortBetter2: outer 8 inner 80 swap 25
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(bubbleSortBetter2(arrayOrdered));	// 仅仅针对已排序的数组效果明显
/**
 * bubbleSortBetter2: outer 1 inner 10 swap 0
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */

console.log(bubbleSortBetter2(arrayReversed));
/**
 * bubbleSortBetter2: outer 10 inner 100 swap 45
 * [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
