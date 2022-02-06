let form = document.querySelector("form");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let direction = document.querySelectorAll('input[name = "direction"]');

const setGradient = () => {
  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }
  console.log(selectedValue);
  console.log(color1.value);
  console.log(color2.value);
  document.body.style.backgroundImage = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", setGradient);
