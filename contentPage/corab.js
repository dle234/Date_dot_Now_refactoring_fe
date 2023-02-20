const Editor = toastui.Editor;
const editor = new toastui.Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",

  initialEditType: "wysiwyg",
  hideModeSwitch: true,

  toolbarItems: [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
  ],
});

const fileDOM = document.querySelector("#ex_file2");
const preview = document.querySelector(".image-box");

fileDOM.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    preview.src = target.result;
  };
  reader.readAsDataURL(fileDOM.files[0]);
});

function getImage() {
  // 파일
  return fileDOM.files[0];
}

const submitButton = document.querySelector(".submitBtn");

async function submitPost() {
  const postDTO = createPostDTO();
  const image = getImage();

  let formData = new FormData();

  // formData.append("postDTO", postDTO);

  formData.append("image", image);

  console.log(image);

  const responseDTO = await axios.post(
    "http://localhost:8080/api/v1/posts",
    postDTO,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );

  if (responseDTO.status === 201) {
    const resonseImg = await axios.put(
      `http://localhost:8080/api/v1/postsImg/${responseDTO.data.id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    if (resonseImg.status === 200) {
      window.location = "/boardPage";
    }
  } else {
    return;
  }
}

function createPostDTO() {
  const titleInput = document.querySelector(".boardTitle");
  const hashTagArray = document.querySelectorAll(".hashtag");
  const categoryInput = document.querySelector(".questionWhere");
  const postMapList = document.querySelectorAll(".corab-inputs");
  const mapList = document.querySelectorAll("#mapList");

  let hashTagAll = "";
  hashTagArray.forEach((hash) => {
    hashTagAll += hash.text;
  });

  let postMaps = [];
  postMapList.forEach((postMap) => postMaps.push(createPostMapObject(postMap)));

  let maps = [];
  mapList.forEach((map) => maps.push(createMapObject(map)));

  postDTO = {
    title: titleInput.value,
    content: editor.getHTML(),
    hashTag: hashTagAll,
    category: categoryInput.name,
    postMapList: postMaps,
    mapList: postMaps,
  };

  return postDTO;
}

function createPostMapObject(postMap) {
  const cost = postMap.querySelector(".corab-cost")?.value;
  const hour = postMap.querySelector(".corab-time")?.value;
  const keyword = postMap.querySelector("input.corab")?.value;
  const content = postMap.querySelector("div.corab")?.innerText;

  return {
    expCost: cost,
    expTime: hour,
    keyword: keyword,
    content: content,
  };
}

function createMapObject(map) {
  const address = map.querySelector(".address")?.innerText;
  const lat = map.querySelector(".lat")?.innerText;
  const lng = map.querySelector(".lng")?.innerText;

  return {
    lat: lat,
    lng: lng,
    keyword: address,
  };
}

submitButton.addEventListener("click", submitPost);
