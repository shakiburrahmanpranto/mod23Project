document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //console.log("add money button clicked");

    const addMoney = document.getElementById("input_addMoney").value;
    const addMoneyNumber = parseFloat(addMoney);

    const pin = document.getElementById("pin").value;

    //console.log(addMoney, pin);

    if (pin === "1234") {
      let balance = document.getElementById("balance").innerText;
      //console.log(balance);
      balance = balance.replace(/[^0-9.-]+/g, "");

      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;

      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("Incorrect id or pass. Pls try again");
    }
  });
