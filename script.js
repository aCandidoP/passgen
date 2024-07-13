let passwordLenght = 16;
const inputEl = document.getElementById("password");

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
}
function copy() {
  navigator.clipboard.writeText(inputEl.value);
}

const passwordLenghtEl = document.querySelector("#password-lenght");
passwordLenghtEl.addEventListener("input", function () {
  passwordLenght = passwordLenghtEl.value;
  generatePassword();
});

const copyButtonEl = document.querySelector("#copy");
copyButtonEl.addEventListener("click", copy);

generatePassword();
