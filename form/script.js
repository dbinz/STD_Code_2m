const clear = document.querySelector(".clear");
const submit = document.querySelector(".submit");
const nameInput = document.querySelector(".name");
const adrress = document.querySelector(".adrress");
const Password = document.querySelector(".Password");
const textErr = document.querySelectorAll(".text-err");
const submittedInfo = document.getElementById("submitted-info");
const displayName = document.getElementById("display-name");
const displayAddress = document.getElementById("display-address");
const displayPassword = document.getElementById("display-password");

console.log(textErr);

function toggleClearButton() {
  const hasValue = nameInput.value || adrress.value || Password.value;
  clear.style.display = hasValue ? "block" : "none";
}

function validateField(input, index) {
  if (input.value.trim() === "") {
    input.style.border = "1px solid red";
    textErr[index].style.display = "block";
  } else {
    input.style.border = "1px solid black";
    textErr[index].style.display = "none";
  }
  toggleClearButton();
}

nameInput.addEventListener("input", () => validateField(nameInput, 0));
adrress.addEventListener("input", () => validateField(adrress, 1));
Password.addEventListener("input", () => validateField(Password, 2));

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const formName = nameInput.value;
  const formadrress = adrress.value;
  const password = Password.value;

  let allFilled = true;

  if (formName === "") {
    nameInput.style.border = "1px solid red";
    textErr[0].style.display = "block";
    allFilled = false;
  } else {
    nameInput.style.border = "1px solid black";
    textErr[0].style.display = "none";
  }

  if (formadrress === "") {
    adrress.style.border = "1px solid red";
    textErr[1].style.display = "block";
    allFilled = false;
  } else {
    adrress.style.border = "1px solid black";
    textErr[1].style.display = "none";
  }

  if (password === "") {
    Password.style.border = "1px solid red";
    textErr[2].style.display = "block";
    allFilled = false;
  } else {
    Password.style.border = "1px solid black";
    textErr[2].style.display = "none";
  }

  if (allFilled) {
    displayName.textContent = formName;
    displayAddress.textContent = formadrress;
    displayPassword.textContent = password;
    submittedInfo.style.display = "block";
  } else {
    submittedInfo.style.display = "none";
  }

  console.log({ names: formName, form_adress: formadrress, password });
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
  nameInput.value = "";
  adrress.value = "";
  Password.value = "";
  nameInput.style.border = "1px solid black";
  adrress.style.border = "1px solid black";
  Password.style.border = "1px solid black";
  textErr.forEach((err) => (err.style.display = "none"));
  submittedInfo.style.display = "none";
  toggleClearButton();
});

toggleClearButton();
