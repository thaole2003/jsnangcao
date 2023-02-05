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