const form = document.querySelector("form");
const firstname = document.getElementById("firstname");
const lastName = document.getElementById("lastName");
const timeZone = document.getElementById("timeZone");
const clearBtn = document.querySelector(".clear-btn");
const submitBtn = document.querySelector(".submit-btn");
const errors = document.querySelectorAll(".error-message");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValid = true;
  if (!firstname.value) {
    document.querySelector("#firstname + .error-message").style.display =
      "block";
    document.querySelector("#lastName + .error-message").style.display =
      "block";
    document.querySelector("#timeZone + .error-message").style.display =
      "block";
    document.querySelector("#website + .error-message").style.display = "block";
    document.querySelector("#phoneSkype + .error-message").style.display =
      "block";
    isValid = false;
  }
  if (isValid) {
    clearBtn.style.display = "block";
  }
});

clearBtn.addEventListener("click", () => {
  form.reset();

  clearBtn.style.display = "none";
});
