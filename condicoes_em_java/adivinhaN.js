let n = numero()
let p = palpite()
let r = resposta()


function numero(){
    return Math.round(Math.random() * 100)
}

function palpite(){
    return 100
}

function resposta(){
    
    if (p > n){
        return `Você falou ${p}. Meu número é menor.`
    } 
    else if (p == n) {
        return `Você falou ${p}. Parabéns você acertou.`
    }
    if (p < n) {
        return `Você falou ${p}. Meu número é maior.`
    }
}
console.log(r)