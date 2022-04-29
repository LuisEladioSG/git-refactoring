function RepitePalabras() {
    var texto = document.getElementById("texto").value;
    var veces = parseInt(document.getElementById("numero").value);
    var total ="";
    for (let i = 0; i < veces; i++) {
        
        total += texto;

    }
    console.log(total);
    window.alert("Aqui tienes: " + total);
}