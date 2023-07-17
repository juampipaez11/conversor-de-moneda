function capturarEntradas() {
  let pesos;
  do {
    const inputPesos = prompt('Ingrese la cantidad de pesos argentinos:');
    pesos = parseFloat(inputPesos);
  } while (isNaN(pesos) || !Number.isFinite(pesos));

  const opcionesMoneda = ['Dólar', 'Euro', 'Libra'];
  let monedaDestino;
  do {
    const seleccion = prompt('Seleccione la moneda a la que desea convertir:\n1. Dólar\n2. Euro\n3. Libra');
    switch (seleccion) {
      case '1':
        monedaDestino = opcionesMoneda[0];
        break;
      case '2':
        monedaDestino = opcionesMoneda[1];
        break;
      case '3':
        monedaDestino = opcionesMoneda[2];
        break;
      default:
        monedaDestino = '';
        break;
    }
  } while (monedaDestino === '');

  return { pesos, monedaDestino };
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

function mostrarResultado(resultado, monedaDestino) {
  alert('El resultado de la conversión es: ' + resultado + ' ' + monedaDestino);
}

function operarResultado(resultado, monedaDestino) {
  const opcionesOperacion = ['Sumar', 'Restar', 'Multiplicar', 'Dividir'];
  let operacion;
  do {
    const seleccion = prompt('Seleccione la operación a realizar:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir');
    switch (seleccion) {
      case '1':
        operacion = opcionesOperacion[0];
        break;
      case '2':
        operacion = opcionesOperacion[1];
        break;
      case '3':
        operacion = opcionesOperacion[2];
        break;
      case '4':
        operacion = opcionesOperacion[3];
        break;
      default:
        operacion = '';
        break;
    }
  } while (operacion === '');

  if (!operacion) {
    return resultado;
  }

  let nuevoResultado;
  if (operacion === 'Sumar') {
    const opcionSuma = prompt('Seleccione la opción a sumar:\n1. Pesos Argentinos\n2. ' + monedaDestino);
    if (opcionSuma === '1') {
      const sumaPesos = parseFloat(prompt('Ingrese la cantidad de pesos argentinos a sumar:'));
      const sumaPesosConvertidos = realizarOperacion(sumaPesos, monedaDestino);
      nuevoResultado = resultado + sumaPesosConvertidos;
    } else if (opcionSuma === '2') {
      const sumaMoneda = parseFloat(prompt('Ingrese la cantidad de ' + monedaDestino + ' a sumar:'));
      nuevoResultado = resultado + sumaMoneda;
    }
  } else if (operacion === 'Restar') {
    const opcionResta = prompt('Seleccione la opción a restar:\n1. Pesos Argentinos\n2. ' + monedaDestino);
    if (opcionResta === '1') {
      const restaPesos = parseFloat(prompt('Ingrese la cantidad de pesos argentinos a restar:'));
      const restaPesosConvertidos = realizarOperacion(restaPesos, monedaDestino);
      nuevoResultado = resultado - restaPesosConvertidos;
    } else if (opcionResta === '2') {
      const restaMoneda = parseFloat(prompt('Ingrese la cantidad de ' + monedaDestino + ' a restar:'));
      nuevoResultado = resultado - restaMoneda;
    }
  } else if (operacion === 'Multiplicar') {
    const multiplicacion = parseFloat(prompt('Ingrese el factor de multiplicación:'));
    nuevoResultado = resultado * multiplicacion;
  } else if (operacion === 'Dividir') {
    const division = parseFloat(prompt('Ingrese el divisor:'));
    nuevoResultado = resultado / division;
  }

  return nuevoResultado;
}

function convertir() {
  const { pesos, monedaDestino } = capturarEntradas();
  const resultado = realizarOperacion(pesos, monedaDestino);
  mostrarResultado(resultado, monedaDestino);

  const nuevoResultado = operarResultado(resultado, monedaDestino);
  mostrarResultado(nuevoResultado, monedaDestino);
}

window.addEventListener('load', function() {
  const btnConvertir = document.getElementById('btnConvertir');
  btnConvertir.addEventListener('click', convertir);
});

















  