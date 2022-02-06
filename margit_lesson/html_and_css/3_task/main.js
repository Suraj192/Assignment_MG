const calculator = () => {
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.querySelector("#quantity").value);

  let amount = Math.floor(quantity * price);

  let text = `Total amount require is ${amount}.`;

  answer.textContent = text;
};
