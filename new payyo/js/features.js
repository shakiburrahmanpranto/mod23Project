document
  .getElementById("show_add_Money_form")
  .addEventListener("click", function () {
    console.log("show add money form clicked");
    showSectionById("add_money_form");
  });

document
  .getElementById("show_cash_out_form")
  .addEventListener("click", function () {
    showSectionById("cash_out_form");
  });

document
  .getElementById("show_transaction")
  .addEventListener("click", function () {
    showSectionById("transaction_form");
  });
