const takeOl = document.querySelector('#lista-tarefas');
const buttonCriarTarefa = document.querySelector('#criar-tarefa');
const textoTarefasValue = document.querySelector('#texto-tarefa');

function criaTarefa (){   
    let li = document.createElement('li');
    takeOl.addEventListener('click', colocaBackGround);
    //takeOl.addEventListener('ondblclick', colocaRisco);
    li.innerText = textoTarefasValue.value;
    takeOl.appendChild(li);
    textoTarefasValue.value = "";
}
//verificar se algum tem e tirar dele 
//rpeciso varrer o array, se nenhum tiver coloco no evento, se algum tiver tiro dele e coloco no evento

function colocaBackGround (evento){
    if (evento.target.className !== 'selected'){
        evento.target.classList.add('selected');
    } else if (evento.target.className === 'selected'){
        evento.target.classList.remove('selected');
    }
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

let buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', apagaTarefas);
function apagaTarefas (){
    location.reload();
} 