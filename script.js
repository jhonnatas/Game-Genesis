let order = [];
let clickedOrder = [] //Ordem dos clicks
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder; //atribui o indice do array com a cor sorteada
    clickedOrder = [];

    for(let i in order) { //Para cada element color, cria-se um novo elemento que será uma das cores
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados foram os mesmos da ordem do jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order [i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);  
}

//Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    }else if (color == 1) {
        return red;
    }else if (color == 2) {
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

//Função para próximo nível do jogo
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//Função para game over
let gameOver = () => {
    alert (`Pontuação: ${score}! \n Você perdeu o jogo\n Clique em OK para iniciar novo jogo`);
    order = []; //Zera os arrays
    clickedOrder = [];

    playGame(); //Reinicia o game
}

//Função de início do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(03);


//Início do jogo
playGame();