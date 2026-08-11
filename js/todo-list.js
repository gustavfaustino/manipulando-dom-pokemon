const form = document.getElementById("todo-form");
const input = document.getElementById("tarefa");
const lista = document.getElementById("todo-list");

form.addEventListener("submit", adicionarTarefa);

function adicionarTarefa(event) {
  event.preventDefault();
  const textoTarefa = input.value.trim();

  if (textoTarefa === "") {
    input.focus();
    return;
  }

  const itemLista = document.createElement("li");
  itemLista.classList.add("todo-item");

  const texto = document.createElement("span");
  texto.textContent = textoTarefa;

  const btnConcluir = document.createElement("button");
  btnConcluir.setAttribute("aria-label", "Concluir tarefa");
  btnConcluir.classList.add("concluir");

  const iconConcluir = document.createElement("i");
  iconConcluir.classList.add("bi", "bi-check-lg");
  btnConcluir.append(iconConcluir);

  const btnRemover = document.createElement("button");
  btnRemover.setAttribute("aria-label", "Remover tarefa");
  btnRemover.classList.add("remover");

  const iconRemover = document.createElement("i");
  iconRemover.classList.add("bi", "bi-trash3");
  btnRemover.append(iconRemover);

  const acoes = document.createElement("div");
  acoes.classList.add("acoes");
  acoes.append(btnConcluir);
  acoes.append(btnRemover);

  itemLista.append(texto);
  itemLista.append(acoes);
  lista.append(itemLista);

  input.value = "";
  input.focus();

  btnRemover.addEventListener("click", () => {
    itemLista.remove();
  });

  btnConcluir.addEventListener("click", () => {
    texto.classList.toggle("tarefa-concluida");
    const tarefaConcluida = texto.classList.contains("tarefa-concluida");

    if (tarefaConcluida) {
      iconConcluir.classList.remove("bi-check-lg");
      iconConcluir.classList.add("bi-arrow-clockwise");
      btnConcluir.setAttribute("aria-label", "Desmarcar tarefa");
      lista.append(itemLista);
    } else {
      iconConcluir.classList.remove("bi-arrow-clockwise");
      iconConcluir.classList.add("bi-check-lg");
      btnConcluir.setAttribute("aria-label", "Concluir tarefa");
      lista.prepend(itemLista);
    }
  });
}