window.cipher = {
     // Funcion para cifrar
  encode:function (offset, string){    
    var palabraCifrada2 = '';
    for (var i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) === 32) {
            palabraCifrada2 += String.fromCharCode(32);
        }
        else {
            // var numAscii = palabraCifrada.charCodeAt(i);
            var letraCifrada = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
            palabraCifrada2 += String.fromCharCode(letraCifrada);
        }
    }
   return palabraCifrada2;
  },
   // Funcion para descifrar
  decode:function (offset, string){    
   var palabraCifrada2 = '';
   for (var i = 0; i < string.length; i++) {
       if (string.charCodeAt(i) === 32) {
           palabraCifrada2 += String.fromCharCode(32);
       }
       else {
           // var numAscii = palabraCifrada.charCodeAt(i);
           var letraCifrada = (string.charCodeAt(i) +65 - offset) % 26 + 65;
           palabraCifrada2 += String.fromCharCode(letraCifrada);
       }
   }
  return palabraCifrada2;
  }
};



