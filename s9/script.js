const restauraut = {
    name: "Classic Anio",
    location: "23th Itali",
    categories: ["A", "B", "C"],
    startMenu: ["Ga", "melon"],
    mainMenu: ["Piza", "Fish"],
    openingHour: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 0,
            close: 24,
        },
        sat: {
            open: 2,
            close: 20,
        },
    },
    order: function(startIndex, mainIndex) {
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
};
const today = new Date();
const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//Destructuring_Objects
const { name, openingHour, categories } = restauraut;
const currentHours = restauraut.orderDelivery({
    mainDeli: "gà chiên",
    time: time,
    address: "322 My dinh",
    mainIndex: 1,
    startMenu: 1,
});
// console.log(name, openingHour, categories);
const {
    name: nameRestaurant,
    openingHour: hours,
    categories: tags,
} = restauraut;
// console.log(nameRestaurant, hours, tags);
const { menu = [], startMenu: starter = [] } = restauraut;
// console.log(menu, starter);
//mutating variables
let ab = 1;
let bc = 2;
const objj = { ab: 3, bc: 4, ca: 5 };
({ ab, bc } = objj);
// console.log(ab, bc);
//nested objects
const {
    fri: { open: op, close: cl },
} = openingHour;
// console.log(op, cl);

//destructuring_array
const arr = [1, 2, 3];
// console.log(arr);
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
// console.log(x, y);
let [first, second] = restauraut.categories;
// console.log(first, second);
// const three = first;
// first = second;
// second = three;
// console.log(first, second);
[first, second] = [second, first];
// console.log(first, second);
// console.log(restauraut.order(0, 1));
const funoffun = [1, 2, [3, 4], 5];
// console.log(funoffun[2][0]);
const [p = 1, q = 1, r = 1] = [8, 1, 2];
// console.log(p, q, r);