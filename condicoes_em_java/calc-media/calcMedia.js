let nota1 = 5;
let nota2 = 5;

function media(nota1, nota2){
   
    return (nota1 + nota2) / 2
    
}



function passou(media){

    let Resultado = "Reprovado"
    
    if ( media >= 5){

        Resultado = "Aprovado"
        
    } 

    return Resultado
}

console.log(media(nota1, nota2))
var m = media(nota1, nota2)

console.log(passou(m))