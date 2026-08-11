const formPokemon = document.getElementById("pokemon-form");
const inputPokemon = document.getElementById("pokemon-input");
const containerResultado = document.getElementById("pokemon-resultado-container");

formPokemon.addEventListener("submit", buscarPokemon);

async function buscarPokemon(event) {
  event.preventDefault();
  const pokemon = inputPokemon.value.trim().toLowerCase();

  if (pokemon === "") {
    inputPokemon.focus();
    return;
  }

  containerResultado.classList.remove("hidden");
  containerResultado.innerHTML = `<p class="erro" style="color: #fff">Buscando dados na pokedex...</p>`;

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!resposta.ok) {
      containerResultado.innerHTML = "<p class='erro'>ERRO 404:<br>POKEMON NÃO ENCONTRADO!</p>";
      inputPokemon.focus();
      return;
    }

    const dadosPokemon = await resposta.json();
    const tipoPrincipal = dadosPokemon.types[0].type.name;

    containerResultado.innerHTML = `
      <section class="pokemon-display">
        <div class="pokemon-img-container">
            <img src="${dadosPokemon.sprites.other["official-artwork"].front_default}" alt="${dadosPokemon.name}" />
        </div>
        <div class="pokemon-info">
            <p>NOME: ${dadosPokemon.name}</p>
            <p>TIPO: ${tipoPrincipal}</p>
            <p>ALT.: ${dadosPokemon.height / 10}m</p>
            <p>PESO: ${dadosPokemon.weight / 10}kg</p>
        </div>
      </section>
    `;
    inputPokemon.value = "";
    inputPokemon.focus();
  } catch (error) {
    containerResultado.innerHTML = "<p class='erro'>FALHA DE CONEXÃO COM A REDE PC!</p>";
  }
}