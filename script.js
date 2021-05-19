function changeViewToHideButton(par) {
  const selectViewButtons = document.querySelectorAll(
    "div.btn-group>button:nth-child(2)"
  );
  selectViewButtons.forEach((btn) => (btn.innerHTML = "Hide"));
  selectViewButtons.forEach((btn) => btn.setAttribute("id", "hide-button"));
  selectViewButtons.forEach((btn) => btn.setAttribute("data-toggle", "modal"));
  //   for (let i = 0; i < selectViewButtons.length; i++) {
  //     selectViewButtons[i].innerHTML = "hide";
  //   }
}

function myModal(event) {
  console.log(event.target); //what we clicked on
  const theModal = document.querySelector(".modal-body");
  let images = document.querySelectorAll(".card>.card-img");
  images.forEach((img) => {
    if (img.id === event.target.id) {
      //the id of the image is the same id we gave to the button
      theModal.innerHTML += `<img src=${img.url}}>`;
    }
  });
  const selected_img = images.filter((im) => im.id === id);
  console.log(selected_img);
}

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

    let view_btns = document.querySelectorAll(
      "div.btn-group>button:nth-child(1)"
    );
    view_btns.forEach((btn) => {
      btn.addEventListener("click", (event) => myModal(event));
      btn.id = images[i].id;
    });
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

const inputField = document.querySelector("input").value;
const searchFunc = () => getData().filter(inputField);
