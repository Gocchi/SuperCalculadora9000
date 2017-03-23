function validaDatos(e){
    var ascci= e.keyCode;
    //var teclado = String.fromCharCode(t); 
    if (ascci == 13){
        return false;
    } 
}
    



function suma (a, b){
      var totalSuma= Number(a) + Number(b);
}
function resta (a, b){
    var totalResta= Number(a) - Number(b);
}
function multiplicar (a, b){
    var totalMultiplicacion = Number(a) * Number(b);
}
function dividir (a, b){
    var totalDividir = Number(a) / Number(b);
}

function resultado(){
    var valorInput = document.getElementById("valor_numero");
    var  mostrar= valorInput.value;

    valorInput.value = eval(mostrar);
}; 


function borrarC(){
	document.getElementById("valor_numero").value = " ";
}
        