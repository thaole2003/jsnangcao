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
Person.prototype.calcAge = function() {
    console.log(2037 - this.birtday);
};
jonas.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
//isPrototypeOf trong JavaScript là một phương thức của đối tượng Object.prototype. Nó cho phép kiểm tra xem prototype của một đối tượng nào đó có nằm trong chain của prototype của một đối tượng khác hay không.
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(b));
console.log(Person.prototype.isPrototypeOf(Person));
//prototyeOffLinkedObject
Person.prototype.scpecies = "A B C";
console.log(jonas.scpecies, b.scpecies);
// hasOwnProperty là một phương thức của đối tượng Object trong JavaScript.Nó trả về một giá trị Boolean xác định xem đối tượng có chứa một thuộc tính riêng(không kế thừa) với tên cho trước hay không.
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("name"));
console.log("                                                        ");
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
const ab = Array(3, 4, 5, 6);
console.log(ab.__proto__);
Array.prototype.unique = function() {
    return [...new Set(this)];
};
console.log(ab.unique);