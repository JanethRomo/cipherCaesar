function myFunction() {
    console.log('hola');//prueba para saber si se ejecuta.
location.replace('index2.html');
}


function myFunction1() {
console.log('hello');
location.replace('file:///home/laboratoria/Escritorio/janeth/proyecto1/sws3.html');
}

var string = ('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z');
var offset = 2;
var palabraCifrada = 'JANETH';
function cifrarstring (palabraCifrada){
    var palabraCifradaw2;
    for(var i=0; i<palabraCifrada.length; i++){
        var numAscii = palabraCifrada.charCodeAt(i);
        var letraCifrada = (numAscii - 65 + offset) % 26 + 65;
        palabraCifradaw2 += String.fromCharCode(letraCifrada);
    }
    return palabraCifradaw2;
}
console.log(cifrarstring('JANETH'))
//<script>
//function myFunction() {
//  location.replace("https://www.w3schools.com")
//}
//</script>