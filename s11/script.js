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
const current = new Map([
    ["usd", "united states dollar"],
    ["eur", "euro"],
    ["gbt", "pot sterlng"],
]);
current.forEach(function(index, value) {
    console.log(`${index} : ${value}}`);
});
const currrentrra = new Set(["a", "b", "c", "a", "d"]);
console.log(currrentrra);
currrentrra.forEach(function(value, key, map) {
    console.log(`${value}: ${key} ${map}}`);
});