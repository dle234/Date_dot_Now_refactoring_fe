const corabList = document.querySelector(".corab-list");
const plusButton = document.querySelector(".corab-plus-btn");

function makeCorab() {
  const corab = document.createElement("li");
  corab.className = "corab-inputs"
  corab.dataset.num = Date.now();
  
  corab.innerHTML = ` <div>
                    <div>
                        <div class="corab1">
                            예상비용*
                        </div>
                        <input class="corab-cost" placeholder="숫자로 입력" name="content" contenteditable="true" id="firstcorab" />
                    </div>
                    <div>
                        <div class="corab3">
                            예상시간*
                        </div>
                        <input class="corab-time" placeholder="숫자로 입력" name="content" contenteditable="true" id="secondcorab" />
                    </div>
                </div>
                <div>
                    <input class="corab" id="cc" contenteditable="true" placeholder="위치 혹은 장소를 입력해 주세요." />
                    <div class="corab" id="aa" name="content" contenteditable="true"></div>
                </div>
                <button class="trashBtn">
                <i class="fa-solid fa-arrow-up"></i>
                <i class="fa-solid fa-arrow-down"></i>
                </button>`;

  const innerDeleteButton = document.createElement('i');
  innerDeleteButton.innerHTML=`<i class="fa-regular fa-trash-can"></i>`;
  innerDeleteButton.classList.add('trashBtn');

  const innerPlusButton = document.createElement('i');
  innerPlusButton.innerHTML=`<i class="fa-solid fa-circle-plus"></i>`;
  innerPlusButton.classList.add('noneBtn');

  corab.appendChild(innerDeleteButton);
  corab.appendChild(innerPlusButton);
  corabList.appendChild(corab);

  innerDeleteButton.addEventListener('click', deleteCorab);
  innerPlusButton.addEventListener('click', makeCorab);
}

function deleteCorab(e) {
  const selectCorab = e.target.closest('li');
  selectCorab.remove();
}

plusButton.addEventListener("click", makeCorab)


//     let jwt_token = 'dsfsfff';
//     //localStorage.getItem('jwt-token');
//     corabList.push({keyword:corabLocation[r],expCost:TCs[r],expHour:TTs[r], content:corabContent[r]});
//         axios.post("api/v1/posts/{postId}/postmaps/{userId}",corabList[r],{headers:jwt_token})
//             .then(res=>{
//                 console.log(res);
//             })
//             .catch(err=>{
//                 console.log(err);
//             })

//     r++;
// })