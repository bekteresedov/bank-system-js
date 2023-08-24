const username = document.getElementById("user-name");
const expenditure = document.getElementById("expenditure");
const expenditure_value = document.getElementById("expenditure-value");
const balance = document.getElementById("balance");
const error = document.querySelector(".error");
const money = document.getElementById("money");
const money_value = document.getElementById("money-value");
const error_money = document.getElementById("error-money");

let dinamicBalance = 10_000;
balance.innerHTML = `${dinamicBalance} AZN`;
username.innerText = localStorage.getItem("name");

money.addEventListener("click", (e) => {
  e.preventDefault();
  const e_v = Math.floor(money_value.value);
  if (e_v < 5) {
    error_money.innerHTML = "It should be more than 5 manat";
  } else {
    if (dinamicBalance + e_v <= 100_000) {
      error_money.innerHTML = "";
      dinamicBalance = dinamicBalance + e_v;
      balance.innerHTML = `${dinamicBalance} AZN`;
    } else {
      error_money.innerHTML = "Your balance should not exceed 100.000";
    }
  }
});

expenditure.addEventListener("click", (e) => {
  e.preventDefault();
  const e_v = Math.floor(expenditure_value.value);
  if (e_v < 5) {
    error.innerHTML = "It should be more than 5 manat";
  } else {
    if (dinamicBalance - e_v >= 0) {
      error.innerHTML = "";
      dinamicBalance = dinamicBalance - e_v;
      balance.innerHTML = `${dinamicBalance} AZN`;
    } else {
      error.innerHTML = "Your balance is insufficient";
    }
  }
});
