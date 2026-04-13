// Get chord diagrams and
let chords = [
  {
    index: 0,
    name: "E String - A Major Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-a-major-barre.png",
  },
  {
    index: 1,
    name: "E String - A Minor Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-a-minor-barre.png",
  },
  {
    index: 2,
    name: "E String - G Minor Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-g-minor-barre.png",
  },
  {
    index: 3,
    name: "E String - G Major Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-g-major-barre.png",
  },
  {
    index: 4,
    name: "E String - F Major Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-f-major-barre.png",
  },
  {
    index: 5,
    name: "E String - F Minor Barre",
    imgUrl: "assets/chords/e-string-barre-chords/e-f-minor-barre.png",
  },
  {
    index: 6,
    name: "A String - B Major Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-b-major-barre.png",
  },
  {
    index: 7,
    name: "A String - B Minor Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-b-minor-barre.png",
  },
  {
    index: 8,
    name: "A String - C Minor Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-c-minor-barre.png",
  },
  {
    index: 9,
    name: "A String - C Major Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-c-major-barre.png",
  },
  {
    index: 10,
    name: "A String - D Major Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-d-major-barre.png",
  },
  {
    index: 11,
    name: "A String - D Minor Barre",
    imgUrl: "assets/chords/a-string-barre-chords/a-d-minor-barre.png",
  },
  {
    index: 12,
    name: "D String - A Major Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-a-major-barre.png",
  },
  {
    index: 13,
    name: "D String - A Minor Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-a-minor-barre.png",
  },
  {
    index: 14,
    name: "D String - F Minor Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-f-minor-barre.png",
  },
  {
    index: 15,
    name: "D String - F Major Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-f-major-barre.png",
  },
  {
    index: 16,
    name: "D String - G Major Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-g-major-barre.png",
  },
  {
    index: 17,
    name: "D String - G Minor Barre",
    imgUrl: "assets/chords/d-string-barre-chords/d-g-minor-barre.png",
  },
  {
    index: 18,
    name: "E String - F Dominant 7th",
    imgUrl: "assets/chords/e-string-7-chords/F7.png",
  },
  {
    index: 19,
    name: "E String - F Major 7th",
    imgUrl: "assets/chords/e-string-7-chords/Fmaj7.png",
  },
  {
    index: 20,
    name: "E String - F Minor 7th",
    imgUrl: "assets/chords/e-string-7-chords/Fm7.png",
  },
  {
    index: 21,
    name: "E String - G Dominant 7th",
    imgUrl: "assets/chords/e-string-7-chords/G7.png",
  },
  {
    index: 22,
    name: "E String - G Major 7th",
    imgUrl: "assets/chords/e-string-7-chords/Gmaj7.png",
  },
  {
    index: 23,
    name: "E String - G Minor 7th",
    imgUrl: "assets/chords/e-string-7-chords/Gm7.png",
  },
  {
    index: 24,
    name: "E String - A Dominant 7th",
    imgUrl: "assets/chords/e-string-7-chords/A7.png",
  },
  {
    index: 25,
    name: "E String - A Major 7th",
    imgUrl: "assets/chords/e-string-7-chords/Amaj7.png",
  },
  {
    index: 26,
    name: "E String - A Minor 7th",
    imgUrl: "assets/chords/e-string-7-chords/Am7.png",
  },
  {
    index: 27,
    name: "A Major",
    imgUrl: "assets/chords/major/aMaj.png",
  },
  {
    index: 28,
    name: "B Major",
    imgUrl: "assets/chords/major/bMaj.png",
  },
  {
    index: 29,
    name: "C Major",
    imgUrl: "assets/chords/major/cMaj.png",
  },
  {
    index: 30,
    name: "D Major",
    imgUrl: "assets/chords/major/dMaj.png",
  },
  {
    index: 31,
    name: "E Major",
    imgUrl: "assets/chords/major/eMaj.png",
  },
  {
    index: 32,
    name: "F Major",
    imgUrl: "assets/chords/major/fMaj.png",
  },
  {
    index: 33,
    name: "G Major",
    imgUrl: "assets/chords/major/gMaj.png",
  },
  {
    index: 34,
    name: "A Minor",
    imgUrl: "assets/chords/major/aMin.png",
  },
  {
    index: 35,
    name: "B Minor",
    imgUrl: "assets/chords/major/bMin.png",
  },
  {
    index: 36,
    name: "C Minor",
    imgUrl: "assets/chords/major/cMin.png",
  },
  {
    index: 37,
    name: "D Minor",
    imgUrl: "assets/chords/major/dMin.png",
  },
  {
    index: 38,
    name: "E Minor",
    imgUrl: "assets/chords/major/eMin.png",
  },
  {
    index: 39,
    name: "F Minor",
    imgUrl: "assets/chords/major/fMin.png",
  },
  {
    index: 40,
    name: "G Minor",
    imgUrl: "assets/chords/major/gMin.png",
  },
];
const library = document.getElementById("libraryResults");
const eStringBarre = document.getElementById("eStringBarre");
const aStringBarre = document.getElementById("aStringBarre");
const dStringBarre = document.getElementById("dStringBarre");
const favoritesCards = document.getElementById("favoritesResults");

