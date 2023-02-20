import { caution } from './module.mjs';

const emailInput = document.querySelector("#email"),
    pswordInput = document.querySelector("#password"),
    loginBtn = document.querySelector(".login-button"),
    errorMessage = document.querySelector(".error-message"),
    form = document.querySelector(".login-form");

// function errorEmail(){
//     errorMessage.innerText="이메일을 입력해 주세요"
// }

// function errorPassword(){
//     errorMessage.innerText="비밀번호를 입력해 주세요"
// }

function login() {

    if (emailInput.value == "") {
        caution.essentialInfo(errorMessage)
    } else if (pswordInput.value == "") {
        caution.essentialInfo(errorMessage)
    } else {
        errorMessage.innerText="";
        console.log(emailInput.value, pswordInput.value);
        localStorage.setItem('userId',emailInput.value);
        axios.post("http://localhost:8080/api/v1/user/login", 
        {username: emailInput.value, password: pswordInput.value}
        )
        .then((res)=>{
            console.log(res);
                
                localStorage.setItem('token',res.data.jwt);
                
                localStorage.setItem("isLoggedIn", true);
            
        
       
          location.href=`http://localhost:3000/`;
          
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



