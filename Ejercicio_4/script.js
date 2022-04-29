function RepiteCadena() {
    let texto = document.getElementById("texto").value;
    let repite = parseInt(document.getElementById("numero").value);
    let nuevaCadena;
    nuevaCadena = texto + " ";
    for (let i = 0; i < repite - 1; i++) {
        
        nuevaCadena += texto + " ";
        console.log(nuevaCadena);
    }
    window.alert("Aqui tienes: " + nuevaCadena);
}