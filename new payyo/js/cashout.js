document
  .getElementById("btn_cashout")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashout = getInputFieldValueById("input_cashout");
    const cashoutPin = getInputFieldValueById("cashout_pin");

    //console.log("cashout btn clicked", cashout, cashoutPin);

    if (isNaN(cashout)) {
      alert("Failed to cashout");
      return;
    }

    if (cashoutPin === 1234) {
      const balance = getTextFieldValueById("balance");
      //console.log("balance", balance);

      if (cashout > balance) {
        alert("Insufficient balance");
        return;
      }

      const newBalance = balance - cashout;
      document.getElementById("balance").innerText = newBalance;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-red-300");
      div.innerHTML = `
         <h4 class='text-2xl font-mono'>Cash Out</h4>
         <p> ${cashout} BDT withdrawn from your account. 
         Your new account balance ${newBalance}</p>
`;
      document.getElementById("transaction_container").appendChild(div);
    } else {
      alert("wont get money");
    }
  });
