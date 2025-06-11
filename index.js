Задание 7.7.1

function printInfo() {
  console.log("Name:" + this.name + ", Age:" + this.age);
}
let person = {
  name: "Anna",
  age: 25,
};
printInfo.call(person);

Задание 7.7.2

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Unknown operator";
  }
}

let args = [2, 3, "+"];
let result = calculate.apply(null, args);
console.log(result);

Задание 7.7.3

let users = [
  { name: "Nastya", age: 22 },
  { name: "Anna", age: 17 },
  { name: "Irina", age: 30 },
  { name: "Maria", age: 15 },
  { name: "Elena", age: 19 },
];
let adults = users.filter(function (user) {
  return user.age >= 18;
});
let names = adults.map(function (user) {
  return user.name;
});
console.log(names);

Задание 7.7.4

let person = {
  name: "Anna",
  age: 25
};
function setFullName(fullName) {
  this.fullName = fullName;
}
let setPersonFullName = setFullName.bind(person);
setPersonFullName("Ivan Petrov");
console.log(person.fullName);

Задание 7.7.5

function getUniqueSorted(numbers) {
  let uniqueNumbers = Array.from(new Set(numbers));
  uniqueNumbers.sort(function (a, b) {
    return a - b;
  });
  return uniqueNumbers;
}
let numbers = [5, 3, 8, 3, 1, 5, 7, 8, 2];
let result = getUniqueSorted(numbers);
console.log(result);