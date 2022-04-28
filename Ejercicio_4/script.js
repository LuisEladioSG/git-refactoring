function MyFunction1() {
    var a = document.getElementById("texto").value;
    var b = parseInt(document.getElementById("numero").value);
    var total;
    total = a;
    for (let i = 0; i < b - 1; i++) {
        
        total += a;
        console.log(total);
    }
    window.alert("Aqui tienes: " + total);
}