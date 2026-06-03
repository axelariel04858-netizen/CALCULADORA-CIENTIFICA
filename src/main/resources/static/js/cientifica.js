console.log("Hola Mundo");

// FUNCION QUE AGREGA DIGITOS AL DISPLAY
function setDigito(digito){
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = digito;
    } else {
        display.value = display.value + digito;
    }
}

function setOperador(operador){
    let display=document.getElementById('display');
    let actual=display.value;
    let ultimo=actual.slice(-1);
    const basicos=['+','-','*','/','.','x'];

    if (operador === 'Log') {
        display.value = Math.log(eval(actual));
    }
    else if (operador === '^') {
        let base = eval(actual);
        let exponente = prompt("Ingrese el exponente:");
        if (exponente !== null) {
            display.value = Math.pow(base, exponente);
        }
    }else if (operador === 'raiz') {
        display.value = Math.sqrt(eval(actual));
    }
    else if (operador === '-'){
        if(ultimo !== '-'){
            display.value+=operador;
        }

    }else if (operador === '+'){
        if (actual !== "" && !basicos.includes(ultimo)){
            display.value+=operador;
        }

    }else if (operador === '*'){
        if (actual !== "" && !basicos.includes(ultimo)){
            display.value+=operador;
        }

    }else if (operador === '.'){
        if(ultimo !== '.'){
            display.value+=operador;
        }

    }
    else if (operador === '/'){
        if (actual !== "" && !basicos.includes(ultimo)){
            display.value+=operador;
        }
    }
}

function borrar(){
    let display = document.getElementById('display');
    display.value = '0';
}

function obtenerResultado(){
    let display=document.getElementById('display');
       display.value=eval(display.value);

}
}