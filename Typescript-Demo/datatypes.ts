let lName: string;
lName = "Floyd";

let newName = lName.toUpperCase();
console.log(newName);

let age: number;
age = 27;
age = 27.5;

let dob = "27";

let result = parseInt(dob);

let isValid: boolean = true;
console.log(isValid);

let empList: string[]; //  assign string rule to array
empList = ["Katarina", "Floyd", "Henderson"];

let numList: Array<number>; // another way to assign rule to array
numList = [1, 2, 3, 4, 5];

let filteredResult = numList.filter((num) => num > 2);
console.log(filteredResult);

let foundNumber = numList.find((num) => num === 2);
console.log(foundNumber);

const enum Color {
  Red,
  Blue,
  Green,
}

let c: Color = Color.Blue;

let swapNums: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);

let department: any;
// let department; // implicit any
