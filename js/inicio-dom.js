// 1 - acessando um elemento
// document - representa toda a página/arquivo
// getElementById - é um método(função, ação) que procura um elemento pelo atribuo ID
const paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

// 2 - alterando o contéudo de um elemento
paragrafo.textContent = "Alterando o texto do paragrafo com JS"


// 3 - alterando o estilo
paragrafo.style.color = "blue"
paragrafo.style.fontSize = "2rem"


// 4 - criando elemento
// createElement - serve para criar um novo elemento HTML.
const paragrafoJavaScript = document.createElement("p")


// 4.1 - atualizando o conteúdo do paragrafo
paragrafoJavaScript.textContent = "Este paragrafo foi criado com JavaScript"

// 4.1.1 - atualizando estilos do elemento
paragrafoJavaScript.style.fontFamily = "sans-serif"
paragrafoJavaScript.style.fontSize = "1.5rem"
paragrafoJavaScript.style.backgroundColor = "deeppink"
paragrafoJavaScript.style.color = "#111"
paragrafoJavaScript.style.padding = ".5rem"
paragrafoJavaScript.style.borderRadius = "1rem "
paragrafoJavaScript.style.textAlign = "center"


// 4.2 - inserindo o paragrafo na página
// appendChild - serve para adicionar um item ao final da página
document.body.appendChild(paragrafoJavaScript)


// 5 - removendo um elemento do HTML
// capturando elemento de título pelo ID
const titulo = document.getElementById("titulo")

// 5.1 - removendo
titulo.remove()