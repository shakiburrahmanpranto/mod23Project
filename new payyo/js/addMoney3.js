document
  .getElementById("btn_addMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money btn clicked");

    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log("add money", addMoney);

    const addMoney = getInputFieldValueById("input_addMoney");
    console.log("money added", addMoney);
  });
