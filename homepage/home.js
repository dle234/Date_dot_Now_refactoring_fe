import { logout, LoginStatus } from "../module/func.mjs";
const slide = document.querySelectorAll(".sliders li"),
  slideP = document.querySelectorAll(".p"),
  slideP2 = document.querySelectorAll(".p2"),
  slides = document.querySelector(".sliders"),
  myTaste = document.querySelector("#myTaste"),
  anotherTaste = document.querySelector("#anotherTaste"),
  slideLetter = document.querySelector("slideLetter"),
  sliderImg = document.querySelectorAll(".sliders li img"),
  slider2P = document.querySelectorAll(".sliders2 li p"),
  slider2A = document.querySelectorAll(".sliders2 li a"),
  slider2Img = document.querySelectorAll(".sliders2 li img"),
  slider2Img2 = document.querySelector("#section22"),
  slider2Img3 = document.querySelector("#section23"),
  slider2Img4 = document.querySelector("#section24"),
  slider2Img5 = document.querySelector("#section25"),
  slideWidth = 340,
  slideMargin = 20,
  prevBtn = document.querySelector("#leftI"),
  nextBtn = document.querySelector("#rightI"),
  logInLink = document.querySelector("#lo"),
  signInLink = document.querySelector("#si"),
  bar = document.querySelector("#bar"),
  logOutBtn = document.querySelector(".logout"),
  login = document.querySelector(".logInSignUp a:first-child"),
  category = document.querySelector(".questionWhere");

window.addEventListener("load", LoginStatus(logInLink, signInLink, logOutBtn));
logOutBtn.addEventListener("click", logout);

let currentIdx = 0,
  slideCount = slide.length;

makeClone();

function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin + 1) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
  //
}
function makeClone() {
  for (var i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    //a.cloneNode()는 a 클론, true 있으면 자식까지 클론
    cloneSlide.classList.add("clone");
    //a.appendChild(b) 는 a 의 뒤에 b 추가
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    //a.prepend(b) 는 a 의 앞에 b 추가
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}
function updateWidth() {
  let currentSlides = document.querySelectorAll(".sliders li");
  let newSlideCount = currentSlides.length;
  let newWidth =
    (slideWidth + slideMargin + 1) * newSlideCount - slideMargin + "px";
  slides.style.width = newWidth;
}

//추천 게시글 링크 불러오기

nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin + 1) + "px";
  currentIdx = num;
  console.log(currentIdx, slideCount);
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.add("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 600);
  }
}
slider2Img.forEach((img) => {
  img.addEventListener("click", function () {
    window.location = "/contentLook/";
  });
});

myTaste.addEventListener("click", (e) => {
  let data = category.value;
  console.log(data);
  axios.post("http://localhost:8080/api/v1/categorys", data).then((res) => {
    console.log(res);
  });
});

const getContents = () => {
  try {
    return axios.get("http://localhost:8080/api/v1/home/posts/event");
  } catch (error) {
    console.error(error);
  }
};

const tasteSort = () => {
  const contents = getContents();
  contents
    .then((res) => {
      if (res.data) {
        const innerContents = () => {
          let i = 0,
            k = 0,
            h = 0;
          slideP.forEach((p) => {
            p.innerText = data[i].title.substr(0, 20) + "...";
            i++;
          });
          slideP2.forEach((p) => {
            p.innerText = data[k].content.substr(0, 40) + "...";
            k++;
          });
          sliderImg.forEach((p) => {
            p.src = data[h].imageUrl;
            h++;
          });
        };

        myTaste.addEventListener("click", innerContents);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

tasteSort();

const origin = () => {
  try {
    return axios.get("http://localhost:8080/api/v1/home/posts/recommend");
  } catch (error) {
    console.error(error);
  }
};

const originContent = () => {
  const contents = origin();
  contents
    .then((res) => {
      if (res.data) {
        const innerContents = () => {
          let i = 0,
            k = 0,
            h = 0;
          slideP.forEach((p) => {
            p.innerText = data[i].title.substr(0, 20) + "...";
            i++;
          });
          slideP2.forEach((p) => {
            p.innerText = data[k].content.substr(0, 40) + "...";
            k++;
          });
          sliderImg.forEach((p) => {
            p.src = data[h].imageUrl;
            h++;
          });
        };
        innerContents();
        anotherTaste.addEventListener("click", innerContents);

        const innerContentsLast = () => {
          let i = 0,
            k = 0,
            h = 0;
          slider2P.forEach((p) => {
            p.innerText = data[i].title.substr(0, 20) + "...";
            i++;
          });
          slider2A.forEach((p) => {
            p.innerText = data[k].content.substr(0, 40) + "...";
            k++;
          });
          slider2Img.forEach((p) => {
            p.src = data[h].imageUrl;
            h++;
          });
        };
        innerContentsLast();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

originContent();

////////////////////

const hwBtn = document.querySelector("#hWBtn");

hwBtn.addEventListener("click", () => {
  window.location = "http://localhost:3000/research/";
});
