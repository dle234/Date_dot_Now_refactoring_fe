const list = document.querySelector(".list");

function makeContents(
  location,
  postOption,
  title,
  postContents,
  profilePhoto,
  profileName,
  userLook
) {
  const content = document.createElement("li");
  content.classList.add("box");
  content.innerHTML = `
    <img src="https://placeimg.com/390/250" alt="">
    <div class="hashTag">#맛집 #힐링</div>
    <div class="blackBox">
        <i class="fa-solid fa-location-dot"></i>
        <p>${location}</p></div>

    <div id="title" >
        <span>${postOption}</span>
        <span>${title}</span>
    </div>
    <div id="postContents" >${postContents}</div>
    <div class="userAndLook" >
        <div id="user">
            <img src=${profilePhoto} alt="">
            <span>${profileName}</span>
        </div>
        
        <div id="look">
            <i class="fa-regular fa-eye"></i>
            <span>${userLook}</span>
        </div>
    </div>`;
  list.appendChild(content);
}

//makeContents("동명동","맛집탐방",`감성카페랑 제목`,"안녕하세요 포스트 내용이 들어갈 자리 입니다.","https://placeimg.com/25/25","에코노","100" );

///////////////////////
const x = document.querySelector("#X");
x.addEventListener("click", () => {
  window.history.back();
});
