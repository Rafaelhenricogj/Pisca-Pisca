var ledVermelho = document.querySelectorAll('.vermelho');
var ledAmarelo = document.querySelectorAll('.amarelo');
var ledAzul = document.querySelectorAll('.azul');
var ledVerde = document.querySelectorAll('.verde');
var valor = false;

function teste() {
  if (valor === true) {
    ledVermelho.forEach(function(div) {
      div.style.animation = 'vermelho 1s infinite alternate';
    });
    ledAmarelo.forEach(function(div) {
      div.style.animation = 'amarelo 1s infinite alternate';
    });
    ledAzul.forEach(function(div) {
      div.style.animation = 'azul 1s infinite alternate';
    });
    ledVerde.forEach(function(div) {
      div.style.animation = 'verde 1s infinite alternate';
    });
    valor = false;
  } else if (valor === false) {
    ledVermelho.forEach(function(div) {
      div.style.animation = 'vermelho .1s infinite alternate';
    });
    ledAmarelo.forEach(function(div) {
      div.style.animation = 'amarelo .1s infinite alternate';
    });
    ledAzul.forEach(function(div) {
      div.style.animation = 'azul .1s infinite alternate';
    });
    ledVerde.forEach(function(div) {
      div.style.animation = 'verde .1s infinite alternate';
    });
    valor = 0;
  } else {
    location.reload();
  }
}

