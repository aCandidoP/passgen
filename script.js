let passwordLenght = 16;
const inputEl = document.querySelector(".password input");


function generatePassword() {
  const chars =
    "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]";

  let password = "";

  for (let i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  console.log(password);

  inputEl.value = password;
  iconEl.classList.remove("bi-clipboard-check")
  iconEl.classList.add("bi-clipboard")
}
function copy() {
  navigator.clipboard.writeText(inputEl.value);
  iconEl.classList.remove("bi-clipboard");
  iconEl.classList.add("bi-clipboard-check");
}

const passwordLenghtEl = document.querySelector("#password-lenght");
passwordLenghtEl.addEventListener("input", function () {
  passwordLenght = passwordLenghtEl.value;
  generatePassword();
});

const copyButtonEl = document.querySelector("#copy");
const renewButtonEl = document.querySelector("#renew");
const iconEl = copyButtonEl.querySelector("i");
copyButtonEl.addEventListener("click", copy);

generatePassword();
