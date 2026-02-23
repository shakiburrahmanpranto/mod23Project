document
  .getElementById("btn_CashOut")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");

    const cashOut = document.getElementById("inputCashOut").value;
    const cashOutNum = parseFloat(cashOut);
    const cashOutPin = document.getElementById("cashOutPin").value;
    console.log(cashOut, cashOutPin);
    if (cashOutPin === "3769") {
      //console.log("Cashout succesfully done");
      let balance = document.getElementById("balance").innerText;
      balance = balance.replace(/[^0-9.-]+/g, "");
      const prev = parseFloat(balance);
      const afterCashOut = prev - cashOutNum;
      document.getElementById("balance").innerText = afterCashOut;
    } else {
      alert("Invalid pass or id");
    }
  });
