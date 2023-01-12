const day = ["sat", "thu", "fri", "sun", "thi", "to"];
// const openingHour = {
//     sat: {
//         open: 12,
//         close: 22,
//     },
//     thu: {
//         open: 0,
//         close: 24,
//     },
//     [weekday[3]]: {
//         open: 2,
//         close: 20,
//     },
// };

const restauraut = {
    name: "Classic Anio",
    location: "23th Itali",
    categories: ["A", "B", "C"],
    startMenu: ["Ga", "melon", "origin"],
    mainMenu: ["Piza", "Fish", "Meat"],
    openingHour: {
        sat: {
            open: 12,
            close: 22,
        },
        thu: {
            open: 0,
            close: 24,
        },
        [day[3]]: {
            open: 2,
            close: 20,
        },
    },

    oder: function(startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({ address, mainIndex, startMenu, time }) {
        console.log(
            "xin chào, đơn hàng của bạn sẽ giao tới " +
            address +
            "gồm : " +
            this.startMenu[startMenu],
            this.mainMenu[mainIndex] + "lúc" + time
        );
    },
    oderPasta: function(ing1, ing2, ing3) {
        console.log(`here is ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function(abc1, ...otherabc) {
        console.log(abc1);
        console.log(otherabc);
    },
};
//Maps
// new Map()	Creates a new Map object
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// clear()	Removes all the elements from a Map
// delete()	Removes a Map element specified by a key
// has()	Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	Returns an iterator object with the keys in a Map
// values()	Returns an iterator object of the values in a Map
const rest = new Map();
rest
    .set(1, "abc")
    .set("name", "bca")
    .set(true, "opened")
    .set(false, "closed")
    .set("open", 7)
    .set("categori", ["Piza", "Fish", "Meat"])
    .set(document.querySelector("h1"), "this is h1");
console.log(rest.has(1));
console.log(rest.get(true));
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
rest.delete(1);
console.log(rest);
console.log(rest.size);
//sets
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists
// clear()	Removes all elements from a Set
// forEach()	Invokes a callback for each element
// values()	Returns an Iterator with all the values in a Set
// keys()	Same as values()
// entries()	Returns an Iterator with the [value,value] pairs from a Set
// const OderSet = new Set(["b", "a", "b", "c", "d"]);
// console.log(OderSet);
// console.log(new Set(["Abc"]));

// console.log(OderSet.size);
// console.log(OderSet.has("a"));
// console.log(OderSet.add("aa"));
// OderSet.delete("b");
// OderSet.clear();
// console.log(OderSet);

//Object.keys()thức tĩnh trả về một mảng gồm các tên thuộc tính có khóa chuỗi có thể đếm được của chính đối tượng đã cho.
// const property = Object.keys(restauraut.openingHour);
// let openhour = `mở cửa ${property.length}  ngày : `;
// console.log(property);
// for (const day of property) {
//     openhour += day + ",";
// }
// console.log(openhour);

// //Object.values()thức tĩnh trả về một mảng các giá trị thuộc tính khóa chuỗi có thể đếm được của chính một đối tượng nhất định.
// const value = Object.values(restauraut.openingHour);
// console.log(value);
// //Object.entries()thức tĩnh trả về một mảng gồm các cặp khóa-giá trị thuộc tính khóa chuỗi có thể đếm được của chính một đối tượng nhất định.
// const entries = Object.entries(restauraut.openingHour);
// console.log(entries);
//Optional Chaining (?.)  trả về các giá trị pointer được nested hoặc undefined/null nếu không tồn tại.
// if (restauraut.openingHour && restauraut.openingHour.sat) {
//     console.log(restauraut.openingHour.sat.open);
// }
// for (let day of day) {
//     const open = restauraut.openingHour.day ? .open;
//     console.log(open);
// }
// //method
// console.log(restauraut.oder ? .(0, 1) ? ? 'Method does not exit');
// console.log(restauraut.oderaasf ? .(0, 1) ? ? 'Method does not exit');
//array

// console.log(restauraut);
// Looping Arrays: The for-of Loop
// const arrM = [4, 3, 1, 2, 5];
// for (const item of arrM.entries()) {
//     console.log(item[0] + 1 + " : " + item[1]);
// }
//Logical Assignment Operators
// const rest1 = {
//     name: "a",
//     number: 20,
// };
// const rest2 = {
//     name: "b",
//     miss: "c",
// };
//Coding Challenge #1

// rest1.number = rest1.number || 10;
// rest2.number = rest2.number || 10;
// rest1.number || = 10;
// rest2.number || = 10;
// rest1.number ? ? = 10;
// rest2.number ? ? = 10;
// rest2.miss = rest2.miss ? ? 'aaa';
// rest1.over = rest1.over && "abc";
// rest2.over = rest2.over && "abc";
// rest1.over && = "abc";
// rest2.over && = "abc";

// console.log(rest1);
// console.log(rest2);
// Short Circuiting (&& and ||)
// console.log("ddd" || 3);
// console.log("" || "jonas ");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "hello" || 23 || null);
// restauraut.numGuest = 23;
// const Guest1 = restauraut.numGuest ? restauraut.numGuest : 10;
// console.log(Guest1);
// const Guest2 = restauraut.numGuest || 10;
// console.log(Guest2);
// console.log("--AND--");
// console.log(0 && 3);
// console.log(3 && "AAA");
// console.log(0 && "a");
// if (restauraut.orderPizza) {
//     restauraut.orderPizza("món 1", "món 2");
// }
// restauraut.orderPizza && restauraut.orderPizza("món 1", "món 2");

// The Nullish Coalescing Operator (??) nullish coalescing operator (??) để chỉ kiểm tra giá trị null hoặc undefined bên vế trái.
// restauraut.numGuest == 0;
// const Guest = restauraut.numGuest || 10;
// console.log(Guest);

// //NUllish: null or undefined (0 or '')
// const GuestCorrect = restauraut.numGuest ? ? 10;
// console.log(GuestCorrect);

// console.log(object);
// //spread ,beacase on right side of
// const arrNew = [1, 2, ...[3, 4, 5]];
// console.log(arrNew);
// const [e, f, ...other] = [5, 6, 7, 5, 3, 2];
// console.log(e, f, other);
// const [mon1, , mon2, ...monother] = [
//     ...restauraut.startMenu,
//     restauraut.mainMenu,
// ];
// console.log(mon1, mon2, monother);

// const { sat, ...allDay } = restauraut.openingHour;
// console.log(allDay);

// // toán tử spread Toán tử spread giải nén các phần tử trong một mảng
// const arr = [1, 2, 3];
// const newArr = [...arr, 4, 5];
// // console.log(...newArr);
// //coppy array
// const arrCoppy = [...restauraut.startMenu];
// // console.log(arrCoppy);
// //join array
// const menu = [...restauraut.startMenu, ...restauraut.mainMenu];
// // console.log(menu);
// //iterables:array,string ,maps,set not object
// const str = "JONHNY";
// const letter = [...str, "", "E"];

// function addSum(...number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += number[i];
//     }
//     console.log(sum);
// }
// addSum(3, 4, 5);
// restauraut.orderPizza("món ngon 1", "món k ngon", "món bth");
// console.log(letter);
// const ingredient = [
//     prompt("Let's is 1 "),
//     prompt("Let's is 2 "),
//     prompt("Let's is 3 "),
// ];
// restauraut.oderPasta((ingredient[0], ingredient[1], ingredient[2]));
// restauraut.oderPasta(...ingredient);
// const restaurautNew = { fonderIn: 1998, ...restauraut, founder: "Guiders" };
// console.log(restaurautNew);
// const restaurautCoppy = {...restauraut };
// console.log(restaurautCoppy);
// restaurautCoppy.name = "abcdef";
// console.log(restaurautCoppy.name);
// console.log(restauraut.name);
// const today = new Date();
// const time =
//     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// //Destructuring_Objects
// const { name, openingHour, categories } = restauraut;
// const currentHours = restauraut.orderDelivery({
//     mainDeli: "gà chiên",
//     time: time,
//     address: "322 My dinh",
//     mainIndex: 1,
//     startMenu: 1,
// });
// // console.log(name, openingHour, categories);
// const {
//     name: nameRestaurant,
//     openingHour: hours,
//     categories: tags,
// } = restauraut;
// // console.log(nameRestaurant, hours, tags);
// const { menu = [], startMenu: starter = [] } = restauraut;
// // console.log(menu, starter);
// //mutating variables
// let ab = 1;
// let bc = 2;
// const objj = { ab: 3, bc: 4, ca: 5 };
// ({ ab, bc } = objj);
// // console.log(ab, bc);
// //nested objects
// const {
//     fri: { open: op, close: cl },
// } = openingHour;
// // console.log(op, cl);

// //destructuring_array
// const arr = [1, 2, 3];
// // console.log(arr);
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// // console.log(x, y);
// let [first, second] = restauraut.categories;
// // console.log(first, second);
// // const three = first;
// // first = second;
// // second = three;
// // console.log(first, second);
// [first, second] = [second, first];
// // console.log(first, second);
// // console.log(restauraut.order(0, 1));
// const funoffun = [1, 2, [3, 4], 5];
// // console.log(funoffun[2][0]);
// const [p = 1, q = 1, r = 1] = [8, 1, 2];
// // console.log(p, q, r);