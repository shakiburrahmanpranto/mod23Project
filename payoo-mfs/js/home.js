document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    // Prevent page reload
    event.preventDefault();

    // Get the input values
    const inputMoney = document.getElementById("inputAddMoney").value;
    const inputPin = document.getElementById("inputPin").value;

    // Verify the pin
    if (inputPin === "3769") {
      console.log("Money added to your account");

      // Get the current balance, remove any non-numeric characters, and convert to number
      let balance = document.getElementById("balance").innerText;

      balance = balance.replace(/[^0-9.-]+/g, ""); // Remove non-numeric characters
      const total = parseFloat(inputMoney); // Convert input money to number
      const prev = parseFloat(balance); // Convert current balance to number

      // Check if both are valid numbers
      if (!isNaN(total) && !isNaN(prev)) {
        // Calculate the new balance
        const balanceNew = total + prev;

        // Update the balance display
        document.getElementById("balance").innerText = balanceNew;
      } else {
        alert("Invalid amount or balance format.");
      }
    } else {
      alert("Failed to add money, Try again");
    }
  });
