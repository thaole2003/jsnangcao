// __proto__ trong JavaScript là một thuộc tính của một đối tượng, nó chỉ ra prototype của đối tượng đó. Prototype là một đối tượng mà các đối tượng khác có thể kế thừa từ nó. Bằng cách sử dụng __proto__, các thuộc tính và phương thức của prototype có thể truy cập và sử dụng từ các đối tượng kế thừa. Tuy nhiên, việc sử dụng __proto__ không khuyến khích vì nó là một tính năng đặc biệt và không chuẩn xác cho các trình duyệt khác nhau. Thay vào đó, sử dụng Object.getPrototypeOf() hoặc Object.setPrototypeOf() để truy cập và thay đổi prototype.
// // Object literal
// // const obj = {
// //     name: "John",
// //     sayHello: function() {
// //         console.log(`Hello, I am ${this.name}`);
// //     },
// // };

// // // Constructor function
// // function Person(name) {
// //     this.name = name;
// //     this.sayHello = function() {
// //         console.log(`Hello, I am ${this.name}`);
// //     };
// // }

// // // Class syntax (ECMAScript 2015+)
// // class Person {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHello() {
// //         console.log(`Hello, I am ${this.name}`);
// //     }
// // }
// const Person = function(name, birtday) {
//     this.name = name;
//     this.birtday = birtday;
// };
// const jonas = new Person("abc", 2003);
// console.log(jonas);
// const a = new Person("bbc", 2004);
// const b = new Person("ccb", 2002);
// console.log(a, b);
// const jay = "jay";
// //instanceof trong JavaScript là một toán tử, cho phép kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một constructor (lớp) nào đó hay không.
// console.log(jay instanceof Person);
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birtday);
// };
// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// //isPrototypeOf trong JavaScript là một phương thức của đối tượng Object.prototype. Nó cho phép kiểm tra xem prototype của một đối tượng nào đó có nằm trong chain của prototype của một đối tượng khác hay không.
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(b));
// console.log(Person.prototype.isPrototypeOf(Person));
// //prototyeOffLinkedObject
// Person.prototype.scpecies = "A B C";
// console.log(jonas.scpecies, b.scpecies);
// // hasOwnProperty là một phương thức của đối tượng Object trong JavaScript.Nó trả về một giá trị Boolean xác định xem đối tượng có chứa một thuộc tính riêng(không kế thừa) với tên cho trước hay không.
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("name"));
// console.log("                                                        ");
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person.prototype.constructor);
// const ab = Array(3, 4, 5, 6);
// console.log(ab.__proto__);
// Array.prototype.unique = function() {
//     return [...new Set(this)];
// };
// console.log(ab.unique);
// class ABC {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     calcAge() {
//         console.log(2030 - this.age);
//     }
// }
// const abcc = new ABC("THẢO", 2003);
// console.log(abcc);
// abcc.calcAge();
// ABC.prototype.greet = function() {
//     console.log("hey babe" + this.name);
// };
// console.log(abcc.__proto__ === ABC.prototype);
// abcc.greet();
// const acout = {
//     onwer: "a",
//     movment: [2, 3, 4, 5],
//     get lastest() {
//         //Array.prototype.pop() trong JavaScript là một method của mảng, nó xóa phần tử cuối cùng của mảng và trả về giá trị của phần tử đó. Method này sẽ thay đổi giá trị của mảng gốc và trả về giá trị của phần tử cuối cùng đã xóa
//         return this.movment.slice(-1).pop();
//     },
//     set lastest(mov) {
//         this.movment.push(mov);
//     },

// // };
// class Rectangle {
//     static calculateArea(width, height) {
//         return width * height;
//     }
// }

// const area = Rectangle.calculateArea(10, 20);
// console.log(area); // 200
// const Person = function(name, birtday) {
//     this.name = name;
//     this.birtday = birtday;
// };
// Person.prototype.calcAge = function() {
//     return 2033 - this.birtday;
// };
// const Student = function(name, birtday, course) {
//     // this.name = name;
//     // this.birtday = birtday;
//     Person.call(this, name, birtday);
//     this.course = course;
// };
// //Object.create là một method trong JavaScript có sẵn trong Object built-in object. Nó tạo ra một object mới với prototype chỉ định và các thuộc tính (optional). Điều này cho phép bạn xây dựng prototype chain mới mà không cần sử dụng constructor functions.
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.intro = function() {
//     console.log(`my name is ${this.name} and i study ${this.course}`);
// };

// const mike = new Student("mike", 2002, "js");
// mike.intro();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// class Studen1 extends Student {
//     constructor(name, birtday, course) {
//         super(name, birtday);
//         this.course = course;
//     }
//     intro = function() {
//         console.log(`my name is ${this.name} and i study ${this.course}`);
//     };
// }
// const martha = new Studen1("Martha", 2012, "php");
// martha.intro();
// const personProto = {
//     calcAge() {
//         return 2033 - this.birtday;
//     },
//     init(name, birtday) {
//         this.name = name;
//         this.birtday = birtday;
//     },
// };
// const steven = Object.create(personProto);
// const Studentproto = Object.create(personProto);
// Studentproto.init = function(name, birtday, course) {
//     personProto.init.call(this, name, birtday);
//     this.course = course;
// };
// Studentproto.intro = function() {
//     console.log(`my name is ${this.name} and i study ${this.course}`);
// };
// const jay = Object.create(Studentproto);
// jay.init("jay", 2010, "java");
// jay.intro();
// console.log(jay.calcAge());
//Private Class Fields và Private Class Methods trong JavaScript là các thuộc tính và phương thức của một class mà chỉ có thể truy cập bên trong class. Chúng không thể truy cập bởi các instances hoặc bên ngoài class.

// Tính năng này đã được thêm vào JavaScript từ phiên bản ECMAScript 2021. Để tạo ra một private class field, bạn cần sử dụng từ khoá # trước tên của thuộc tính.
class Account {
    //public fields
    // locale = navigator.language;
    //private fields

    // movment = [];
    // pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this._movement = [];
        this.locale = navigator.language;
        //navigator là một built-in object trong JavaScript, nó chứa thông tin về trình duyệt web đang sử dụng. Bạn có thể sử dụng navigator để lấy thông tin về user agent, platform, và các tính năng cụ thể của trình duyệt.
        console.log(`thank for opening an ac ${this.owner}`);
    }
    depossit(val) {
        this._movement.push(val);
    }
    withdraw(val) {
        this.depossit(-val);
    }
    apend(val) {
        return true;
    }
    getmoment() {
        return this._movement;
    }
    request(val) {
        if (this.apend(val)) {
            this.depossit(val);
            console.log("aaaa");
        }
    }
}
const acc1 = new Account("jonas", "eur", "111");
// acc1.movement.push(25);
acc1.depossit(25);
acc1.withdraw(150);
acc1.request(1000);
acc1.depossit(40).withdraw(10).request(19);
console.log(acc1.getmoment());
console.log(acc1.getmoment());
console.log(acc1);