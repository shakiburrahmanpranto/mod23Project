//console.log("button clicking file added");

//step1
document
  .getElementById("btn_login")
  .addEventListener("click", function (event) {
    //step2
    event.preventDefault();
    console.log("login button clicked");
    //step3 get the number
    const number = document.getElementById("phone_number").value;
    console.log(number);
    //step 4 get the pin
    const pin = document.getElementById("pin_number").value;
    console.log(pin);

    //this is temp way , you should not use it
    if (number === "2207007" && pin === "3769") {
      console.log("You are logged in");
      window.location.href = "homepage.html";
    } else {
      alert("Incorret number or pin");
    }
  });
