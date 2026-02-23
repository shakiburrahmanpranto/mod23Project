function getInputFieldById(id) {
  const element = document.getElementById(id);
  if (!element) return 0;

  const inputValue = element.value.trim();
  return inputValue === "" || isNaN(inputValue) ? 0 : parseFloat(inputValue);
}

function getTextFieldById(id) {
  const element = document.getElementById(id);
  if (!element) return 0;

  const textValue = element.innerText.trim();
  const numericValue = textValue.replace(/[^0-9.-]+/g, "");
  return numericValue === "" || isNaN(numericValue)
    ? 0
    : parseFloat(numericValue);
}

function showSectionById(id) {
  document.getElementById("add_Money_Form").classList.add("hidden");
  document.getElementById("cashout_form").classList.add("hidden");
  document.getElementById("transaction_form").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
