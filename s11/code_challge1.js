checkDogs = (dogsJulia, dogsKate) => {
    const dogsJuliaCoppy = dogsJulia.slice();
    dogsJuliaCoppy.splice(0, 1);

    dogsJuliaCoppy.splice(-2);
    const dogs = dogsJuliaCoppy.concat(dogsKate);
    dogs.forEach(function(value, index) {
        if (value >= 3) {
            console.log("chó số " + `${index + 1}` + "là chó trưởng thành");
        } else {
            console.log("chó số " + `${index + 1}` + "là chó trẻ con");
        }
    });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);