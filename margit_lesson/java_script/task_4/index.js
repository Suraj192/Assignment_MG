let formdata = document.querySelector("#inputData");
function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  InsertNewRecord(formData);
}

function readFormData() {
  let formData = {};
  formData["licence"] = document.querySelector("#licence").value;
  formData["maker"] = document.querySelector("#car-owner").value;
  formData["owner"] = document.querySelector("#car-model").value;
  formData["model"] = document.querySelector("#car-maker").value;
  formData["price"] = document.querySelector("#price").value;
  formData["color"] = document.querySelector("#color").value;
  return formData;
}

function InsertNewRecord(data) {
  let table = document.querySelector("tbody");
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.licence;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.maker;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.owner;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.model;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.price;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.color;
}

formdata.addEventListener("submit", onFormSubmit);
