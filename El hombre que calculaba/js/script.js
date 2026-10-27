
/* PROBLEMA 1: ECUACION CUADRATICA */

const formularioEcuacion =
    document.getElementById("formularioEcuacion");

const resultadoEcuacion =
    document.getElementById("resultadoEcuacion");

formularioEcuacion.addEventListener("submit", function(event) {
    event.preventDefault();

    let a = Number(document.getElementById("valorA").value);
    let b = Number(document.getElementById("valorB").value);
    let c = Number(document.getElementById("valorC").value);

    if (!Number.isFinite(a) || !Number.isFinite(b) ||
        !Number.isFinite(c)) {

        resultadoEcuacion.textContent = "Ingresa valores validos.";

    } else if (a === 0 && b === 0) {

        if (c === 0) {
            resultadoEcuacion.textContent =
                "La ecuacion tiene infinitas soluciones.";
        } else {
            resultadoEcuacion.textContent =
                "La ecuacion no tiene soluciones.";
        }

    } else if (a === 0) {

        let x = -c / b;

        resultadoEcuacion.textContent =
            "Es una ecuacion lineal.\n" +
            "La solucion es x = " + x.toFixed(6);

    } else {

        let discriminante = b * b - 4 * a * c;

        if (discriminante > 0) {

            let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

            resultadoEcuacion.textContent =
                "La ecuacion tiene dos raices reales.\n" +
                "Discriminante: " + discriminante + "\n" +
                "Primera raiz: x1 = " + x1.toFixed(6) + "\n" +
                "Segunda raiz: x2 = " + x2.toFixed(6);

        } else if (discriminante === 0) {

            let x = -b / (2 * a);

            resultadoEcuacion.textContent =
                "La ecuacion tiene una raiz real doble.\n" +
                "Discriminante: " + discriminante + "\n" +
                "Raiz: x = " + x.toFixed(6);

        } else {

            resultadoEcuacion.textContent =
                "La ecuacion no tiene raices reales.\n" +
                "Discriminante: " + discriminante;
        }
    }
});

formularioEcuacion.addEventListener("reset", function() {
    resultadoEcuacion.textContent = "Resultado:";
});


/* PROBLEMA 2: ESTIMACION DE PI */

const formularioPi = document.getElementById("formularioPi");
const resultadoPi = document.getElementById("resultadoPi");

formularioPi.addEventListener("submit", function(event) {
    event.preventDefault();

    let suma = 0;
    let pi100 = 0;
    let pi10000 = 0;
    let pi1000000 = 0;

    for (let n = 1; n <= 1000000; n++) {

        suma = suma + 1 / (n * n);

        if (n === 100) {
            pi100 = Math.sqrt(6 * suma);
        }

        if (n === 10000) {
            pi10000 = Math.sqrt(6 * suma);
        }

        if (n === 1000000) {
            pi1000000 = Math.sqrt(6 * suma);
        }
    }

    let piReal = Math.PI;

    resultadoPi.textContent =
        "RESULTADOS DE LA ESTIMACION DE PI\n\n" +

        "Con 100 terminos: " + pi100.toFixed(12) + "\n" +
        "Diferencia con pi: " +
        Math.abs(piReal - pi100).toExponential(6) + "\n\n" +

        "Con 10000 terminos: " + pi10000.toFixed(12) + "\n" +
        "Diferencia con pi: " +
        Math.abs(piReal - pi10000).toExponential(6) + "\n\n" +

        "Con 1000000 terminos: " +
        pi1000000.toFixed(12) + "\n" +
        "Diferencia con pi: " +
        Math.abs(piReal - pi1000000).toExponential(6) + "\n\n" +

        "Valor de referencia (Math.PI): " +
        piReal.toFixed(12);
});

formularioPi.addEventListener("reset", function() {
    resultadoPi.textContent = "Resultado:";
});


/* PROBLEMA 3: REPARTO DE LOS PANES */

const formularioPanes =
    document.getElementById("formularioPanes");

const resultadoPanes =
    document.getElementById("resultadoPanes");

formularioPanes.addEventListener("submit", function(event) {
    event.preventDefault();

    let pan1 = Number(document.getElementById("pan1").value);
    let pan2 = Number(document.getElementById("pan2").value);
    let monedas = Number(document.getElementById("monedas").value);

    if (!Number.isFinite(pan1) || !Number.isFinite(pan2) ||
        !Number.isFinite(monedas) || pan1 < 0 ||
        pan2 < 0 || monedas < 0) {

        resultadoPanes.textContent = "Introduce cantidades validas.";

    } else {

        let totalPanes = pan1 + pan2;

        if (totalPanes <= 0) {

            resultadoPanes.textContent =
                "Debe existir al menos un pan.";

        } else {

            let consumo = totalPanes / 3;
            let aporte1 = Math.max(0, pan1 - consumo);
            let aporte2 = Math.max(0, pan2 - consumo);
            let totalAporte = aporte1 + aporte2;

            if (totalAporte <= 0) {

                resultadoPanes.textContent =
                    "No hay pan aportado al tercer viajero.";

            } else {

                let dinero1 = monedas * aporte1 / totalAporte;
                let dinero2 = monedas * aporte2 / totalAporte;

                resultadoPanes.textContent =
                    "Cada viajero consume: " +
                    consumo.toFixed(0) + " panes.\n" +

                    "Aporte del primer viajero: " +
                    aporte1.toFixed(0) + " panes.\n" +

                    "Aporte del segundo viajero: " +
                    aporte2.toFixed(0) + " panes.\n" +

                    "Dinero para el primer viajero: " +
                    dinero1.toFixed(0) + " monedas.\n" +

                    "Dinero para el segundo viajero: " +
                    dinero2.toFixed(0) + " monedas.";
            }
        }
    }
});

formularioPanes.addEventListener("reset", function() {
    resultadoPanes.textContent = "Resultado:";
});


/* PROBLEMA 4: GANANCIA DEL COMERCIANTE */

const formularioGanancia =
    document.getElementById("formularioGanancia");

const resultadoGanancia =
    document.getElementById("resultadoGanancia");

formularioGanancia.addEventListener("submit", function(event) {
    event.preventDefault();

    let costo = Number(document.getElementById("costo").value);
    let cantidad = Number(document.getElementById("cantidad").value);

    let precioVenta =
        Number(document.getElementById("precioVenta").value);

    if (!Number.isFinite(costo) ||
        !Number.isFinite(cantidad) ||
        !Number.isFinite(precioVenta) ||
        costo < 0 || cantidad <= 0 || precioVenta < 0 ||
        !Number.isInteger(cantidad)) {

        resultadoGanancia.textContent = "Introduce datos validos.";

    } else {

        let costoTotal = costo * cantidad;
        let ingresoTotal = precioVenta * cantidad;
        let ganancia = ingresoTotal - costoTotal;
        let porcentaje = 0;

        if (costoTotal > 0) {
            porcentaje = (ganancia / costoTotal) * 100;
        }

        resultadoGanancia.textContent =
            "Costo total: " + costoTotal.toFixed(0) + "\n" +
            "Ingresos por ventas: " + ingresoTotal.toFixed(0) + "\n" +
            "Ganancia o perdida: " + ganancia.toFixed(0) + "\n" +
            "Porcentaje de ganancia: " +
            porcentaje.toFixed(0) + "%";
    }
});

formularioGanancia.addEventListener("reset", function() {
    resultadoGanancia.textContent = "Resultado:";
});
