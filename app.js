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

//----------------9.1.6-----------------------

var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);
