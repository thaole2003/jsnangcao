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
const flight = "LH123";
const jonas = {
    name: "jons scha",
    passport: 1213,
};
const checkIn = function(flightNum, passenger) {
    flightNum = "LH199";
    passenger.name = "Mr" + passenger.name;
    if (passenger.passport == 1213) {
        console.log("flighted");
    } else {
        console.log("warning");
    }
};
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
    //trunc trả về phần nguyên 1 số
};

newPassport(jonas);
checkIn(flight, jonas);
// console.log(jonas);