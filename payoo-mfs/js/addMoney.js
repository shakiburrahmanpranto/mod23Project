document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("new js file added");

    //get money and pin number
    const addMoney = document.getElementById("inputAddMoney").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("inputPin").value;
    //console.log(addMoney, pinNumber);
    if (pinNumber === "3769") {
      //console.log("Money added to the account");
      let balance = document.getElementById("balance").innerText;
      balance = balance.replace(/[^0-9.-]+/g, "");

      const prevBalance = parseFloat(balance);
      const NewBalance = prevBalance + addMoneyNumber;
      //update the dom
      document.getElementById("balance").innerText = NewBalance;
    } else {
      alert("Invalid id or pin number");
    }
  });
