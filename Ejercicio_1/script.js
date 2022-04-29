function suma2num() {
    let a;
    let b;
    a = parseInt(document.getElementById("number1").value);
    b = parseInt(document.getElementById("number2").value);
    document.getElementById("resultado").innerHTML = "El resultado es: " + (a+b);
}