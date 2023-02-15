

const emailInput = document.querySelector("#email"),
    pswordInput = document.querySelector("#password"),
    loginBtn = document.querySelector(".login-button"),
    errorMessage = document.querySelector(".error-message"),
    form = document.querySelector(".login-form");

function errorEmail(){
    errorMessage.innerText="이메일을 입력해 주세요"
}

function errorPassword(){
    errorMessage.innerText="비밀번호를 입력해 주세요"
}

function login() {

    if (emailInput.value === "") {
        errorEmail();
    } else if (pswordInput.value === "") {
        errorPassword();
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
                
                localStorage.setItem('ture','ture');
            
        
       
          location.href=`http://localhost:3000/`;
          
        })
        .catch(function (error) {
            alert(error);
        });
        
    }
}


// async loginToken (state, val) {
//     await axios.post('/api/users/login', {email: emailInput.value, password: pswordInput.value}).then(
//       (res) => {
//         localStorage.setItem('accessToken', res.data.data.accessToken)
//         localStorage.setItem('refreshToken', res.data.data.refreshToken)
//         localStorage.setItem('expiredTime', res.data.data.cur_time)
//         axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken
//       },
//       (err) => {
//         console.log(err);
//       }
//     )
//   }
//   async setToken (state) {
//     // HEADER에 토큰 설정
//     axios.defaults.headers.common['x-access-token'] =  localStorage.getItem('accessToken')
//     // 만료시간이 지났을 경우, RefreshToken을 이용하여 AccessToken 재발급
//     var expiredTime = await this.$moment.utc(localStorage.getItem('expiredTime'))
//     var diffTime = await this.$moment.duration(expiredTime.diff(this.$moment()))
//     if (diffTime < 10000){
//         axios.defaults.headers.common['x-refresh-token'] = localStorage.getItem('refreshToken')
//         await axios.get(process.env.BACKEND_URL+'/api/users/reissue').then(
//           (res) => {
//             localStorage.setItem('accessToken', res.data.data.accessToken)
//             localStorage.setItem('expiredTime', res.data.data.cur_time)
//             axios.defaults.headers.common['x-access-token'] =  localStorage.getItem('accessToken')
//           },
//           (err) => {
//               // Login 페이지로 리디렉션
//           }
//         ) 
//     }
//     return new Promise(function(resolve, reject) {
//         resolve(true)
//     });
//   }


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



