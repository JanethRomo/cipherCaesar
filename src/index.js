function myFunction() {
    console.log('hola');//prueba para saber si se ejecuta.
    location.replace('index2.html');
}

function home() {
    console.log('hola');//prueba para saber si se ejecuta.
    location.replace('index.html');
}

//Formula para cifrar una palabra
var string = ('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z');
var offset = 2;
var palabraCifrada = "JANETH ROMO";

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
/* var string = ('A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z');
var offset = 2; */
var palabraCifrada = "LCPGVJ TQOQ";

function descifrarstring(palabraCifrada) {
    var palabraCifrada2 = '';
    for (var i = 0; i < palabraCifrada.length; i++) {
        if (palabraCifrada.charCodeAt(i) === 32) {
            palabraCifrada2 += String.fromCharCode(32);
        }
        else {
            // var numAscii = palabraCifrada.charCodeAt(i);
            var letraCifrada = (palabraCifrada.charCodeAt(i) + 65 - offset) % 26 + 65;
            palabraCifrada2 += String.fromCharCode(letraCifrada);
        }
    }
    return palabraCifrada2;
}
console.log(descifrarstring(palabraCifrada));

//<script>
//function myFunction() {
//  location.replace("https://www.w3schools.com")
//}
//</script>