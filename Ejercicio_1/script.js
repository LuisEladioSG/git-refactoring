function Suma2num() {
    let a;
    let b;
    let c;
    let resultado;
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    c = a + b;
    resultado = "El resultado es: " + c;
    document.getElementById("resultado").innerHTML = resultado;
}