function Calculate(){
    let numerador1 = document.getElementById("num1").value;
    let numerador2 = document.getElementById("num2").value;
    let denominador1 = document.getElementById("deno1").value;
    let denominador2 = document.getElementById("deno2").value;
    let operaciones = document.getElementById("operation").value; 

 
    let numResultado;
    let denoResultado;
    
    if(numerador1==="" ||numerador2===""   ||denominador1===""  ||denominador2===""){
        alert("TE HACEN FALTA DATEITON PARA PODER REALIZAR LAS FRACCIONES"); 
    } 
    if(denominador1=== 0 ||denominador2=== 0){
        alert("Las fracciones no se pueden hacer con los denominadores siendo igual a 0"); 
    } 
    if(operaciones === "suma"){
        // lo que se va mostrar en el resultado del numerador

        numResultado =
        (numerador1 * denominador2) + (numerador2 * denominador1); 

        // lo que se va mostrar en el resultado del denominador 
        denResultado =
        (denominador1 * denominador2);
    }
    else if(operaciones === "resta"){
        // lo que se va mostrar en el resultado del numerador

        numResultado =
        (numerador1 * denominador2) - (numerador2 * denominador1);

        // lo que se va mostrar en el resultado del denominador 
        denResultado =
        (denominador1 * denominador2);
    }
    else if(operaciones === "multiplicación"){
        numResultado =
        (numerador1 * numerador2);
        denResultado =
        (denominador1 * denominador2);
    }
    else if(operaciones === "división"){
         numResultado =
        (numerador1 * denominador2);
        denResultado =
        (numerador2 * denominador1);
    }
    document.getElementById("equal").innerHTML = 
    ` 
    <nav> ${numResultado}</nav>
    ------
    <nav>  ${denResultado}</nav>`
}