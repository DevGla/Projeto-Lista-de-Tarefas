const takeOl = document.querySelector('#lista-tarefas');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const textoTarefasValue = document.querySelector('#texto-tarefa');

function criaTarefa (){   
    let li = document.createElement('li');
    takeOl.addEventListener('click', colocaBackGround);
    li.innerText = textoTarefasValue.value;
    takeOl.appendChild(li);
    textoTarefasValue.value = "";
}
function colocaBackGround(evento){
    evento.target.classList.add('selected');
}

function addEventoButton (){
    buttonCriarTarefa.addEventListener('click', criaTarefa)
};
addEventoButton();

function addEventoALista (){
    let takeOlArray = document.querySelector('#lista-tarefas');
    for (let index = 0 ; index < takeOlArray.length; index =+1){
        console.log(takeOlArray[index]);
    }    
}
addEventoALista();
//adicionar evento ao pai 