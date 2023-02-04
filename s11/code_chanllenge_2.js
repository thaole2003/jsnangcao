const calcAverageHumanAge = (ages) => {
    const humer = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
    // const humer1 = humer.filters((age) => age > 18);
    const humer2 = humer.reduce((acc, mov, i, arr) => {
        return acc + mov / arr.length;
    }, 0);
    // console.log(humer1);
    console.log(humer2);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);