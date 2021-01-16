let primerNumero =0;
let segundoNumero=0;
let operador; //+-/.....

function asignarValores(numero) {
    if(primerNumero==0 && primerNumero !=='0.'){
        primerNumero = numero
    } else {
        primerNumero+=numero
    }
mostrarEnPantalla()
}

function darComa() {    
    if(primerNumero==0){
        primerNumero = '0.'
    } else if (primerNumero.indexOf('.') == -1){ 
         //recorre la cadena de numeros (string) y a no encontrarla retorna -1
        primerNumero += '.' //entonces se lo asignamos
    }
    mostrarEnPantalla()
}

function reiniciarValores() {
     primerNumero =0;
     segundoNumero=0;
     mostrarEnPantalla()
}

function eliminarUltimoElemento() {
    if(primerNumero !==0 ){
       primerNumero= primerNumero.slice(0,-1)
    }
    primerNumero
   mostrarEnPantalla()
}

//valor puede ser 1,2,3,4,5
function asignarOperador(valor) {
    if (primerNumero==0){ 
        //Convierte (parsea) un argumento de tipo cadena y devuelve un número de punto flotante.
        primerNumero=parseFloat(document.getElementById('entrada_numeros').value) 
        //se parsea los valores(value)
    } 
    segundoNumero=parseFloat(primerNumero) //le pasamos el primer valor al segundo valor parseado
    primerNumero=0 //volvemos a igualar a 0 el primer valor
    operador=valor //le pasamos el parametro a la variable operador
}

function mostrarResultado() {
    primerNumero=parseFloat(primerNumero) // le asiganamos supropio valor parseado
    switch (operador) {
        case 1:                             //1valor /segundo valor introducido
            primerNumero=segundoNumero / primerNumero
            break;
        case 2:
            primerNumero*=segundoNumero
            break;
        case 3:
            primerNumero-=segundoNumero
            break;
        case 4:
            primerNumero+=segundoNumero
            break;
        case 5:
            primerNumero = Math.pow(segundoNumero, primerNumero)
            break;
    }
    mostrarEnPantalla() //mostramos resultado
    segundoNumero=parseFloat(primerNumero) // le asignamos el resultado
    primerNumero=0 //reiniciamos para una nueva operacion
}
function mostrarEnPantalla() {
    document.getElementById('entrada_numeros').value = primerNumero
}