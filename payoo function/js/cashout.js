document
  .getElementById("btn_cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashout = getInputFieldById("input_cashout");

    const Pin = getInputFieldById("cashOut_pin");

    //console.log("inside click handler", cashout, inputPin);

    if (Pin === 1234) {
      const balance = getTextFieldById("balance");
      //console.log(balance);

      const newBalance = balance - cashout;
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("invalid id or pass");
    }
  });
