
    
/////////////////해시태그////////////
///////////////////////////////
const hashTagInput = document.querySelector(".hashTag");
const hashTagList = document.querySelector(".hashTagList");



function deleteHashTag(event){
    event.preventDefault();
    const deleteH =event.target.closest('li');
    deleteH.remove();


    // for(i=0;i<hashTagArr.length;i++){
    //     if(parseInt(hashTagArr[i].id)===parseInt(deleteH.dataset.num)){
    //         hashTagArr.splice(i,1);
    //     }
    // };
    //hashTagArr = hashTagArr.filter((hTA)=>hTA.id)!==parseInt(deleteH.dataset.num);  
    
    
}

hashTagInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 32)
    {
        event.preventDefault();
        makeHashtags();
    }
    else if (event.keyCode === 13){
        event.preventDefault();
        makeHashtags();
    }
});

function makeHashtags() {
    const hash = document.createElement("li");
    // hash.dataset.num=Date.now();
    
    const text = document.createElement("a");
    text.innerHTML = `#${hashTagInput.value}`;
    text.className = "hashtag";
    hash.appendChild(text);

    
    hashTagInput.value=null;

    const deleteButton =document.createElement("i");
    deleteButton.innerHTML=`<i class="fa-solid fa-square-xmark"></i>`
    hash.appendChild(deleteButton);

    deleteButton.addEventListener('click',deleteHashTag);
    
    hashTagList.appendChild(hash);

    
    
}
////////////////////////////////////////////


