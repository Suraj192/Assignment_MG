alert("Welcome to Java Script");
// function hello() {
//   return "hello";
// }
// console.log(hello());
let ind = document.querySelector("#inputdata");
console.log(ind);
let he = document.getElementsByTagName("h1");
console.log(he);
let an = document.querySelector("h1");
console.log(an);
let the = document.getElementsByTagName("h1")[0];
console.log(the);
let evl = document.querySelector("#inputdata");
const hello = (event) => {
  event.preventDefault();
  let price = document.querySelector("#price").value;
  console.log(price);
};
evl.addEventListener("submit", hello);
console.log(document.querySelector("#mybtn"));

let formData = {};
formData["licence"] = "sdf-343";
formData["maker"] = "kia";
formData["owner"] = "Suraj";
formData["model"] = "niro";
formData["price"] = "32000";
formData["color"] = "white";

console.log(formData.length);
