function MyFunction1() {
    let array = document.getElementById("texto").value;    
    let vocales = 0;                   
    for (let i = 0; i < 10000; i++) 
    {        
        console.log("Hola")
        if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u')
        {

            vocales++;
        }        
    }
    window.alert("Tiene " + vocales + " vocales.");
}