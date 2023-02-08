"use strict";
let lName;
lName = "Floyd";
let newName = lName.toUpperCase();
console.log(newName);
let age;
age = 27;
age = 27.5;
let dob = "27";
let result = parseInt(dob);
let isValid = true;
console.log(isValid);
let empList; //  assign string rule to array
empList = ["Katarina", "Floyd", "Henderson"];
let numList; // another way to assign rule to array
numList = [1, 2, 3, 4, 5];
let filteredResult = numList.filter((num) => num > 2);
console.log(filteredResult);
let foundNumber = numList.find((num) => num === 2);
console.log(foundNumber);
let c = 1 /* Color.Blue */;
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
let department;
// let department; // implicit any
