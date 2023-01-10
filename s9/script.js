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
};
//Destructuring_Objects
const { name, openingHour, categories } = restauraut;
console.log(name, openingHour, categories);

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