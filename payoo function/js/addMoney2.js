document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get input values
    const addMoney = parseFloat(getInputFieldById("input_addMoney"));
    const pin = parseInt(getInputFieldById("pin")); // Convert to number

    // Validate input amount
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Check PIN
    if (pin === 1234) {
      let balance = parseFloat(getTextFieldById("balance"));

      if (isNaN(balance)) balance = 0; // Handle NaN case

      // Calculate new balance
      const newBalance = balance + addMoney;

      // Update balance with 2 decimal places for better formatting
      document.getElementById("balance").innerText = newBalance.toFixed(2);
    } else {
      alert("Failed to add money. Incorrect PIN.");
    }
  });
