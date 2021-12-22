
let saida = document.getElementById("saida")

function data(){
    
let d = new Date()
let dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", ]
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez", ]

 saida.innerHTML =
                        `<p>Dia:${d.getDate()}</p>`
                        +
                        `<p>Mês:${meses[d.getMonth()]}</p>`
                        +
                        `<p>Ano:${d.getFullYear()}</p>`
                        +
                        `<p>Dia da semana:${dias[d.getDay()]}</p>`
                        +
                        `<p>Hora:${d.getHours()}</p>`
                        +
                        `<p>Minuto:${d.getMinutes()}</p>`
                        +
                        `<p>Segundo:${d.getSeconds()}</p>`
                        


}





// console.log(d)
// console.log(d.getDate())
// console.log(meses[d.getMonth()])
// console.log(d.getFullYear())
// console.log(dias[d.getDay()])
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())