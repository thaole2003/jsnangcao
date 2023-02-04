// let arr = ["a", "b", "c", "d", "e", "f"];
// //slice
// // console.log(arr.slice(2, 3));
// // console.log(arr.slice(-2));
// // console.log(arr.slice(1, -2));
// console.log(arr.slice(2));
// // console.log(...arr);
// //splice
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// let arr = ["a", "b", "c", "d", "e", "f"];
// let arr2 = ["i", "j", "o", "r"];
// console.log(arr2.reverse());
// reverseđảo ngược trật tự
//concat nối mảng
//joinPhương thức array join() trong Javascript kết nối tất cả các phần tử trong một mảng thành một chuỗi.
// console.log(arr.concat(arr2));
// console.log(arr.join("-"));
//143:The new at Method
// const arr = [12, 122, 33];
// console.log(arr[0]);
// console.log(arr.at(0));
//get last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice((-1)[0]));
// console.log(arr.at(-1));
//144:Looping Arrays: forEach
// Math. abs() được sử dụng để tính giá trị tuyệt đối của một số.
// const movement = [100, 150, -200, 300, -400, -600, 700];
// for (const [i, movements] of movement.entries()) {
//     if (movements > 0) {
//         console.log(`aaa ${i} : ${movements}`);
//     } else {
//         console.log(`bbb ${i} : ${Math.abs(movements)}`);
//     }
// }
// movement.forEach(function(movements, i, arr) {
//     if (movements > 0) {
//         console.log(`aaa ${i} ${movements}`);
//     } else {
//         console.log(`bbb ${i} ${Math.abs(movements)}`);
//     }
// });
// 145: foreact with map and sets
//Set trong JavaScript là một loại object dùng để lưu trữ dữ liệu mà không trùng lặp.
// Map trong JavaScript là một loại object cho phép lưu trữ dữ liệu theo kiểu key-value
// const current = new Map([
//     ["usd", "united states dollar"],
//     ["eur", "euro"],
//     ["gbt", "pot sterlng"],
// ]);
// current.forEach(function(index, value) {
//     console.log(`${index} : ${value}}`);
// });
// const currrentrra = new Set(["a", "b", "c", "a", "d"]);
// console.log(currrentrra);
// currrentrra.forEach(function(value, key, map) {
//     console.log(`${value}: ${key} ${map}}`);
// });
//map,filter,reduce
//map trả về 1 mảng mới chứa kết quả của việc áp dụng 1 thao tác trên tất cả các phần tử mảng ban đầu
//filter trả về 1 mảng mới chứa các phần tử hỏa mãn 1 đkien đc chỉ định
//reduce giảm tất cả các phần tử mảng xuống 1 giá trị duy nhất(ví dụ cộng tất cả các phần tử lại với nhau)
const movement = [200, 450, -400, 3000, -500, -130, 70, 1300];
const eurToUsd = 1.1;
// const movementMap = movement.map(function(value) {
//     return value * eurToUsd;
// });
// console.log(movementMap);
// const arrayY = [];
// for (const alo of movement) {
//     arrayY.push(alo * eurToUsd);
// }
// console.log(arrayY);
// const a = movement.map((value, index) => {
//   return (
//     "aaa : " + `${index + 1}: ${value > 0 ? value : "bbb" + Math.abs(value)}`
//   );
// });
// console.log(a);
// const aaaa = (namee) => {
//     return namee
//         .toUpperCase()
//         .split(" ")
//         .map((nameee) => nameee[0])
//         .join("");
// };

// // const myname = namee.slice();

// console.log(aaaa("aaa bbb ccc"));
// const aa = movement.filter((a) => {
//     return a > 0;
// });
// console.log(aa);
// const bb = movement.filter((a) => {
//     return a < 0;
// });
// console.log(bb);
// console.log(movement);
// const blace = movement.reduce((acc, cur, i, arr) => {
//     // console.log(i, acc);
//     // console.log(i, cur);
//     return acc + cur;
// }, 100);
// console.log(blace);
// var blace2 = 0;
// for (const aa of movement) {
//     blace2 += aa;
//     console.log(blace2);
// }
// const max = movement.reduce((acc, mov) => {
//     if (acc > mov) {
//         return acc;
//     } else {
//         return mov;
//     }
// }, movement[0]);
// console.log(max);
// const eurToUsdd = 1.2;
// console.log(movement);
// const a = movement
//     .filter((mov) => mov > 0)
//     .map((aaaa, i, arr) => {
//         return aaaa * eurToUsd;
//     })
//     .reduce((acc, mov) => {
//         return acc + mov;
//     }, 0);
// console.log(a);
// const aveHUmeAa = (ages) => {
//     ages
//         .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//         .fiter((age) => age >= 18)
//         .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// };
// // console.log();
// const abc = aveHUmeAa[(5, 2, 4, 1, 15, 8, 3)];
// console.log(abc);
console.log(movement);
const a = movement.find((aa) => {
    return aa < 0;
});
console.log(a);