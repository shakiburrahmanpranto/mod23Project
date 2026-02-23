document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input_add_money").value;
    const pin = document.getElementById("pin").value;
    console.log(addMoney, pin);

    if (pin === "1234") {
      let balance = document.getElementById("account_balance").innerText;

      balance = balance.replace(/[^0-9.-]+/g, "");
      console.log(balance);

      const addMoneyNumber = parseFloat(addMoney);
      const balanceNumber = parseFloat(balance);

      const newBalance = addMoneyNumber + balanceNumber;

      document.getElementById("account_balance").innerText = newBalance;
    } else {
      alert("Failed to add money");
    }
  });
