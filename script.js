const takeOl = document.querySelector('#lista-tarefas');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const textoTarefasValue = document.querySelector('#texto-tarefa');

function criaTarefa() {
  const li = document.createElement('li');
  takeOl.addEventListener('click', colocaBackGround);
  takeOl.addEventListener('dblclick', colocaRisco);
  li.innerText = textoTarefasValue.value;
  takeOl.appendChild(li);
  textoTarefasValue.value = '';
}

function colocaBackGround(evento) {
  const takeSelected = document.querySelectorAll('.selected');
  for (let i of takeSelected) {
    i.classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function colocaRisco(evento) {
  if (evento.target.classList.contains('completed')){
    evento.target.classList.remove('completed')
  } else {
    evento.target.classList.add('completed')
  }
}

function addEventoButton() {
  buttonCriarTarefa.addEventListener('click', criaTarefa);
}
addEventoButton();

const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', apagaTarefas);
function apagaTarefas() {
  location.reload();
}
