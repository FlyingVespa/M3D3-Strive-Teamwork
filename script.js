function changeViewToHideButton(par) {
  const selectViewButtons = document.querySelector("#hide-button");
  selectViewButtons.innerHTML = "hide";
}

// 1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your query

// const loadButton = document.querySelector(.)
function loadImages({ images }) {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.firstElementChild.remove();
    let img = document.createElement("img");
    img.style = "height: 225px";
    img.className = "card-img";
    img.src = images[i].url;
    card.innerHTML = img.outerHTML + " " + card.innerHTML;
  }
}

const getData = (search) => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=" + search)
    .then((response) => response.json())
    .then(loadImages)
    .catch((error) => console.log(error));
};

window.onload = () => changeViewToHideButton("Hide");

// function displayModalWithImage(){
//     const myModal = document.querySelector(".model-body"){
//         myModal.innerHTML= `<img class="modal-image" src=${images.url}>`
//     }
// }
