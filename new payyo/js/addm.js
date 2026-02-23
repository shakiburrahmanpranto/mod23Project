document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money btn clicked");

    //getInputFieldValuebyId();
    //const addMoney = getInputFieldValuebyId();
    //console.log("add moeny balue", addMoney);

    const addMoney = document.getElementById("input_addMoney").value;
    const pinNumber = document.getElementById("pin").value;
    console.log("asdd money wiyh para", addMoney, pinNumber);
  });
