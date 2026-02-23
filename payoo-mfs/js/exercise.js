console.log("Money added to your account");

let balance = document.getElementById("balance").innerText;
// Remove '$' and any extra spaces or commas in balance
balance = balance.replace("$", "").replace(/,/g, "").trim();

const total = Number(inputMoney); // Use Number for inputMoney
const prev = Number(balance); // Use Number for balance

if (!isNaN(total) && !isNaN(prev)) {
  const balanceNew = total + prev;
  console.log(balanceNew); // Log the new balance

  // Update the balance on the page with the new value
  document.getElementById("balance").innerText = `$${balanceNew.toFixed(2)}`; // Display balance with 2 decimal places
} else {
  console.log("Invalid number format");
}
