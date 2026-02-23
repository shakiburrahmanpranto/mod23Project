//console.log("exercise js added");

document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("new js file added");
    const addMoney = document.getElementById("inputAddMoney").value;
    const moneyNumber = parseFloat(addMoney);
    const pin = document.getElementById("inputPin").value;
    //console.log(addMoney, pin);
    if (pin === "3769") {
      console.log("Money added to your account");

      let balance = document.getElementById("balance").innerText;
      balance = balance.replace(/[^0-9.-]+/g, "");
      //console.log(balance);
      const balanceNumber = parseFloat(balance);
      const updatedBalance = moneyNumber + balanceNumber;

      document.getElementById("balance").innerText = updatedBalance;
    } else {
      alert("invalid user id or pass");
    }
  });
