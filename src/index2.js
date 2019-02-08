function regresar() {
location.replace('index.html');
}
document.getElementById("regresar").addEventListener('click',regresar);//Lineas 1-5 permite al boton regresar su funcionalidad.

//Funcionalidad en boton eNcode
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