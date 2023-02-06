// Object literal
// const obj = {
//     name: "John",
//     sayHello: function() {
//         console.log(`Hello, I am ${this.name}`);
//     },
// };

// // Constructor function
// function Person(name) {
//     this.name = name;
//     this.sayHello = function() {
//         console.log(`Hello, I am ${this.name}`);
//     };
// }

// // Class syntax (ECMAScript 2015+)
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHello() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }
const Person = function(name, birtday) {
    this.name = name;
    this.birtday = birtday;
};
const jonas = new Person("abc", 2003);
console.log(jonas);
const a = new Person("bbc", 2004);
const b = new Person("ccb", 2002);
console.log(a, b);
const jay = "jay";
//instanceof trong JavaScript là một toán tử, cho phép kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một constructor (lớp) nào đó hay không.
console.log(jay instanceof Person);