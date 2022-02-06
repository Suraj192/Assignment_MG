const calculator = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value);
  let bmi = Math.floor(weight / (height / 100) ** 2).toFixed(1);
  let answer = document.querySelector("#answer");

  let text;
  let color;
  if (bmi < 18.5) {
    text = `BMI is ${bmi} - Underweight`;
    color = "warning";
  } else if (bmi >= 18.5 && bmi < 25) {
    text = `BMI is ${bmi} - Normal or Healthy Weight`;
    color = "normal";
  } else if (bmi >= 25 && bmi < 30) {
    text = `BMI is ${bmi} - Pre-obesity`;
    color = "warning";
  } else {
    text = `BMI is ${bmi} - Obesity`;
    color = "danger";
  }
  answer.textContent = text;
  answer.classList.add(color);
};
