const username = document.getElementById("user-name");
const expenditure = document.getElementById("expenditure");
const expenditure_value = document.getElementById("expenditure-value");
const balance = document.getElementById("balance");
const error = document.querySelector(".error");
const money = document.getElementById("money");
const money_value = document.getElementById("money-value");
const error_money = document.getElementById("error-money");
const faiz = document.getElementById("faiz");
const select = document.getElementById("select");
const deposit_value = document.getElementById("deposit-value");
const deposit = document.getElementById("deposit");
const error_deposit = document.getElementById("error-deposit");
const money_container = document.getElementById("money-container");
const credit = document.getElementById("credit");
const yr = document.getElementById("yr");
const select_credit = document.getElementById("select-credit");
const error_credit = document.getElementById("error-credit");

let dinamicBalance = 10_000;
let selectValue = 5;
let selectCreditValue = 5;
let loan = 0;
let kreditShans = 50_000;
const years = [
  {
    year: 1,
    faiz: 5,
  },
  {
    year: 2,
    faiz: 10,
  },
  {
    year: 5,
    faiz: 12,
  },
  {
    year: 10,
    faiz: 15,
  },
];

const moneyy = [2000, 4500, 7000, 8000, 10000];

yr.innerHTML = kreditShans;

years.forEach((el, index) => {
  faiz.innerHTML += `${el.year} to ${el.faiz}% ${
    years.length - 1 == index ? " " : "|"
  } `;
});

years.slice(1).forEach((el, index) => {
  const option = document.createElement("option");
  option.innerHTML = `${el.year} year`;
  option.setAttribute("value", el.faiz);
  select.appendChild(option);
});

years.slice(1).forEach((el, index) => {
  const option = document.createElement("option");
  option.innerHTML = `${el.year} year`;
  option.setAttribute("value", el.faiz);
  select_credit.appendChild(option);
});
balance.innerHTML = `${dinamicBalance} AZN`;
username.innerText = localStorage.getItem("name");

moneyy.slice(1).forEach((el) => {
  const span = document.createElement("span");
  span.innerHTML = el;
  span.classList.add("azn");
  money_container.appendChild(span);
});

const spans = document.querySelectorAll(".azn");
spans.forEach((span) => {
  span.onclick = function () {
    spans.forEach((el) => {
      if (span.innerHTML == el.innerHTML) {
        el.style.backgroundColor = "#000";
      } else {
        el.style.backgroundColor = "#1975ca";
      }
    });
    loan = Number(span.innerHTML);
  };
});

credit.onmouseover = function (e) {
  if (!loan) {
    credit.classList.toggle("right");
    credit.innerHTML = "Ahahahaha!";
  } else {
    credit.innerHTML = "Click";
  }
};

credit.addEventListener("click", (e) => {
  e.preventDefault();
  let ok = depositMoney(Number(loan), Number(selectCreditValue));
  // let f = kreditShans - loan + ok;
  // console.log(f);
  if (kreditShans - loan + ok <= 0) {
    error_credit.innerHTML = `You can get a maximum of ${kreditShans} credits`;
    // cred
  } else {
    error_credit.innerHTML = "";
    kreditShans -= loan + ok;
    dinamicBalance += loan;
    yr.innerHTML = kreditShans;
    balance.innerHTML = dinamicBalance + " AZN";
  }
});

expenditure.onmouseover = function (e) {
  if (!expenditure_value.value.trim()) {
    expenditure.classList.toggle("right");
    expenditure.innerHTML = "Ahahahaha!";
  } else {
    expenditure.innerHTML = "Click";
  }
};

money.onmouseover = function (e) {
  if (!money_value.value.trim()) {
    money.classList.toggle("right");
    money.innerHTML = "Ahahahaha!";
  } else {
    money.innerHTML = "Click";
  }
};

deposit.onmouseover = function (e) {
  if (!deposit_value.value.trim()) {
    deposit.classList.toggle("right");
    deposit.innerHTML = "Ahahahaha!";
  } else {
    deposit.innerHTML = "Click";
  }
};

select_credit.onchange = function () {
  selectCreditValue = select_credit.value;
};
select.onchange = function () {
  selectValue = select.value;
};

deposit.addEventListener("click", (e) => {
  e.preventDefault();
  if (dinamicBalance < deposit_value.value) {
    error_deposit.innerHTML = `you don't have enough money in your balance`;
  } else {
    error_deposit.innerHTML = "";

    dinamicBalance += depositMoney(
      Number(deposit_value.value),
      Number(selectValue)
    );
    balance.innerHTML = dinamicBalance + " AZN";
  }
});

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

const depositMoney = (price, year) => {
  const result = (price * year) / 100;
  return Math.round(result);
};
