function CuentaVocales() {
    let texto = document.getElementById("texto").value;    
    let cont = 0;         
    let vocales = "AaÄäÁáEeËëÉéIiÍíÏïOoÖöÓóUuÜüÚú";          
    for (let i = 0; i < texto.length; i++) 
    {        
        for(let j=0;j<vocales.length;j++)
        {
            if(vocales[j]==texto[i])
            {
                cont++;
            }
        }                                 
    }
    window.alert("Tiene " + cont + " vocales.");
}