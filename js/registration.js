const registrationInputs = document.querySelectorAll(".registration-input");
const registrationButton = document.querySelector(".registration-button");

registrationInputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    const error = input.nextElementSibling;
    if (input.value.trim() === "") {
      input.style.border = "1px solid red";
      error.style.visibility = "visible";
    } else {
      input.style.border = "none";
      error.style.visibility = "hidden";
    }
  });
});

registrationButton.addEventListener("click", (e) => {
  let allFilled = true;

  registrationInputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
      input.style.border = "1px solid red";
      const error = input.nextElementSibling;
      error.style.visibility = "visible";
    }
  });

  if (allFilled) {
    window.location.href = "../index.html";
  } else {
    e.preventDefault();
  }
});
