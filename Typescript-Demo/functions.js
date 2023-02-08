"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 5, 8));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(10, 3, 5));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 5));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [4, 7, 8];
console.log(...numbers); // 4 7 8
console.log(add2(3, 5, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log(concatResult);
console.log(concatString);
