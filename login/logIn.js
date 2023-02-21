import { caution } from "../module/func.mjs";

const emailInput = document.querySelector("#email"),
  pswordInput = document.querySelector("#password"),
  loginBtn = document.querySelector(".login-button"),
  errorMessage = document.querySelector(".error-message"),
  form = document.querySelector(".login-form");

function login() {
  if (emailInput.value == "") {
    caution.essentialInfo(errorMessage);
  } else if (pswordInput.value == "") {
    caution.essentialInfo(errorMessage);
  } else {
    caution.cautionMessage(errorMessage,"");
    console.log(emailInput.value, pswordInput.value);
    axios
      .post("http://localhost:8080/api/v1/user/login", {
        username: emailInput.value,
        password: pswordInput.value,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.jwt);
        localStorage.setItem("userId", emailInput.value);
        location.href = `http://localhost:3000/`;
      })
      .catch(function (error) {
        alert(error);
      });
  }
}

function handleFormEnter(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    login();
  }
}

function handleButtonClick() {
  login();
}

loginBtn.addEventListener("click", handleButtonClick);
form.addEventListener("submit", handleFormEnter);


