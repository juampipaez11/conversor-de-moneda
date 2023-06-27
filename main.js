function convertir() {
  var pesos = parseFloat(document.getElementById('pesos').value);
  var tasaCambio = 0.0039;
  var dolares = pesos * tasaCambio;
  console.log(pesos + ' pesos argentinos son ' + dolares + ' dólares estadounidenses.');
}


  