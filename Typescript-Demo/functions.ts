function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 5, 8));

const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;
console.log(sub(10, 3, 5));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(mult(4, 5));

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [4, 7, 8];
console.log(...numbers); // 4 7 8
console.log(add2(3, 5, ...numbers));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
