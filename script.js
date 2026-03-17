// Get chord diagrams and
let chords = [];
const library = document.getElementById("libraryResults");
const eStringBarre = document.getElementById("eStringBarre")
const aStringBarre = document.getElementById("aStringBarre")
const dStringBarre = document.getElementById("dStringBarre")

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
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    swiper.update();
}

const displayAString = async () => {
    chords = await fillChords()
    library.innerHTML = ''
    let html = ''
    for (let i = 6; i < 12; i++){
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    swiper.update();
}

const displayDString = async () => {
    chords = await fillChords()
    console.log(chords)
    let html = ''
    for (let i = 12; i < 18; i++){
        html += `<div class="chord-card swiper-slide"><h2>${chords[i].name}</h2><img src="${chords[i].imgUrl}"><button class="card-btn">Add To Favorites</button></div>`
    }
    library.innerHTML = html
    swiper.update();
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
});


eStringBarre.addEventListener("click", displayEString)
aStringBarre.addEventListener("click", displayAString)
dStringBarre.addEventListener("click", displayDString)