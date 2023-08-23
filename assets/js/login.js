const name = document.getElementById("name");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.onmouseover = function (e) {
  if (!name.value.trim() || !password.value.trim()) {
    login.classList.toggle("right");
  }
};

login.addEventListener("click", (e) => {
  e.preventDefault();
  const p = document.getElementById("error");
  if (!isSuccess(name.value.trim(), password.value.trim())) {
    p.style.display = "block";
    p.innerHTML = "Username or Password is incorrect.";
  } else {
    p.style.display = "none";
    window.location.pathname = "/assets/pages/bank.html";
  }
});

const isSuccess = (name, password) => {
  if (
    name == localStorage.getItem("name") &&
    password == localStorage.getItem("password")
  ) {
    return true;
  }
  return false;
};
