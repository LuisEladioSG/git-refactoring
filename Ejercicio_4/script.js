function MultiplicaTexto() {
    const texto = document.getElementById("texto").value
    const numero = parseInt(document.getElementById("numero").value);
    var total
    for (let i = 0; i < numero - 1; i++) {
        total += texto;
    }
    console.log(total);
    window.alert("Aqui tienes: " + total);
}