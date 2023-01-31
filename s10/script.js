"use strict";
//Phương push()thức thêm các mục mới vào cuối một mảng.

// Phương push()thức thay đổi độ dài của mảng.

// Phương push()thức trả về độ dài mới.
const bookings = [];
const createBooking = function(
    flightNum,
    numPasssengers,
    price = 99 * numPasssengers
) {
    const booking = {
        flightNum,
        numPasssengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", "a", 2);
createBooking("LH123", undefined);
// console.log(bookings);