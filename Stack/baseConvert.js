/**
 * Created by lfkid
 * baseConverter -- a example of using stack in javaScript
 */

// note: running the baseConverter.js must need to the code in stack.js
// baseConvert convert from decimal to arbitrary base(binary ~ hexadecimal)
function baseConvert(decimalNumber, base) {
    var remStack = new Stack(),
        remainder,
        result   = '',
        digitStr = '0123456789ABCDEF';

    while (decimalNumber > 0) {
        remainder = decimalNumber % base;
        remStack.push(remainder);
        decimalNumber = Math.floor(decimalNumber / base);
    }

    while (!remStack.isEmpty()) {
        result += digitStr[remStack.pop()];
    }

    return result;
}

// test
console.log(baseConvert(10001000, 16)); // 989A68
console.log(baseConvert(35, 2));        // 100011
console.log(baseConvert(98, 8));        // 142
