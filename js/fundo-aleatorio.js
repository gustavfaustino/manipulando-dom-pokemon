// trocando o fundo do site com base no horário

const date = new Date()

// trocar o valor de hora para date.getHours()
const hora = 7

// pegando outros elementos
const minutos = date.getMinutes()
const anoCompleto = date.getFullYear()

// se for de manhã, o background da página vai ser um
// se for de tarde, o background da página vai ser outro
// se for de noite, o background da página vai ser outro

// @media screen and (min-width: 800px)
//      A      E      B

// Manhã
if (hora >= 6 && hora < 12) {
  // document.body.style.background = "linear-gradient(135deg, #faff65, #FFD180, #90CAF9)"

  document.body.style.backgroundImage = "url('./assets/imagem-manha.jpg')";

} else if (hora >= 12 && hora < 18) {
  document.body.style.background = "linear-gradient(145deg, #FF8A65, #FFB74D, #64B5F6)"

} else if (hora >= 18 && hora < 24) {
  document.body.style.background = "linear-gradient(155deg, #000428,  #211132, #004E92)"

} else {
  document.body.style.background = "linear-gradient(155deg, #0b7c51,  #3f0d74, #183f60)"
}

