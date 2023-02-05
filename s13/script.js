// //selecting element
// console.log();
// console.log();
// console.log();
// document.querySelector("header");
// const head = document.querySelector(".header");
// // document.querySelectorAll("");
// // document.getElementById("");
// // document.getElementsByName("");
// // document.getElementsByTagName("");
// //creating element
// const messger = document.createElement("div");
// messger.classList.add("cookie_mess");
// messger.innerHTML = "AB CD EF<button class='btn_bt'>got it</button>";
// // head.prepend(messger);
// // head.append(messger);
// head.before(messger);
// // head.after(messger);
// //delete element
// document.querySelector(".btn_bt").addEventListener("click", function() {
//     // messger.remove;
//     messger.parentElement.removeChild(messger);
// });
// //style
// messger.style.backgroundColor = "#37383d";
// messger.style.width = "120%";
// console.log(messger.style.height);
// messger.style.height =
//     Number.parseFloat(getComputedStyle(messger).height, 10) + 30 + "px";
// document.documentElement.style.setProperty("--color-promary", "orangered");
// const logo = document.querySelector(".logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// logo.alt = "beatiful minilasting lgo";
// console.log(logo.getAttribute("src"));
// //data atrributes
// console.log(logo.dataset.versionNumber);
// //classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c");
// ///
// const btnScroll = document.querySelector("btn_scroll_to");
// const section1 = document.querySelector("#section_1");
// btnScroll.addEventListener("click", function() {
//     const s1cooords = section1.getBoundingClientRect();
//     console.log(s1cooords);
//     console.log(e.target.getBoundingClientRect());
//     console.log("current scroll", window.pageXOffset, pageYOffset);
//     console.log(
//         "heigh,withd viewport",
//         document.documentElement.clientHeight,
//         document.documentElement.clientWidth
//     );
//     window.scrollTo({
//         left: s1cooords.left + window.pageXOffset,
//         top: s1cooords.top + window.pageYOffset,
//         behavior: "smooth",
//     });
//     section1.scrollIntoView({ behavior: "smooth" });
// });
// const h1 = document.querySelector("h1");
// const alertH1 = function(e) {
//     alert("addEventListener:great");
// };
// h1.addEventListener("mouseenter", alertH1);
// // h1.onmouseenter = function(e) {
// //     alert("onmouseenter:great");
// // };
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// const ranDomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//     `rgb(${ranDomInt(0, 255)},${ranDomInt(0, 255)},${ranDomInt(0, 255)})`;
// document.querySelector(".nav_link").addEventListener("click", function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log("Link", e.target, e.currentTarget);
//     console.log(e.currentTarget === this);
// });
// document.querySelector(".nav_links").addEventListener("click", function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log("Container", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log("Nav", e.target, e.currentTarget);
// });
// page navigator
// document.querySelectorAll(".nav_link").forEach(function(el) {
//     el.addEventListener("click", (e) => {
//         e.preventDefault();

//         if (e.target.classList.contains("nav_link")) {
//             const id = this.getAttribute("href");
//             console.log(id);
//             document.querySelector(id).scrollIntroView({ behavior: "smooth" });
//         }
//     });
// });
// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll("highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// // h1.firstElementChild.style.color = "black";
// // h1.lastElementChild.style.color = "blue";
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// // h1.closest(".header").style.background = "var (--geadient-secondary)";
// h1.closest("h1").style.background = "var (--geadient-secondary)";
// //going sideWays
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//     if (el !== h1) {
//         el.style.transfrom = "scale(0.5)";
//     }
// });
//tabled component
const tabs = document.querySelectorAll(".openration_tab");
const tabContainer = document.querySelector(".openration_tab_container");
const tabContent = document.querySelector(".openration_content");
tabContainer.addEventListener("click", function(e) {
    const clicked = e.target.closest(".openration_tab");
    console.log(clicked);
});
if (!clicked) return;

tabs.forEach((t) => t.classList.remove("openration_tab_active"));
clicked.classList.add("openration_tab_active");