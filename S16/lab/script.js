const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      res.json(), console.log(res);
    })
    .then((data) => {
      console.log(data);
      console.log(`you are in ${data.city},${data.country}`);
      return fetch(`https:restcountries.eu/rest/v2/name${data.country}`);
    })
    .then((data) => renderCoutry(data[0]))
    .catch((err) => console.error(err.message));
};
// whereAmI(52.508, 13.381);
// whereAmI(24.708, 11.381);
// whereAmI(11.508, 22.381);
// whereAmI(-33.933, 18.474);
