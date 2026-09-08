// LÓGICA DEL EJERCICIO 1: FRACCIONARIOS
function Operation() {
    let numerador1 = document.getElementById("num1").value;
    let numerador2 = document.getElementById("num2").value;
    let denominador1 = document.getElementById("deno1").value;
    let denominador2 = document.getElementById("deno2").value;
    let operaciones = document.getElementById("operacion").value; 

    let numResultado;
    let denoResultado;
    
    if (numerador1 === "" || numerador2 === "" || denominador1 === "" || denominador2 === "") {
        alert("HACE FALTA NUMEROS PARA REALIZAR LA FRACCION"); 
        return;
    } 

    if (Number(denominador1) === 0 || Number(denominador2) === 0) {
        alert("Las fracciones no se pueden hacer con los denominadores siendo igual a 0"); 
        return;
    } 

    if (operaciones === "suma") {
        numResultado = (numerador1 * denominador2) + (numerador2 * denominador1); 
        denoResultado = (denominador1 * denominador2);
    }
    else if (operaciones === "resta") {
        numResultado = (numerador1 * denominador2) - (numerador2 * denominador1);
        denoResultado = (denominador1 * denominador2);
    }
    else if (operaciones === "multiplicacion") {
        numResultado = (numerador1 * numerador2);
        denoResultado = (denominador1 * denominador2);
    }
    else if (operaciones === "division") {
        numResultado = (numerador1 * denominador2);
        denoResultado = (numerador2 * denominador1);
    }

    document.getElementById("equal").innerHTML = ` 
    <nav>${numResultado}</nav>
    <div style="border-top: 2px solid white; margin: 3px 0;"></div>
    <nav>${denoResultado}</nav>`;
}

// LÓGICA DEL EJERCICIO 2: ECUACIONES
let solucion = 0;
const nR = () => Math.floor(Math.random() * 10) + 1;

window.onload = () => {
    const contenedorEcuacion = document.getElementById('operation'); 
    const textosRespuestas = document.querySelectorAll('.result1 h2'); 
    const botones = document.querySelectorAll('.result'); 

    if (!contenedorEcuacion) return;

    const GenerarEcuation = () => {
        let numberEcuation = Math.floor(Math.random() * 3);
        let ecuation = "";
        let a, b, c, d; 

        switch(numberEcuation){
            case 0:
                a = nR(); b = nR(); c = nR();
                ecuation = `${a}X + ${b} = ${c}`;
                solucion = (c - b) / a;
                break;

            case 1:
                a = nR(); b = nR(); c = nR(); d = nR();
                ecuation = `${a} + ${b}X = ${c} + ${d}X`;
                solucion = (c - a) / (b - d);
                break;

            case 2:
                a = nR(); b = nR(); c = nR(); d = nR();
                ecuation = `${a} - ${b}X + ${c} = ${d} - X`;
                solucion = (d - a - c) / (1 - b);
                break;
        }

        let respuesta = parseFloat(solucion.toFixed(1));
        contenedorEcuacion.innerHTML = ecuation; 

        let opcionFalsa1 = parseFloat((respuesta + (Math.random() * 3 + 1)).toFixed(1));
        let opcionFalsa2 = parseFloat((respuesta - (Math.random() * 3 + 1)).toFixed(1));

        let opciones = [respuesta, opcionFalsa1, opcionFalsa2];
        opciones.sort(() => Math.random() - 0.5);

        textosRespuestas.forEach((elementoTexto, index) => {
            elementoTexto.textContent = opciones[index];
        });
    };  

    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            let valorSeleccionado = parseFloat(textosRespuestas[index].textContent);
            if (valorSeleccionado === parseFloat(solucion.toFixed(1))) {
                alert('¡RESPUESTA CORRECTA!');
                GenerarEcuation(); 
            } else {
                alert('INTÉNTALO DE NUEVO');
            }
        });
    });

    GenerarEcuation();
};