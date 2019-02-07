function regresar() {
    console.log('hola');//prueba para saber si se ejecuta.
    location.replace('index.html');
}
document.getElementById("regresar").addEventListener('click',regresar);//Lineas 1-5 permite al boton regresar su funcionalidad.
//Formula para cifrar una palabra
let offset = 2;
let palabraCifrada = "JANETH ROMO";
// function cifrarstring(palabraCifrada) {
//     var palabraCifrada2 = '';
//     for (var i = 0; i < palabraCifrada.length; i++) {
//         if (palabraCifrada.charCodeAt(i) === 32) {
//             palabraCifrada2 += String.fromCharCode(32);
//         }
//         else {
//             // var numAscii = palabraCifrada.charCodeAt(i);
//             var letraCifrada = (palabraCifrada.charCodeAt(i) - 65 + offset) % 26 + 65;
//             palabraCifrada2 += String.fromCharCode(letraCifrada);
//         }
//     }
//     return palabraCifrada2;
// }
console.log(window.cipher.encode(offset,palabraCifrada));
// Formula para descifrar
palabraCifrada = "LCPGVJ TQOQ";
function descifrarstring(palabraCifrada) {
    let palabraCifrada2 = '';
    for (let i = 0; i < palabraCifrada.length; i++) {
        if (palabraCifrada.charCodeAt(i) === 32) {
            palabraCifrada2 += String.fromCharCode(32);
        }
        else {
            // var numAscii = palabraCifrada.charCodeAt(i);
            let letraCifrada = (palabraCifrada.charCodeAt(i) + 65 - offset) % 26 + 65;
            palabraCifrada2 += String.fromCharCode(letraCifrada);
        }
    }
    return palabraCifrada2;
}
console.log(descifrarstring(palabraCifrada));
//Funcionalidad en boton encode
function encode(){
let string = document.getElementById("textoAcifrar").value;
let offset = parseInt(document.getElementById("offset").value);
let resultado = window.cipher.encode(offset,string);

document.getElementById("result").value=resultado;
}
let cif= document.getElementById("encode");
cif.addEventListener("click",encode);
//Funcionalidad en boton decode
function decode(){
    let string = document.getElementById("textoAcifrar").value;
    let offset = parseInt(document.getElementById("offset").value);
    let resultado = window.cipher.decode(offset,string);
    document.getElementById("result").value=resultado;
    }
    cif = document.getElementById("decode");
    cif.addEventListener("click",decode);