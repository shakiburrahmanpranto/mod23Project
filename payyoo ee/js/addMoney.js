document
  .getElementById("btn_AddMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input_addMoney").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pin = document.getElementById("pin").value;

    if (pin === "123") {
      console.log("jkhfk");

      let balance = document.getElementById("balance").innerText;
      balance = balance.replace(/[^0-9.-]+/g, "");

      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;

      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("failed to add money");
    }
  });
