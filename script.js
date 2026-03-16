// Get chord diagrams and
let chords = [];
const library = document.getElementById("library");
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
    console.log(chords)
    let html = ''
    for (let i = 0; i < 6; i++){
        html += `<div class="chord-card"><h2>${chords[i].name}<h2><img src="${chords[i].imgUrl}"></div>`
    }
    library.innerHTML = html
}


eStringBarre.addEventListener("click", displayEString)