//Callback trong lập trình là một hàm hoặc phương thức được truyền vào như là một tham số trong một hàm
// hoặc phương thức khác, và được gọi sau khi hàm hoặc phương thức gốc hoàn thành.
//  Callback thường được sử dụng để giải quyết việc tương tác giữa nhiều hàm hoặc phương thức trong một chương trình.
// API (Application Programming Interface) trong lập trình là một tập hợp các giao diện, protocol và các quy tắc cho phép các phần mềm hoặc hệ thống tương tác với nhau. API cho phép một phần mềm gọi các dịch vụ, tính năng hoặc dữ liệu của một hệ thống khác mà không cần biết chi tiết về cách thức hoạt động của hệ thống đó. Ví dụ, một ứng dụng web có thể sử dụng API của một nền tảng để tải dữ liệu từ nền tảng đó và hiển thị cho người dùng.
//API là 1 phần mềm có thể được sử dụng bởi phần mềm khác để cho phép các ứng dụng giao tiếp với nhau(dom api,geolocation api,own class api.online api)
//api online :UD chạy trên máy chủ,nhận yêu cầu dữ liệu gửi laị dưới dạng phản hồi
//JavaScript không đồng bộ là một kỹ thuật cho phép JavaScript thực hiện các tác vụ mà không cần chờ cho tác vụ trước hoàn thành. Khi một tác vụ không đồng bộ đang diễn ra, trình duyệt có thể tiếp tục thực hiện các tác vụ khác, chẳng hạn như xử lý sự kiện, và tác vụ đang diễn ra sẽ được hoàn thành sau đó. Điều này có thể giúp cho trình duyệt không bị treo khi phải chờ cho một tác vụ dài để hoàn thành, và giúp cho trải nghiệm người dùng tốt hơn.
//Ajax (Asynchronous JavaScript and XML) là một kỹ thuật cho phép các ứng dụng web gửi và nhận dữ liệu từ máy chủ mà không cần tải lại trang web hoặc tải lại cả trang. Điều này có nghĩa là bạn có thể cập nhật một phần của trang mà không cần tải lại toàn bộ trang.

// Ajax sử dụng JavaScript để gửi và nhận dữ liệu từ máy chủ mà không cần tải lại trang web. Nó sử dụng XMLHttpRequest để gửi và nhận dữ liệu mà không cần tải lại trang, hoặc sử dụng Fetch API. Ajax có thể sử dụng để tải dữ liệu từ máy chủ, cập nhật dữ liệu mà không cần tải lại trang, hoặc gửi dữ liệu đến máy chủ mà không cần tải lại trang.

//throw new trong JavaScript là một cú pháp để ném ra một ngoại lệ. Nó cho phép bạn tạo một đối tượng ngoại lệ và ném nó ra, để trình duyệt hoặc chương trình của bạn có thể biết rằng có một lỗi xảy ra và cần xử lý nó.
const btn_country = document.querySelector(".btn_country");
const country = document.querySelector(".country");
const request = new XMLHttpRequest();
const renderCoutry = function (data, className = "") {
  {
    const html = `
    <div class="country ${className}">
    <img src="${data.flag}" alt="">
    <div>
        <h3>${data.name}</h3>
        <h4>${data.region}</h4>
        <p>${(data.population / 1000000).toFixed(1)}</p>
        <p>${data.languages[0].name}</p>
        <p>${data.currencies[0].name}</p>
    </div>
    </div>
    `;
    country.insertAdjacentHTML("beforeend", html);
  }
};
// const getcoutryandNeiber = function (countryy) {
//   request.open("GET", `https://restcountries.com/v2/name/${countryy}`);
//   request.send();
//   console.log(request.responseText);
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCoutry(data);
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //ajax call coutry 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCoutry(data2, "neighbour");
//     });
//   });
// };
// getcoutryandNeiber("portugal");

