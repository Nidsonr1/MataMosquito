var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

//definindo o tempo por dificuldade
if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
    tempo = 15;
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000;
    tempo = 20;
} else if(nivel === 'johnwick'){
    criaMosquitoTempo = 750;
    tempo = 25
}


//Função para ajustar o tamanho da tela, evitando criar scroll bars tanto vertical como horizontal
function ajustaTamanhoTela() {
  largura = window.innerWidth;
  altura = window.innerHeight;
  console.log(largura, altura);
}

ajustaTamanhoTela();
//cronômetro do game
var cronometro = setInterval(function() {
    tempo--;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    } 
}, 1000);


//Função para gerar posições aleatórias para o mosquito
function posicaoAleatoria() {

  //Remover mosquito anterior (caso exista);
  if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        
        //Diminui as vidas caso não seja clicado no mosquito
        if(vidas > 3) {
            window.location.href = "gameOver.html"
        } else {
            document.getElementById('v' + vidas).src="../css/imagens/coracao_vazio.png";
            vidas++;
        }

  }
  
  
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //cria o elemento HTML
  var mosquito = document.createElement("img");
  mosquito.src = "../css/imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();//Espaço não concatena os nomes dos estilos
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function(){
      this.remove();
  }
  document.body.appendChild(mosquito);
}

//Função para gerar tamanho aleatório para o mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

//Função para gerar Lado aleatório para o mosquito
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}
