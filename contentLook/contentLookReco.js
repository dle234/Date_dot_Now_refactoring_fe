let reco = '0';
const comentCounts = document.querySelector(".comentCounts");

const recommendBtn = document.querySelector(".recommend");
const recommendsHeart1 = document.querySelector(".recommend div:nth-child(2)");
const recommendsHeart2 = document.querySelector(".recommend div:nth-child(3)");
const recommendsCount = document.querySelector(".g p:last-child");

const comment = document.querySelector(".jochudat p:last-child");
const userId=localStorage.getItem(userId);

let url= window.location.href;
const postid=url.slice(34);

///추천기능
recommendsCount.innerText = reco; //추천수
recommendBtn.addEventListener('click',()=>{
    if(recommendsHeart2.classList.contains("icon")){
        recommendsHeart2.classList.remove("icon");
        recommendsHeart1.classList.add("icon");
        reco++;
        axios.post(`api/v1/postlike/${postid}/${userId}`,{'recommendCnt':reco}),{headers:{"Authorization": "Bearer " + localStorage.getItem("token") }};
    }

    else{
        recommendsHeart2.classList.add("icon");
        recommendsHeart1.classList.remove("icon");
        reco--;
        axios.post(`api/v1/postlike/${postid}/${userId}`,{'recommendCnt':reco}),{headers:{"Authorization": "Bearer " + localStorage.getItem("token") }};
    }
    //
    recommendsCount.innerText = reco;
    
});


