// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       res.json(), console.log(res);
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`you are in ${data.city},${data.country}`);
//       return fetch(`https:restcountries.eu/rest/v2/name${data.country}`);
//     })
//     .then((data) => renderCoutry(data[0]))
//     .catch((err) => console.error(err.message));
// };
// // whereAmI(52.508, 13.381);
// // whereAmI(24.708, 11.381);
// // whereAmI(11.508, 22.381);
// // whereAmI(-33.933, 18.474);

//code changele 2
const image = document.querySelector(".image");
const wait = function (seconds) {
  return new Promise(function (resole) {
    setTimeout(resole, seconds * 1000);
  });
};
function createImage(imgPath) {
  return new Promise(function (resole, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      image.append(img);
      resole(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("img not found"));
    });
  });
}
createImage("img/banner3.jpg")
  .then(function (img) {
    curentImg = img;
    console.log("img loaded 1");
    return wait(2);
  })
  .then(function () {
    curentImg.style.display = "none";

    return createImage("img/imgaa.png");
  })
  .then((img) => {
    curentImg = img;
    console.log("img load 2");
    return wait(2);
  })
  .then(function () {
    curentImg.style.display = "none";
  })
  .catch((err) => console.log(err));
