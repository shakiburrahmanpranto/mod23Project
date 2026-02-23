document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input_addMoney").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pin = document.getElementById("pin").value;

    if (pin === "1234") {
      let balance = document.getElementById("balance").innerText;
      balance = balance.replace(/[^0-9.-]+/g, "");

      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;

      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("Invalid id or pass");
    }
  });
