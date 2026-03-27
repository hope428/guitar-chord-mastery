// Get chord diagrams and
let chords = [];
const library = document.getElementById("libraryResults");
const eStringBarre = document.getElementById("eStringBarre");
const aStringBarre = document.getElementById("aStringBarre");
const dStringBarre = document.getElementById("dStringBarre");
const favoritesCards = document.getElementById("favoritesResults")

async function fillChords() {
  const response = await fetch("chords.json");
  const data = await response.json();
  return data;
}

const displayEString = async () => {
  chords = await fillChords();
  library.innerHTML = "";
  let html = "";
  for (let i = 0; i < 6; i++) {
    html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`;
  }
  library.innerHTML = html;
  assignButtonEventListener();
  swiper.update();
};

const displayAString = async () => {
  chords = await fillChords();
  library.innerHTML = "";
  let html = "";
  for (let i = 6; i < 12; i++) {
    html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`;
  }
  library.innerHTML = html;
  assignButtonEventListener();
  swiper.update();
};

const displayDString = async () => {
  chords = await fillChords();
  console.log(chords);
  let html = "";
  for (let i = 12; i < 18; i++) {
    html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`;
  }
  library.innerHTML = html;
  assignButtonEventListener();
  swiper.update();
};

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});

const eliminateDuplicates = () => {
  let currentFaves = JSON.parse(localStorage.getItem("chordFavorites"));
  currentFaves = [...new Set(currentFaves)]
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves))
}

const addToFavorites = (btnId) => {
  let currentFaves = localStorage.getItem("chordFavorites");
  currentFaves = currentFaves ? JSON.parse(currentFaves) : [];
  currentFaves.push(btnId);
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves));
  eliminateDuplicates()
};

const assignButtonEventListener = () => {
  const buttons = document.querySelectorAll(".card-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      addToFavorites(button.dataset.id);
    });
  });
};

const loadMyChords = async () => {
    const chords = await fillChords();
    const currentFaves = JSON.parse(localStorage.getItem("chordFavorites"))
    let favoriteChords = []
    
    favoriteChords = currentFaves.map(index => chords[Number(index)]).filter(Boolean)

    return favoriteChords
}

const displayFavoriteChords = async () => {
  const favorites = await loadMyChords()
  console.log(favorites)

  let html = "";
  for (let i = 0; i < favorites.length; i++) {
    html += `<div class="chord-card swiper-slide"><h2>${favorites[i].name}</h2><img src="${favorites[i].imgUrl}"><button data-id="${i}" class="card-btn unfaveBtns">Unfavorite</button></div>`;
  }
  favoritesCards.innerHTML = html;
  swiper.update();

}

const assignUnfavoriteEvent = () => {
  const unfaveBtn = document.querySelectorAll(".unfaveBtns");
  unfaveBtn.addEventListener("click", () => {console.log(this)})
};

const unfavoriteChord = (btnId) => {
  console.log('clik unfave')
  let currentFaves = localStorage.getItem("chordFavorites");
  currentFaves = JSON.parse(currentFaves)

  let position = currentFaves.indexOf(btnId) + 1
  currentFaves.splice(position, 1)
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves));

  displayFavoriteChords()
  assignUnfavoriteEvent()
}



document.addEventListener("DOMContentLoaded", () => {
  const eStringBarre = document.getElementById("eStringBarre");
  const aStringBarre = document.getElementById("aStringBarre");
  const dStringBarre = document.getElementById("dStringBarre");

  eStringBarre?.addEventListener("click", displayEString);
  aStringBarre?.addEventListener("click", displayAString);
  dStringBarre?.addEventListener("click", displayDString);



  displayFavoriteChords();
});