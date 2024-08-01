//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let hRaquete = 90;
let wRaquete = 10;

//variaveis da raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//colisao
let colidiuOponente = false;
let colidiuMinha = false;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  //bolinha
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  desprendeBolinha();
  
  //raquete
  mostraRaquete(xRaqueteOponente, yRaqueteOponente,xRaquete, yRaquete);  
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaBordaRaquete();
  
  //placar
  calculaPlacar();
  mostraPlacar();
  
  
}


function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mostraRaquete(x, y, z, k){
  rect(x, y, wRaquete, hRaquete);
  rect(z, k, wRaquete, hRaquete);
}

function verificaColisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
  } 
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10
  }
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y){
  colidiuOponente = collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if(colidiuOponente){
    velocidadeXBolinha *= - 1
  }
}  

function calculaPlacar(){
  if(xBolinha + raio > width - 6){
    meusPontos++;
    console.log("PONTO SEU ("+meusPontos+")");
  }
  if(xBolinha - raio < 6){
    pontosOponente++;
    console.log("PONTO DO OPONENTE ("+pontosOponente+")");
  }
}  

function mostraPlacar(){
   stroke(255);
   textAlign(CENTER);
   textSize(16);
   fill(color(150, 20, 200));
   rect(150, 10, 40, 20);
   fill(255);
   text(meusPontos, 170, 26);
   rect(320, 10, 2, 26)
   fill(color(150, 20, 200));
   rect(450, 10, 40, 20);
   fill(255);
   text(pontosOponente, 470, 26);
  
}

function desprendeBolinha(){
  if(xBolinha - raio < 0){
    xBolinha = 23;
  }
  if(xBolinha + raio > width){
    xBolinha = width - 23;
  }
}

function verificaBordaRaquete(){
  if(yRaquete < 0){
    yRaquete += 11
  }
  if(yRaquete + hRaquete > height){
    yRaquete -= 11
  }
  if(yRaqueteOponente < 0){
    yRaqueteOponente += 11
  }
  if(yRaqueteOponente + hRaquete > height){
    yRaqueteOponente -= 11
  }
}

