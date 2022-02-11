let formdata = document.querySelector("#inputData");
// creating the element for event listener.

// creating the function for event listener.
function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  InsertNewRecord(formData);
}

// creating the function which read the form
// input and creates the objects from it.
function readFormData() {
  let formData = {};
  formData["licence"] = document.querySelector("#licence").value;
  formData["owner"] = document.querySelector("#car-owner").value;
  formData["model"] = document.querySelector("#car-model").value;
  formData["maker"] = document.querySelector("#car-maker").value;
  formData["price"] = document.querySelector("#price").value;
  formData["color"] = document.querySelector("#color").value;
  return formData;
}

// function creates the new data to the table body.
function InsertNewRecord(data) {
  let table = document.querySelector("tbody");
  // creating the new row with the index value equal to the
  // table length.
  let newRow = table.insertRow(table.length);
  // looping through the object element and putting the record
  // in the respective cell of the row.
  for (let i = 0; i < Object.keys(data).length; i++) {
    cell = newRow.insertCell(i);
    cell.textContent = Object.values(data)[i];
  }
}

// runs the function on clicking the submit button.
formdata.addEventListener("submit", onFormSubmit);

const searchLn = () => {
  let table = document.querySelector("tbody");
  let para = document.querySelector("p");
  if (table.rows.length == 0) {
    console.log(para);
    para.textContent = "Please select car";
  } else {
    let inputData = document.querySelector("#search-ln").value.toLowerCase();
    let registrationData = [];
    for (let i = 0; i < table.rows.length; i++) {
      registrationData.push(
        table.rows[i].cells.item(0).textContent.toLowerCase()
      );
      //   console.log(
      //     `The registration number is ${table.rows[i].cells.item(0).textContent}`);
      console.log(registrationData);
    }
    if (inputData == registrationData.find((element) => element == inputData)) {
      let indexFound = registrationData.findIndex(
        (element) => element == inputData
      );

      //console.log(indexFound);
      para.textContent = `Following Registration number's owner is 
      ${table.rows[indexFound].cells.item(1).textContent}`;
    } else {
      para.textContent = `The registration Number cannot be found in the databases`;
    }
  }
};
