


////////////////////////////////////////
//////댓글등록////////////////////////////
////////////////////////////////////////
const comentContent = document.querySelector(".comentContent");
const comentBtn = document.querySelector(".comentBtn");
let comentcnt =0;
comentBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    comentcnt++;
    console.log(comentContent.innerText);
    axios.post('api/v1/comments/{postId}/{userId}',comentContent.innerText,{headers: {"Authorization": token,}})
        .then((res)=>{
            comentContent.innerText=comentcnt;
            makeComents(res.profileImg, res.writer, res.date,res.content);
        })
    
})