// getcoutry("germany");
// // getcoutryandNeiber("usa");
// const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);
// const renderErr = function (msg) {
//   country.insertAdjacentText("beforeend", msg);
// };
// const getcoutryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCoutry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCoutry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err}😵‍💫`);
//     });
// };
// btn_country.addEventListener("click", function () {
//   getcoutryData("usa");
//   renderErr("something went wrong");
// });
// console.log("Test start");
// setTimeout(() => console.log("o sec timer"), 0);
// Promise.resolve("resoled promise 2").then((res) => {
//   for (let i = 0; i < 10; i++) {
//     console.log(res);
//   }
// });
// console.log("test end");
// const lotteryPromise = new Promise(function (resole, reject) {
//   console.log("lotte draw is happening");
//   setTimeout(function () {
//     if (Math.random() * 100 > 3.5) {
//       console.log("you win ");
//     } else {
//       reject(new Error("you lost your money"));
//     }
//   }, 2000);
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resole) {
//     setTimeout(resole, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log("i wanted for 1 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("i wanted for 2 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("i wanted for 3 seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("i wanted for 4 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("4 second passed"));
// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("problem!")).catch((x) => console.error(x));
// const getPosition = function () {
//   return new Promise(function (resole, reject) {
//     navigator.geolocation.getCurrentPosition(resole, reject);
//   });
// };
// // getPosition().then((pos) => console.log(pos));

// const whereAmI = () => {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
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

// btn_country.addEventListener("click", whereAmI);
const getPosition = function () {
  return new Promise(function (resole, reject) {
    navigator.geolocation.getCurrentPosition(resole, reject);
  });
};
//Promise và Async/Await là hai công cụ mạnh mẽ trong Javascript để giải quyết vấn đề bất đồng bộ.

// Promise là một đối tượng trong Javascript, mà cho phép bạn chạy một tác vụ bất đồng bộ và thông báo kết quả sau khi tác vụ đó hoàn thành hoặc that bại. Bạn có thể sử dụng Promise để xử lý các tác vụ như gửi một yêu cầu HTTP, đọc tệp, hoặc thực hiện một tác vụ tính toán phức tạp.

// Async/Await là một từ khoá trong Javascript, cho phép bạn viết mã bất đồng bộ một cách dễ đọc hơn với cú pháp giống như mã đồng bộ. Async/Await cho phép bạn gọi một Promise và chờ đợi kết quả của nó trước khi tiếp tục thực hiện các lệnh tiếp theo.
const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const data = await res.json();
    console.log(data);
    renderCoutry(data[0]);
  } catch {
    (error) => {
      console.error(error + "😵‍💫");
    };
  }
};
// whereAmI();
// whereAmI();
// whereAmI();
// console.log("a");

//try...catch là một cấu trúc trong Javascript cho phép bạn xử lý các lỗi (exceptions) trong mã của bạn. Nó cho phép bạn chạy một đoạn mã trong một khối try, và nếu có một lỗi xảy ra trong khối này, nó sẽ nhảy tới khối catch để xử lý lỗi đó.

// Ví dụ:

// javascript
// Copy code
// try {
//   const result = someFunctionThatMightThrowAnError();
//   console.log(result);
// } catch (error) {
//   console.error('An error occurred:', error);
// }
// Trong ví dụ trên, chúng ta gọi một hàm someFunctionThatMightThrowAnError và lưu kết quả của nó vào biến result. Nếu có lỗi xảy ra trong quá trình gọi hàm này, nó sẽ bị ném ra và được xử lý bởi khối catch. Trong khối catch, chúng ta có thể in ra thông tin về lỗi để giúp debug.

const getJSON = (url, erroeMsg = "something went wrong") => {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${erroeMsg}  ${res.status}`);
    return res.json();
  });
};
const get3Country = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c1}`),
    ]);
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    console.log(data.map((a) => a[0].capital));
  } catch (error) {
    console.log(error);
  }
};

get3Country("portugal", "usa", "brazil");
