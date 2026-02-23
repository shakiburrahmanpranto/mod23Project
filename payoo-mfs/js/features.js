document.getElementById("show_cashOut").addEventListener("click", function () {
  console.log("cashout button clicked");

  //show cashOut form
  document.getElementById("cashOut_form").classList.remove("hidden");

  // hide the add money form
  document.getElementById("addMoney_form").classList.add("hidden");
});

//show addmoney form and hide the cashout form
document.getElementById("show_addMoney").addEventListener("click", function () {
  document.getElementById("addMoney_form").classList.remove("hidden");
  document.getElementById("cashOut_form").classList.add("hidden");
});