const displayStringFunction = (first, last) => {
  let html = "";
  for (let i = first; i <= last; i++) {
    let btnHTMLNonFave = `<button data-id="${i}" class="card-btn">Add To Favorites</button></div>`;
    let btnHTMLFave = `<button data-id="${i}" disabled=true class="card-btn">Favorited!</button></div>`;
    let btnHTMLFinal = "";
    if (checkForFavorite(i)) {
      btnHTMLFinal = btnHTMLFave;
    } else {
      btnHTMLFinal = btnHTMLNonFave;
    }
    html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}">${btnHTMLFinal}`;
  }
  library.innerHTML = html;
  assignButtonEventListener();
  swiper.update();
};

const displayEString = () => {
  displayStringFunction(0, 5);
};

const displayAString = () => {
  displayStringFunction(6, 11);
};

const displayDString = () => {
  displayStringFunction(12, 17);
};

const display7th = () => {
  displayStringFunction(18, 26);
};

const displayMajor = () => {
  displayStringFunction(27, 33);
};

const displayMinor = () => {
  displayStringFunction(34, 40);
};

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});

const eliminateDuplicates = () => {
  let currentFaves = JSON.parse(localStorage.getItem("chordFavorites"));
  currentFaves = [...new Set(currentFaves)];
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves));
};

const addToFavorites = (btnId) => {
  let currentFaves = localStorage.getItem("chordFavorites");
  currentFaves = currentFaves ? JSON.parse(currentFaves) : [];
  currentFaves.push(btnId);
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves));
  eliminateDuplicates();
  event.target.innerText = "Favorited!";
};

const assignButtonEventListener = () => {
  const buttons = document.querySelectorAll(".card-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      addToFavorites(button.dataset.id);
    });
  });
};

const loadMyChords = () => {
  const currentFaves = JSON.parse(localStorage.getItem("chordFavorites"));
  let favoriteChords = [];

  favoriteChords = currentFaves
    .map((index) => chords[Number(index)])
    .filter(Boolean);

  return favoriteChords;
};

const displayFavoriteChords = () => {
  const favorites = loadMyChords();

  let html = "";
  if (favorites.length > 0) {
    for (let i = 0; i < favorites.length; i++) {
      html += `<div class="chord-card swiper-slide"><h2>${favorites[i].name}</h2><img src="${favorites[i].imgUrl}"><button data-id="${favorites[i].index}" class="card-btn unfaveBtns">Unfavorite</button></div>`;
    }
  } else {
    html = `<h2 class="no-favorites">No favorites yet! Check out the chord library!</h2>`;
  }
  favoritesCards.innerHTML = html;
  swiper.update();

  assignUnfavoriteEvent();
};

const assignUnfavoriteEvent = () => {
  const unfaveBtn = document.querySelectorAll(".unfaveBtns");

  for (let i = 0; i < unfaveBtn.length; i++) {
    unfaveBtn[i].addEventListener("click", (e) => {
      unfavoriteChord(e.target.dataset.id);
    });
  }
};

const unfavoriteChord = (btnId) => {
  let currentFaves = JSON.parse(localStorage.getItem("chordFavorites")) || [];

  let position = currentFaves.indexOf(btnId);
  if (position !== -1) {
    currentFaves.splice(position, 1);
  }
  localStorage.setItem("chordFavorites", JSON.stringify(currentFaves));
  displayFavoriteChords();
};

const checkForFavorite = (id) => {
  let currentFaves = localStorage.getItem("chordFavorites");
  currentFaves = JSON.parse(currentFaves);
  if (currentFaves.length > 0) {
    if (currentFaves.includes(String(id))) {
      return true;
    } else {
      return false;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const openMajor = document.getElementById("major");
  const openMinor = document.getElementById("minor");
  const eStringBarre = document.getElementById("eStringBarre");
  const aStringBarre = document.getElementById("aStringBarre");
  const dStringBarre = document.getElementById("dStringBarre");
  const eString7 = document.getElementById("7th");

  openMajor?.addEventListener("click", displayMajor);
  openMinor?.addEventListener("click", displayMinor);
  eStringBarre?.addEventListener("click", displayEString);
  aStringBarre?.addEventListener("click", displayAString);
  dStringBarre?.addEventListener("click", displayDString);
  eString7?.addEventListener("click", display7th);

  displayFavoriteChords();
});
