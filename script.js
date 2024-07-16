let passwordLenght = 16;
const inputEl = document.querySelector(".password input");
const upperCaseCheckEl = document.getElementById("uppercase-check");
const numberCheckEl = document.getElementById("number-check");
const symbolCheckEl = document.getElementById("symbols-check");
const securityIndicatorBar = document.getElementById("security-indicator-bar");
const copyButtonEl = document.querySelector("#copy");
const renewButtonEl = document.querySelector("#renew");
const iconEl = copyButtonEl.querySelector("i");
const copyButtonEl2 = document.querySelector("#copy-2")

function generatePassword() {
  let chars = "abcdefghjkmnpqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numbers = "123456789";
  const symbols = "?!@&*()[]";

  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars;
  }

  if (numberCheckEl.checked) {
    chars += numbers;
  }

  if (symbolCheckEl.checked) {
    chars += symbols;
  }

  let password = "";

  for (let i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log(password);

  inputEl.value = password;
  calculateQuality();
  calculateFontSize();
  iconEl.classList.remove("bi-clipboard-check");
  iconEl.classList.add("bi-clipboard");
}

function calculateQuality() {
  const percent = Math.round(
    (passwordLenght / 64) * 35 +
      (upperCaseCheckEl.checked ? 15 : 0) +
      (numberCheckEl.checked ? 25 : 0) +
      (symbolCheckEl.checked ? 25 : 0)
  );
  securityIndicatorBar.style.width = `${percent}%`;

  if (percent > 69) {
    securityIndicatorBar.classList.remove("warning");
    securityIndicatorBar.classList.remove("critical");
    securityIndicatorBar.classList.add("safe");
  } else if (percent > 50) {
    securityIndicatorBar.classList.remove("safe");
    securityIndicatorBar.classList.remove("critical");
    securityIndicatorBar.classList.add("warning");
  } else {
    securityIndicatorBar.classList.remove("warning");
    securityIndicatorBar.classList.remove("safe");
    securityIndicatorBar.classList.add("critical");
  }

  if (percent >= 100) {
    securityIndicatorBar.classList.add("completed");
  } else {
    securityIndicatorBar.classList.remove("completed");
  }
}

function calculateFontSize() {
  if (passwordLenght > 45) {
    inputEl.classList.remove("font-sm");
    inputEl.classList.remove("font-xs");
    inputEl.classList.add("font-xxs");
  } else if (passwordLenght > 32) {
    inputEl.classList.remove("font-sm");
    inputEl.classList.remove("font-xxs");
    inputEl.classList.add("font-xs");
  } else if(passwordLenght > 22) {
    inputEl.classList.remove("font-xs");
    inputEl.classList.remove("font-xxs");
    inputEl.classList.add("font-sm");
  } else {
    inputEl.classList.remove("font-xs");
    inputEl.classList.remove("font-xxs");
    inputEl.classList.remove("font-sm");
  
  }
}

function copy() {
  navigator.clipboard.writeText(inputEl.value);
  iconEl.classList.remove("bi-clipboard");
  iconEl.classList.add("bi-clipboard-check");
  calculateQuality();
}

const passwordLenghtEl = document.querySelector("#password-lenght");
passwordLenghtEl.addEventListener("input", function () {
  passwordLenght = passwordLenghtEl.value;
  document.querySelector("#password-length-text").innerText = passwordLenght;
  generatePassword();
});

upperCaseCheckEl.addEventListener("click", generatePassword);
numberCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);
copyButtonEl.addEventListener("click", copy);
copyButtonEl2.addEventListener("click", copy);

generatePassword();
