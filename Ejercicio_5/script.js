
function MyFunction1() {
    let a = Math.random() * 10;
    window.alert(Math.trunc(a));    
}

function MyFunction2() {    
    window.alert("He acertado!");
    let a = Math.random() * 10;
    b = a - a - a;
    window.alert("Toma, un numero en negativo: " + Math.trunc(b));
}