const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach((dog) => (dog.recomentF = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
const dogofsarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogofsarah);
console.log(
    `dog of sarah is eat very ${
    dogofsarah.curFood > dogofsarah.recomentF ? "much" : "litte"
  }`
);
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recomentF)
    .map((dog) => dog.owners)
    .flat();
console.log(ownersEatTooMuch);
const ownersEatTooLitte = dogs
    .filter((dog) => dog.curFood < dog.recomentF)
    .flatMap((dog) => dog.owners);
console.log(ownersEatTooLitte);
console.log(ownersEatTooMuch.join(" and ") + "eat too much");
console.log(ownersEatTooLitte.join(" and ") + "eat too litte");
console.log(dogs.some((dog) => dog.curFood === dog.recomentF));
const checkEat = (dogss) =>
    dogss.some(
        (dog) =>
        dog.curFood > dog.recomentF * 0.9 && dog.curFood < dog.recomentF * 1.1
    );

console.log(checkEat(dogs));
// console.log(dogs.filter(checkEat));
const dogSorter = dogs.slice().sort((a, b) => a.recomentF - b.recomentF);
console.log(dogSorter);