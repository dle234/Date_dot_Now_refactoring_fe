

// const testArr1 ={ today_date:"2022.03.23", totalTitle:"제목입니다." , totalContent : "오늘 소개할 데이트 코스는 실내 데이트 코스 입니다."};

// const testArr2 =[
//     { corabTitle:"펭귄마을" , corabContent : "펭귄마을 근처에서 먹을만한 곳은.... " , corabCost :"20000", corabHour:"3"},
//     { corabTitle:"동명동" , corabContent : "동명동 근처에서 먹을만한 곳은.... " , corabCost :"50000", corabHour:"1"},
//     { corabTitle:"봉선동" , corabContent : "봉선동 근처에서 먹을만한 곳은.... " , corabCost :"30000", corabHour:"4"}

// ];

// const totalCostHour={
//     totalCost:"100000" , totalHour:"8"
// };

// const views='1000';
// const recommendCount= '100';
// const mainContentOb="양림동 펭귄마을공예거리는 양림동 주민 센터 뒤에 펭귄모양의 이정표를 따라 좁은 골목길을 들어가면 70,80년대 마을이 전시장으로 변모한 곳으로 무릎이 불편한 어르신이 뒤뚱뒤뚱 걷는 모습이 펭귄 같다고 하여 이름 지어진 마을이다. 마을 주민들은 과거에 화재로 타 방치되어 있던 빈집을 치우고 버려진 물건을 가져와 동네 벽에 전시하기 시작했으며, 마을 담벼락 에는''그때 그 시절 살아있음에 감사하자'' 고 새겨 놓았다. 최승효 가옥, 우일사 선교사 사택, 오웬 기념각 등의 역사문화도 보유하고 있다. 마을 한가운데 있는 펭귄 주막은 주민들의 사랑방, 조그맣지만 필요한 물건들이 다 있다. 가죽공방, 섬유공방, 목공방 등 다채로운 공방들이 공예 거리에 입주해 있어서 예쁜 공예품을 구매하거나 근대와 현대가 공존하는 레트로 감성의 업사이클링 공예체험도 가능하다. 폐현수막 소재 파우치 만들기, 폐품 활용 미술작품 만들기 등 업사이클링 공방 체험 프로그램, 예쓰(예술+쓰레기 줍기) 투어코스, 원데이 클래스와 같은 체험 활동들을 운영하고 있다."

// axios.get("http://localhost:8080/api/v1/posts",{headers:{"Authorization": "Bearer " + localStorage.getItem("token") }})
//   .then((res) => {
//     render(page, res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// let postId=5;
// const url = `/contentLook/${postId}`;

// history.pushState(null, null, url);

// fetch("http://localhost:3000/contentLook/")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));
//const urlParams = location.href.searchParams;
// const name = urlParams.get('name');
let url= window.location.href;
const postid=url.slice(34);
console.log(postid);

let dataarr2=null;
axios.get(`http://localhost:8080/api/v1/posts/${postid}`,{headers:{"Authorization": "Bearer " + localStorage.getItem("token") }})
      .then((res)=>{
        dataarr2=res.data;
        createContents(res.data);
        
        
      })
      .catch(err=>{
        console.log(err);
      });



const contentExDate = document.querySelector(".contentEx h:first-child");
const contentExTitle = document.querySelector(".contentEx h:nth-child(3)");
contentExDate.innerText =dataarr2.createdAt;
contentExTitle.innerText =dataarr2.title;

const view = document.querySelector(".jochudat p:nth-child(2)");
const recommend = document.querySelector(".jochudat p:nth-child(4)");
const commentCnt = document.querySelector(".jochudat p:last-child");

view.innerText =dataarr2.viewCnt;
recommend.innerText =dataarr2.recommendCnt;
commentCnt.innerText=dataarr2.commentCnt;


/////해시태그
// const hashTag = ["#양림동갈곳", "#동명동맛집","#인스타맛집"];
const hashs = document.querySelector(".hash");

for(i=0;i<dataarr2.hashtag[0].length;i++){
    const hash = document.createElement("li");
    hash.innerText=`${dataarr2.hashtag[i]}`;
    hashs.appendChild(hash);
    
};
/////게시글 내용
const mainContent = document.querySelector(".mainContent");
mainContent.innerText=dataarr.content;

//////
const corabBox = document.querySelector(".corabBox");

function makeContent(cost,hour,location,content){
    const corabbox = document.createElement("li");
    corabbox.innerHTML = 
    `
            <div>
                <div>
                    <div class="corab1">
                        예상비용*
                    </div>
                    <div id="firstcorab">
                        ${cost}원
                    </div>
        
                </div>
                <div>
                    <div class="corab3">
                        예상시간*
                    </div>
                    <div  id="secondcorab">
                        ${hour}시간
                    </div>
        
                </div>
            </div>
            <div>
                <div class="corab" id="cc">
                    ${location}
                </div>
                <div class="corab"id="aa">
                    ${content} 
                </div>
        
            </div>
            
        `
        corabBox.appendChild(corabbox);
}

//data 가져온다음...
function createContents(dataarr){
    for (let id = 0; id <=testArr2.length ; id++) {
        makeContent(dataarr[id].expCost , dataarr[id].expTime,dataarr[id].title,dataarr[id].content);
        
};}


const final1=document.querySelector("#final1");
const final2=document.querySelector("#final2");
const img= document.querySelector(".img");
const totalCost=0;
const totalHour=0;
dataarr2.forEach((data)=>{
    totalCost+=data.expCost;
    totalHour+=data.expTime; });

final1.innerText =totalCost;
final2.innerText=totalHour;
img.src=dataarr2.imageUrl;



