export const caution = {
  essentialInfo(box) {
    box.innerText = "필수 정보입니다.";
  },

  cautionMessage(box, text) {
    box.innerText = text;
  },
};

function showLogOutBtn(logInLink, signInLink, logOutBtn) {
  logInLink.style.display = "none";
  signInLink.style.display = "none";
  logOutBtn.style.display = "flex";
}

export function LoginStatus(logInLink, signInLink, logOutBtn) {
  if (localStorage.getItem("userId")) {
    showLogOutBtn(logInLink, signInLink, logOutBtn);
  } else {
    logInLink.style.display = "flex";
    signInLink.style.display = "flex";
    logOutBtn.style.display = "none";
  }
}

export function LoginStatusInMyPage(logInLink, signInLink, logOutBtn) {
  if (localStorage.getItem("userId")) {
    showLogOutBtn(logInLink, signInLink, logOutBtn);
  } else {
    if (confirm("로그인 페이지로 이동하시겠습니까?")) {
      location.href = "http://localhost:3000/login/";
    } else {
      window.history.back();
    }
  }
}

export function logout() {
  if (confirm("로그아웃 하겠습니까?")) {
    localStorage.removeItem("userId");
  }
}
