
//댓글 페이지내이션////////////////////
//////////////////////////////////////

const comentList = document.querySelector(".commentList");
const pageButtons = document.querySelector(".pageButtons");
const commentArr=[{userName:"닉네임" , content:"1안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"2안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"3안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"4안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"5안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"6안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"7안녕하세요 잘 봤어요.", date:"2021.02.02"},
{userName:"닉네임" , content:"8안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"9안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"10안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"11안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"12안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"13안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"14안녕하세요 잘 봤어요.", date:"2021.02.02"},{userName:"닉네임" , content:"15안녕하세요 잘 봤어요.", date:"2021.02.02"},
];
const numOfContent = commentArr.length;
const showContent = 8;
const showButton = 10;
//let maxContent= commentsArr.length;
let maxContent= 8;
let maxButton = 10;
//const maxPage = Math.ceil(numOfContent / maxContent);
const maxPage = Math.ceil(numOfContent / maxContent);
let page='1';
comentCounts.innerText = commentArr.length;
console.log(commentArr.length);
//comment.innerText = commentsArr.length;

function makeComents(img,userName,date,contents){
    const content = document.createElement("li");
    
    content.innerHTML = 
    ` <div class="box"> 
    <img src="${img}" alt="">
<div>
    <div class="jungbo">
        <p>${userName}</p>
        <p>${date}</p>
    </div>
    <div>${contents}</div>
</div>

</div>
<hr class="line" >`
        
    ;
    comentList.appendChild(content);
}

// const goPrevPage = () => {
//     page -= maxButton;
//     render(page);
//   };
  
//   const goNextPage = () => {
//     page += maxButton;
//     render(page);
//   };
  
//   const prev = document.createElement("button");
//   prev.classList.add("button", "prev");
//   prev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
//   prev.addEventListener("click", goPrevPage);
  
//   const next = document.createElement("button");
//   next.classList.add("button", "next");
//   next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
//   next.addEventListener("click", goNextPage);




    



// //밑에 페이지 태그
// const makeButton = (id) => {
//     const button = document.createElement("Button");
//     button.classList.add("button");
//     button.dataset.num = id;
//     button.innerText = id;
//     //button이라는 버튼을 만들고 클래스는 button, num은 id값, html에 id값을 넣어줌
//     button.addEventListener("click", (e) => {
//         //Array.prototype.forEach.call(pageButtons.children, (button) => {
//         [].forEach.call(pageButtons.children, (button) => {
//          // pageButtons.forEach((button) => {
//         if (button.dataset.num) button.classList.remove("active");
//         });// 콜백함수 사용이유가 
//         e.target.classList.add("active");
//         renderContent(parseInt(e.target.dataset.num));
//     });//버튼 클릭 시 페이지버튼의 자식요소들마다 콜백함수 실행,
//     // 콜백함수는 버튼의 num이 0이 아니면() 버튼의 클래스 active지움.
//     // 이때 클래스 active는 색깔 빨갛게 변하는 것.
//     // e.target은 특정 이벤트가 발생하는 태그 가져옴.->버튼 클릭 시 active 클래스 됨.(빨게짐)
//     //renderContent함수 실행(클릭한 버튼의 num을 renderContent함수에 전달.)
//     //                                 ->
//     return button;
//     };
// //위에 button -> buttons 로 바꾸고 buttons.forEach(button넣기) 로 
// ///////////////////////////////////////////////////





// ///////////////////////////////////////////////////////////


// const renderContent = (page) => {
//     // 목록 리스트 초기화
//     while (comentList.hasChildNodes()) {
//         comentList.removeChild(comentList.lastChild);
//       }
    
//     // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
//     for (let id = (page - 1) * maxContent; id <= page * maxContent && id <= numOfContent; id++) {
        


//     }
//   };
  
//   const renderButton = (page) => {
//     // 버튼 리스트 초기화
//     while (pageButtons.hasChildNodes()) {
//         pageButtons.removeChild(pageButtons.lastChild);
//       }
    
//     // 화면에 최대 10개의 페이지 버튼 생성
//     for (let id = page; id < page + maxButton && id <= maxPage; id++) {
//         pageButtons.appendChild(makeButton(id));
//     }
//     // 첫 버튼 활성화(class="active")
//     pageButtons.children[0].classList.add("active");
  
//     pageButtons.prepend(prev);
//     pageButtons.append(next);
  
//     // 이전, 다음 페이지 버튼이 필요한지 체크
//     if (page - maxButton < 1) pageButtons.removeChild(prev);
//     if (page + maxButton > maxPage) pageButtons.removeChild(next);
//   };
  
//   const render = (page) => {
//     renderContent(page);
//     renderButton(page);
//   };

//   render(page);
