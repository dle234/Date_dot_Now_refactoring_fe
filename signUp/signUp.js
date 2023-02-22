"use strict";

import { caution } from "../module/func.mjs";

const email = document.querySelector("#email1"),
  psword = document.querySelector("#passwordbox"),
  rePsword = document.querySelector("#repasswordbox"),
  userName = document.querySelector("#namebox"),
  birthYear = document.querySelector("#years"),
  birthMonth = document.querySelector("#month"),
  birthDay = document.querySelector("#days"),
  phoneNumber = document.querySelector("#PNInput"),
  signInBtn = document.querySelector("#signInButton"),
  emailWarn = document.querySelector("#emailwarn"),
  pswordWarn = document.querySelector("#pswordwarn"),
  emailWarn2 = document.querySelector("#emailwarn2"),
  pswordWarn2 = document.querySelector("#pswordwarn2"),
  repswordWarn = document.querySelector("#repswordwarn"),
  nameWarn = document.querySelector("#namewarn"),
  birthWarn = document.querySelector("#birthwarn");

let pswordTrue = false,
  emailTrue = false,
  nameTrue = false,
  birthTrue = false;

const emailRegex = /^\S+@\S+\.\S+$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;
// 영문자, 숫자, 특수문자를 최소 1개 이상 포함, 길이는 8~20자로 제한

function isValidEmail() {
  if (email.value == "") {
    caution.essentialInfo(emailWarn);
  } else {
    if (!emailRegex.test(email.value)) {
      caution.cautionMessage(emailWarn, "");
      caution.cautionMessage(emailWarn2, "유효한 이메일을 입력해 주세요.");
    } else {
      caution.cautionMessage(emailWarn2, "");
      emailTrue = true;
    }
  }
}
function passwordCorrect() {
  if (psword.value != rePsword.value) {
    caution.cautionMessage(repswordWarn, "비밀번호가 일치하지 않습니다.");
  } else {
    caution.cautionMessage(repswordWarn, "");
    pswordTrue = true;
  }
}

function isValidPassword() {
  if (psword.value == "") {
    caution.essentialInfo(pswordWarn);
  } else {
    if (!passwordRegex.test(psword.value)) {
      caution.cautionMessage(pswordWarn, "");
      caution.cautionMessage(
        pswordWarn2,
        "비밀번호는 영문자+숫자+특수문자 조합으로 8~20자리 사용해야 합니다."
      );
    } else {
      caution.cautionMessage(pswordWarn2, "");
      passwordCorrect();
    }
  }
}

function requiredName() {
  if (userName.value == "") {
    caution.essentialInfo(nameWarn);
  } else {
    caution.cautionMessage(nameWarn, "");
    nameTrue = true;
  }
}
function requiredBirth() {
  if (birthYear.value == "" || birthDay.value == "") {
    caution.essentialInfo(birthWarn);
  } else {
    caution.cautionMessage(birthWarn, "");
    birthTrue = true;
  }
}

function collectInformation() {
  const data = {
    email: email.value,
    password: psword.value,
    name: userName.value,
    birth: `${birthYear.value}-${birthMonth.value}-${birthDay.value}`,
    phoneNum: phoneNumber.value,
    gender: "MAN",
  };
  return data;
}

// 로그인함수
function signIn(event) {
  event.preventDefault();
  if (!(nameTrue && pswordTrue && emailTrue && birthTrue)) {
    event.preventDefault();
    isValidEmail();
    isValidPassword();
    requiredName();
    requiredBirth();
  } else {
    const UserInfo = collectInformation();
    axios
      .post("http://localhost:8080/api/v1/user/signup", UserInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        location.href = "http://localhost:3000/login/";
      })
      .catch((err) => {
        alert(err);
      });
  }
}

signInBtn.addEventListener("click", signIn);
