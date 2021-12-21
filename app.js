// console.log("Hello Node!");
// console.log(document);

// var message = "Hello Node!";
// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// const stands for "constant."
// create variables that can't be reassigned a value
// const message = 'Hello Node!';
// message = 'Goodbye Node!';
// const sum = 5 + 3;
// sum += 1;
// TypeError: Assignment to constant variable.
//cause我们尝试直接为变量分配一个全新的值

// const animalArray = ["dog", "cat", "pig"];
// animalArray.push("cow");
// console.log(animalArray);

// const personObj = {
//   name: "Lernantino",
//   age: 99,
// };

// personObj.age = 100;
// personObj.occupation = "Developer";
// console.log(personObj);
// no error
//我们并没有重新分配的值，而是编辑这些值里面的内容。

// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//   console.log(profileDataArr);
// };

// printProfileData(profileDataArgs);

// // Using function expression syntax
// const addNums = function (numOne, numTwo) {
//   return numOne + numTwo;
// };

// // Using new arrow function syntax, 箭头函数没有自己的this关键字
// const addNums = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// 隐式 return
// const addNums = (numOne, numTwo) => numOne + numTwo;

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i])
//     }
// }

// let and const are block-scoped variables.
// const message = 'Hello Node!';

// if (true === true) {
//   const message = 'Hello ES6!';
//   let sum = 5;
//   sum += 10;
//   console.log(message);
//   console.log(sum);
// }

// console.log(message);

// //cannot print cuz let is block-scoped variable
// //if change to var, it can print. The var keyword has function scoping
// console.log(sum);

// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
// var one = "one: declared outside the block";

// if (true === true) {
//   var one = "one: declared inside the block"; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = "two: declared outside the block";

// if (true === true) {
//   let two = "two: declared inside the block";
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.

// const printProfileData = (profileDataArr) => {
//   //this...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };


const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);