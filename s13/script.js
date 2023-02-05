//selecting element
console.log();
console.log();
console.log();
document.querySelector("header");
const head = document.querySelector(".header");
// document.querySelectorAll("");
// document.getElementById("");
// document.getElementsByName("");
// document.getElementsByTagName("");
//creating element
const messger = document.createElement("div");
messger.classList.add("cookie_mess");
messger.innerHTML = "AB CD EF<button class='btn_bt'>got it</button>";
// head.prepend(messger);
// head.append(messger);
head.before(messger);
// head.after(messger);
//delete element
document.querySelector(".btn_bt").addEventListener("click", function() {
    // messger.remove;
    messger.parentElement.removeChild(messger);
});
//style
messger.style.backgroundColor = "#37383d";
messger.style.width = "120%";
console.log(messger.style.height);
messger.style.height =
    Number.parseFloat(getComputedStyle(messger).height, 10) + 30 + "px";
document.documentElement.style.setProperty("--color-promary", "orangered");
const logo = document.querySelector(".logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
logo.alt = "beatiful minilasting lgo";
console.log(logo.getAttribute("src"));
//data atrributes
console.log(logo.dataset.versionNumber);
//classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");