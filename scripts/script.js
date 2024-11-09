console.log('i am linked');
const form = document.getElementsByClassName('form');
console.log(form);
const registration = form[0];
console.log(registration.target.value);
const login = from[1];
console.log(login.target.value);

const uName = form.elements['username'];
console.log(uName);
// const email = form.elements['email'];
// console.log(email);
// const password = form.elements['password'];
// console.log(password);
// const passwordCheck = form.elements['passwordCheck'];
// console.log(passwordCheck);
// const registration = form.elements('regBtn');
// console.log(registration);
const userNames = document.getElementsByClassName('userName');
console.log(userNames);

registration.addEventListener('submit', validateRegistration);

function validateRegistration(evt) {
  evt.preventDefault();
  const userNameVal = validateUserName();
  if (userNameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  const atpos = emailVal.indexOf('@');
  const dotpos = emailVal.lastIndexOf('.');

  if (atpos < 1) {
    alert(
      'Your email must include an @ symbol, which must not be at the beginning'
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      'Invalid structure: @.\nYou must include a domain name after the @ symbol.'
    );
    email.focus();
    return false;
  }

  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (emailVal !== 'example.com') {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  }
  if (passwordVal !== nameVal) {
    evt.returnValue = false;
    return false;
  }
  if (passwordVal === passwordVal2) {
    evt.returnValue = true;
    return true;
  }
  const passwordVal2 = validatePassword();
  if (passwordVal2 === false) {
    evt.returnValue = false;
    return false;
  }
  if (passwordVal2 === passwordVal) {
    evt.returnValue = true;
    return true;
  }

  alert(`Name: ${nameVal}
        Email: ${emailVal}
        Password: ...that's a secret`);

  return true;
}

function validateUserNames() {
  let namesVal = userNames.value;

  if (namesVal.length === 0) {
    alert('Your name cannot be empty');
    userName.focus();
    return false;
  }
  const capPos = namesVal.indexOf('(?=.*[A-Z])');

  if (capPos < 1) {
    alert('Your username must include an uppercase letter');
    username.focus();
    return false;
  }
  const lowerPos = namesVal.indexOf('(?=.*[a-z])');

  if (lowerPos < 1) {
    alert('Your username must include a lowercase letter');
    username.focus();
    return false;
  }

  return nameVal;
}

login.addEventListener('submit', validate);

function validatelogin(evt) {
  evt.preventDefault();
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  let passwordVal = password.value;

  if (passwordVal.length === 0) {
    alert('Your password cannot be empty');
    password.focus();
    return false;
  }

  return passwordVal;
}

function findUnique(str) {
  // The variable that contains the unique values
  let uniq = '';

  for (let i = 0; i < str.length; i++) {
    // Checking if the uniq contains the character
    if (uniq.includes(str[i]) === false) {
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += str[i];
    }
  }
  return uniq;
}
