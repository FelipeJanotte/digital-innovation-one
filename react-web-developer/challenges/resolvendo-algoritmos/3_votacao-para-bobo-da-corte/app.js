let n = parseInt(gets()) // Candidatos
let voto = gets()
let votos = []

while(votos.length < n){
  votos.push(parseInt(voto))
  voto = gets()
}

let max = Math.max(...votos)
if(max == votos[0]){
  console.log("S")
}else{
  console.log("N")
}