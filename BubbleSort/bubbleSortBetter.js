/**
 * Created by lfkid
 * Bubble Sort(better) in JavaScript
 */

function swap(array, i, j) {
    var temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBetter(array) {
    var len = array.length,
        i,
        j;

    for (i = 0; i < len; i++) {
        for (j = 1; j < len-i; j++) {	// 避免已经排好序的元素再次参与循环比较
            if (array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
}
