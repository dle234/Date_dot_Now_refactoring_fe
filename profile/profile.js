// 로컬에 로그인 안돼잇으면 바로 로그인 창으로 이동~~~~
import { logout, LoginStatusInMyPage } from "../module/func.mjs";

const fileDOM = document.querySelector("#ex_file2");

const preview = document.querySelector(".image-box");
const form = document.querySelector("form");
let i = 1;
const addressPlus = document.querySelector("#addressPlus");

fileDOM.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    preview.src = target.result;
  };
  reader.readAsDataURL(fileDOM.files[0]);
  console.log(fileDOM.files[0]);
});

const name = document.querySelector(".fixed p:nth-child(2)");
const birth = document.querySelector(".fixed p:nth-child(4)");
const phoneNum = document.querySelector(".fixed p:nth-child(6)");

const email = document.querySelector(".unfixed p:nth-child(2)");
const nickname = document.querySelector(".unfixed p:nth-child(4)");
const logInLink = document.querySelector("#lo"),
  signInLink = document.querySelector("#si"),
  logOutBtn = document.querySelector(".logout");

window.addEventListener(
  "load",
  LoginStatusInMyPage(logInLink, signInLink, logOutBtn)
);
logOutBtn.addEventListener("click", logout);

axios.get("http://localhost:8080/user/{Long:user_id}").then((res) => {
  name.innerText = res.data.name;
  birth.innerText = res.data.birth;
  phoneNum.innerText = res.data.phoneNum;
  email.innerText = res.data.email;
});

const fix = document.querySelector(".modi button");
fix.addEventListener("click", () => {
  if (fix.innerText === "수정") {
    email.innerHTML = '<input type="text">';
    nickname.innerHTML = '<input type="text">';
    fix.innerText = "저장";
  } else {
    const email2 = document.querySelector(".unfixed p:nth-child(2) input");
    const nickname2 = document.querySelector(".unfixed p:nth-child(4) input");
    const formData = new FormData();

    const blob = new Blob([JSON.stringify(fileDOM.files[0])], {
      type: "application/json",
    });
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    formData.append("imageUrl", blob);
    formData.append("email", email2.value);
    formData.append("nickname", nickname2.value);
    axios.put("/user/{Long:user_id}", formData, config);
    email.innerHTML = `<p>${email2.value}</p>`;
    nickname.innerHTML = `<p>${nickname2.value}</p>`;
    fix.innerText = "수정";
  }
});
