const takeOl = document.querySelector('#lista-tarefas');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const textoTarefasValue = document.querySelector('#texto-tarefa');

function criaTarefa (){   
    let li = document.createElement('li');
    li.innerText = textoTarefasValue.value;
    takeOl.appendChild(li);
    textoTarefasValue.value = "";
}
function addEventoButton (){
    buttonCriarTarefa.addEventListener('click', criaTarefa)
};
addEventoButton();