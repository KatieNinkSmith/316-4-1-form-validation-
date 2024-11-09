console.log("i am linked");
const registration = document.getElementById("registration");
console.log(registration);
// const regUser = document.querySelector(".regUser");
// console.log(regUser);
// const regEmail = document.querySelector(".regEmail");
// console.log(regEmail);
// const regPassword = document.querySelector(".regPassword");
// console.log(regPassword);
// const regPasswordCheck = document.querySelector(".regPasswordCheck");
// console.log(regPasswordCheck);
// const regBtn = document.querySelector(".register");
// console.log(regBtn);

// const login = document.getElementById("login");
// const loginUser = document.querySelector(".loginUser");
// console.log(loginUser);
// const loginPassword = document.querySelector(".loginPassword");
// console.log(loginPassword);
// const loginBtn = document.querySelector(".login");
// console.log(loginBtn);

registration.addEventListener("submit", validate);

function validateRegistration(evt) {
  evt.preventDefault();
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (nameVal < 4) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning"
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }

  alert(`Name: ${nameVal}
        Email: ${emailVal}
        Password: ...that's a secret`);

  return true;
}

login.addEventListener("submit", validate);

function validatelogin(evt) {
  evt.preventDefault();
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  let passwordVal = password.value;

  if (passwordVal.length === 0) {
    alert("Your password cannot be empty");
    password.focus();
    return false;
  }

  return passwordVal;
}
