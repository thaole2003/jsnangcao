"use strict";
//Phương push()thức thêm các mục mới vào cuối một mảng.

// Phương push()thức thay đổi độ dài của mảng.

// Phương push()thức trả về độ dài mới.
// const bookings = [];
// const createBooking = function(
//     flightNum,
//     numPasssengers,
//     price = 99 * numPasssengers
// ) {
//     const booking = {
//         flightNum,
//         numPasssengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("LH123", "a", 2);
// createBooking("LH123", undefined);
// console.log(bookings);
//sss129
// const flight = "LH123";
// const jonas = {
//     name: "jons scha",
//     passport: 1213,
// };
// const checkIn = function(flightNum, passenger) {
//     flightNum = "LH199";
//     passenger.name = "Mr" + passenger.name;
//     if (passenger.passport == 1213) {
//         console.log("flighted");
//     } else {
//         console.log("warning");
//     }
// };
// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
//     //trunc trả về phần nguyên 1 số
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);
//First-class function
//First-class function hay còn gọi là chức năng hạng nhất, dịch ra như vậy cho nó đúng việc dịch thuật thôi chứ chẳng có ý nghĩa gì cả. Đừng cố hiểu kỹ, vì bạn ngày nào chả thực hiện việc đó. 3 đặc điểm cần nhớ khi nói đến First class function đó chính là: Gán một biến cho một hàm
//higher-order functions
// Higher order functions là hàm hoạt động trên các hàm khác , bằng cách lấy chúng làm tham số hoặc trả về chúng. Nói một cách đơn giản, một Higher-Order function là hàm nhận một hàm dưới dạng đối số hoặc trả về hàm dưới dạng đầu ra. Ví dụ, Array. prototype.
//131:Functions Accepting Callback Functions
const oneWord = function(str) {
    return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), others].join(" ");
};
// console.log(upperFirstWord("a b c"));
const tranformer = function(str, fn) {
    console.log(`Origannal string ${str}`);
    console.log(`tranformer string ${fn(str)}`);
    console.log(`tranformer string ${fn.name}`);
};
tranformer("jafoa fkan", oneWord);
tranformer("jafoa fkan", upperFirstWord);
const hight5 = () => {
    console.log("👅");
};
document.body.addEventListener("click", hight5);
["jonas", "martha", "adam"].forEach(hight5);