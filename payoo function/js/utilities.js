// we will write common shared function

//function getInputFieldById() {
// console.log("value by id");

//const addMoney = document.getElementById("input_addMoney").value;
//return addMoney;
//}

function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}
