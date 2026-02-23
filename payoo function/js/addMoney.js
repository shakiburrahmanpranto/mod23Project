document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    //getInputFieldById();
    //const addMoney = getInputFieldById();

    //console.log("add money value"), addMoney;

    const addMoney = getInputFieldById("input_addMoney");

    //const pin = getInputFieldById("pin");
    const pin = getInputFieldById("pin");
    //console.log("add money with parameter", addMoney, pin);

    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (parseInt(pin) === 1234) {
      //let balance = parseFloat(getTextFieldById("balance"));
      let balance = getTextFieldById("balance");
      if (isNaN(balance)) balance = 0;

      //const balance = getTextFieldById("balance");
      //console.log(balance, pin);

      //balance = balance.replace(/[^0-9.-]+/g, "");
      //console.log(balance, addMoney);
      const newBalance = parseFloat(balance) + parseFloat(addMoney);

      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("failed to add money");
    }
  });
