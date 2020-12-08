// Espaços    -> 1 - n
// Numerada   -> 1 - n

let n = gets() //Total de figurinha
let m = gets() // Total já compradas
let x = gets() // Cada figurinha
let figurinhas = []

for(let i = 0; i < m; i++){
  figurinhas.push(x)
  x = gets()
}

let qntDif = figurinhas.filter(function(elem, pos, self) {
    return self.indexOf(elem) == pos;
})

console.log(n - qntDif.length)