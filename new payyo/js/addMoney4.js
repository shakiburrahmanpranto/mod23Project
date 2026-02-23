document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("input_addMoney");
    const pin = getInputFieldValueById("pin");
    // console.log("money add ", addMoney, pin);

    if (isNaN(addMoney)) {
      alert("Failed to add money to your account");
      return;
    }

    if (pin === 1234) {
      const balance = getTextFieldValueById("balance");
      //console.log(balance, addMoney);

      const newBalance = addMoney + balance;

      document.getElementById("balance").innerText = newBalance;

      //add to transaction history

      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} BDT. Your new account balance: ${newBalance} BDT`;
      console.log(p);
      // show be a common function

      document.getElementById("transaction_container").appendChild(p);
    } else {
      alert("failed to add money");
    }
  });
