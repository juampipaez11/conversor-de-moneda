

function convertir() {
  const pesos = parseFloat(prompt('Ingrese la cantidad de pesos argentinos:'));
  const tasaCambio = 0.0039;
  const dolares = pesos * tasaCambio;
  console.log(pesos + ' pesos argentinos son ' + dolares + ' dólares estadounidenses.');
}

window.onload = function() {
  convertir();
};



  