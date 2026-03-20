// Get chord diagrams and
let chords = [];
const library = document.getElementById("libraryResults");
const eStringBarre = document.getElementById("eStringBarre")
const aStringBarre = document.getElementById("aStringBarre")
const dStringBarre = document.getElementById("dStringBarre")
let favorites = localStorage.getItem("chordFavorites")


async function fillChords() {
  const response = await fetch("chords.json");
  const data = await response.json();
  return data
}

const displayEString = async () => {
    chords = await fillChords()
    library.innerHTML = ''
    let html = ''
    for (let i = 0; i < 6; i++){
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    assignButtonEventListener()
    swiper.update();
}

const displayAString = async () => {
    chords = await fillChords()
    library.innerHTML = ''
    let html = ''
    for (let i = 6; i < 12; i++){
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    assignButtonEventListener()
    swiper.update();
}

const displayDString = async () => {
    chords = await fillChords()
    console.log(chords)
    let html = ''
    for (let i = 12; i < 18; i++){
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button data-id="${i}" class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    assignButtonEventListener()
    swiper.update();
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});

const addToFavorites = (btnId) => {
    console.log(btnId)
}

const assignButtonEventListener = () => {
    const buttons = document.querySelectorAll(".card-btn")
    console.log(buttons)
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            addToFavorites(button.dataset.id)
        })
    });
}



eStringBarre.addEventListener("click", displayEString)
aStringBarre.addEventListener("click", displayAString)
dStringBarre.addEventListener("click", displayDString)