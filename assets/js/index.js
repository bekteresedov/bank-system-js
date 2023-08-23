const name = document.getElementById("name");
const surname = document.getElementById("surname");
const password = document.getElementById("password");
const repeat_password = document.getElementById("repeat-password");
const register = document.getElementById("register");

register.onmouseover = function (e) {
  if (
    !name.value.trim() ||
    !surname.value.trim() ||
    !password.value.trim() ||
    !repeat_password.value.trim()
  ) {
    register.classList.toggle("right");
  }
};

register.addEventListener("click", (e) => {
  e.preventDefault();
  ///name
  const p_name = document.getElementById("error-name");
  if (nameValidate(name.value.trim()) !== "Successfully") {
    name.style.borderColor = "red";
    p_name.style.display = "block";

    p_name.innerHTML = nameValidate(name.value.trim());
  } else {
    localStorage.setItem("name", name.value.trim());
    p_name.style.display = "none";
    name.style.borderColor = "gray";
  }

  /// surname
  const p_surname = document.getElementById("error-surname");

  if (surnameValidate(surname.value.trim()) !== "Successfully") {
    surname.style.borderColor = "red";
    p_surname.style.display = "block";

    p_surname.innerHTML = surnameValidate(surname.value.trim());
  } else {
    p_surname.style.display = "none";
    surname.style.borderColor = "gray";
  }

  ///password
  const p_password = document.getElementById("error-password");

  if (passwordValidate(password.value.trim()) !== "Successfully") {
    password.style.borderColor = "red";
    p_password.style.display = "block";

    p_password.innerHTML = passwordValidate(password.value.trim());
  } else {
    localStorage.setItem("password", password.value.trim());
    p_password.style.display = "none";
    password.style.borderColor = "gray";
  }

  ///  repeat_password
  const p_repeat_password = document.getElementById("error-repeat-password");

  if (
    password_repeatValidate(
      repeat_password.value.trim(),
      password.value.trim()
    ) !== "Successfully"
  ) {
    repeat_password.style.borderColor = "red";
    p_repeat_password.style.display = "block";
    console.log(
      password_repeatValidate(
        repeat_password.value.trim(),
        password.value.trim()
      )
    );
    p_repeat_password.innerHTML = password_repeatValidate(
      repeat_password.value.trim(),
      password.value.trim()
    );
  } else {
    p_repeat_password.style.display = "none";
    repeat_password.style.borderColor = "gray";
  }

  if (
    nameValidate(name.value.trim()) === "Successfully" &&
    surnameValidate(surname.value.trim()) === "Successfully" &&
    passwordValidate(password.value.trim()) === "Successfully" &&
    password_repeatValidate(
      password.value.trim(),
      repeat_password.value.trim()
    ) === "Successfully"
  ) {
    window.location.pathname = "/assets/pages/login.html";
  }
});

const nameValidate = (name) => {
  for (var el of name) {
    if (!isNaN(el)) {
      return "name  characters not a number";
    }
  }
  if (name.length < 3) {
    return "Name must be at least 3 characters";
  } else if (name.length > 10) {
    return "Name must be at least 10 characters";
  } else {
    return "Successfully";
  }
};

const surnameValidate = (surname) => {
  for (var el of surname) {
    if (!isNaN(el)) {
      return "Surname  characters not a number";
    }
  }
  if (surname.length < 4) {
    return "Surname must be at least 4 characters";
  } else if (surname.length > 15) {
    return "Surname must be at least 15 characters";
  } else {
    return "Successfully";
  }
};

const passwordValidate = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  } else if (surname.length > 15) {
    return "Password must be at least 25 characters";
  } else {
    return "Successfully";
  }
};

const password_repeatValidate = (password_repeat, password) => {
  if (password_repeat != password) {
    return "Repeat password not equal to password";
  } else {
    return "Successfully";
  }
};
