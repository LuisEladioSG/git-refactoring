const a = Math.random() * 15;

console.log(Math.trunc(a));

function ComprobadorDeNumero() {
var numero = Math.trunc(a);    
var b = parseInt(document.getElementById("numero").value);
console.log(b);
console.log(Math.trunc(numero))
if (b == Math.trunc(numero)){
    window.alert("Has acertado")
}
}
