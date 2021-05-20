const myCarouselDiv = document.querySelector(".myCarouselDiv");
const myModalDiv = document.querySelector(".myModalDiv");
let AllImages = [];
// Exercise 1 & 2
const getData = (search) => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=" + search)
    .then((response) => response.json())
    .then((images) => (AllImages = images))
    .then(loadImages)
    .catch((error) => {
      console.log(error);
      alert(`Oops, we have a ${error} problem`);
    });
};

// Exercise 4
function changeViewToHideButton() {
  const editBtn = document.querySelectorAll(
    "div.btn-group>button:nth-child(2)"
  );
  editBtn.forEach((btn) => (btn.innerHTML = "Hide"));
  editBtn.forEach((btn) => btn.setAttribute("id", "hide-button"));
  editBtn.forEach((btn) => btn.setAttribute("onclick", "hideButton()"));
}

//Exercise 5                   <-------------------------NOT WORKING
function hideButton() {
  const hide_img = document.querySelector("img");
  hide_img.classList.toggle("hidden-image");
}

//Exercise 6

// const loadButton = document.querySelector(.)
function loadImages({ images }) {
  console.log(images);
  const nineMin = document.querySelectorAll("small");
  nineMin.forEach(
    (nonde) => (nonde.innerHTML = images.id)
  ); /*<-------------------------NOT WORKING*/
  const modalImg = document.createElement("img");
  modalImg.classList.add("img-fluid");
  const cards = document.querySelectorAll(".card");
  const theModal = document.querySelector(".modal-body");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.firstElementChild.remove();
    let img = document.createElement("img");
    img.style = "height: 225px";
    img.className = "card-img";
    img.src = images[i].url;
    card.innerHTML = img.outerHTML + " " + card.innerHTML;
    const viewbutten = () => {
      const viewBtn = document.querySelectorAll(
        "div.btn-group>button:nth-child(1)"
      );

      viewBtn.forEach((btn) => {
        btn.setAttribute("data-toggle", "modal");
        btn.setAttribute("data-target", "#exampleModal");
        btn.addEventListener("click", (e) => {
          let currentId = e.currentTarget;
          let currentCard = currentId.closest(".card");
          let currentCardImage = currentCard.querySelector("img");
          theModal.src = currentCardImage.src;
        });
      });
      viewbutten();
      theModal.appendChild(theModal);
    };
  }
}

window.onload = () => {
  changeViewToHideButton("Hide");
  createForrestCarosel();
  createModal();
  // replace9min();
  // searchFunc();
};

// function displayModalWithImage(){
//     const myModal = document.querySelector(".model-body"){
//         myModal.innerHTML= `<img class="modal-image" src=${images.url}>`
//     }
// }

// const inputField = document.querySelector("input").value;
// const searchFunc = () => getData(inputField);
const createForrestCarosel = () => {
  myCarouselDiv.innerHTML += `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`;
};

const createModal = () => {
  myModalDiv.innerHTML += `
  <div
  class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
`;
};
