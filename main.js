let resultadoActual = 0;

function obtenerPesos() {
  const inputPesos = document.getElementById('inputPesos').value;
  const pesos = parseFloat(inputPesos);

  if (isNaN(pesos) || !Number.isFinite(pesos)) {
    mostrarMensaje('Debe ingresar una cantidad de pesos válida.', 'error');
    return null;
  }

  return pesos;
}

function obtenerMonedaDestino() {
  const selectMoneda = document.getElementById('selectMoneda');
  const monedaDestino = selectMoneda.value;

  if (monedaDestino === '') {
    mostrarMensaje('Debe seleccionar una moneda de destino.', 'error');
    return null;
  }

  return monedaDestino;
}

function mostrarMensaje(mensaje, tipo) {
  const resultadoHTML = document.getElementById('resultado');
  resultadoHTML.textContent = mensaje;

  if (tipo === 'error') {
    resultadoHTML.style.color = 'red';
  } else {
    resultadoHTML.style.color = 'black';
  }
}

function mostrarResultadoEnHTML(resultado, monedaDestino) {
  const resultadoHTML = document.getElementById('resultado');
  resultadoHTML.textContent = 'El resultado de la conversión es: ' + resultado + ' ' + monedaDestino;
  resultadoHTML.style.color = 'black';
  resultadoActual = resultado;
}

function agregarAlHistorial(accion, cantidad, monedaOrigen, monedaDestino, resultado) {
  const historialHTML = document.getElementById('historial');
  const nuevoHistorial = document.createElement('div');
  nuevoHistorial.textContent = accion + ' ' + cantidad + ' ' + monedaOrigen + ' a ' + monedaDestino + ': ' + resultado;
  historialHTML.appendChild(nuevoHistorial);
}

function obtenerTasaDeCambio(monedaDestino) {
  const tasasDeCambio = [
    { moneda: 'Dólar', tasa: 0.0039 },
    { moneda: 'Euro', tasa: 0.0033 },
    { moneda: 'Libra', tasa: 0.0029 }
  ];

  for (let i = 0; i < tasasDeCambio.length; i++) {
    if (tasasDeCambio[i].moneda === monedaDestino) {
      return tasasDeCambio[i].tasa;
    }
  }

  return null;
}

function realizarOperacion(pesos, monedaDestino) {
  const tasaCambio = obtenerTasaDeCambio(monedaDestino);
  const resultado = pesos * tasaCambio;

  return resultado;
}

function convertir() {
  const pesos = obtenerPesos();
  const monedaDestino = obtenerMonedaDestino();

  if (pesos !== null && monedaDestino !== null) {
    const resultado = realizarOperacion(pesos, monedaDestino);
    mostrarResultadoEnHTML(resultado, monedaDestino);
    agregarAlHistorial('Conversión', pesos, 'Pesos Argentinos', monedaDestino, resultado);
  }
}

function sumarPesos(pesos) {
  resultadoActual += pesos;
  return resultadoActual;
}

function restarPesos(pesos) {
  resultadoActual -= pesos;
  return resultadoActual;
}

document.getElementById('btnConvertir').addEventListener('click', convertir);

document.getElementById('btnSumar').addEventListener('click', function() {
  const pesos = parseFloat(document.getElementById('inputSumarRestar').value);
  if (isNaN(pesos)) {
    mostrarMensaje('Debe ingresar una cantidad de pesos válida.', 'error');
    return;
  }
  
  const nuevoResultado = sumarPesos(pesos);
  mostrarResultadoEnHTML(nuevoResultado, 'Pesos Argentinos');
  agregarAlHistorial('Suma', pesos, 'Pesos Argentinos', 'Pesos Argentinos', nuevoResultado);
});

document.getElementById('btnRestar').addEventListener('click', function() {
  const pesos = parseFloat(document.getElementById('inputSumarRestar').value);
  if (isNaN(pesos)) {
    mostrarMensaje('Debe ingresar una cantidad de pesos válida.', 'error');
    return;
  }

  const nuevoResultado = restarPesos(pesos);
  mostrarResultadoEnHTML(nuevoResultado, 'Pesos Argentinos');
  agregarAlHistorial('Resta', pesos, 'Pesos Argentinos', 'Pesos Argentinos', nuevoResultado);
});


























































  