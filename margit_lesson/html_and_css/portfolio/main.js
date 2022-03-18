const header = document.querySelector("header");
const button = document.querySelector("#backToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
    button.style.display = "block";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

const readMore = (dot, moretext, btntext) => {
  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btntext.innerHTML = "Read more";
    moretext.style.display = "none";
  } else {
    dot.style.display = "none";
    btntext.innerHTML = "Read less";
    moretext.style.display = "inline";
  }
};

function myFunction() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("myBtn1");

  readMore(dots, moreText, btnText);
}
function myFunction1() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myBtn2");

  readMore(dots, moreText, btnText);
}
function myFunction2() {
  let dots = document.getElementById("dots3");
  let moreText = document.getElementById("more3");
  let btnText = document.getElementById("myBtn3");

  readMore(dots, moreText, btnText);
}

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);

// console.log(document.getElementById("more2"));
// console.log(document.querySelector("#more2"));
