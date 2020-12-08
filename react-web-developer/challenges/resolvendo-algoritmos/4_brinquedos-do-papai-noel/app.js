let n = parseInt(gets()) // Quantidade de crinaça
let crianca = gets() 
let criancas = []
let ultLetra = ''
let boneca = 0
let carro = 0

while(n > criancas.length){
  criancas.push(crianca)
  crianca = gets()
}

for(let i = 0; i < criancas.length; i++){
  ultLetra = criancas[i].charAt(criancas[i].length-1)
  if(ultLetra == 'M'){
    carro++
  }
  if(ultLetra == 'F'){
    boneca++
  }
}

console.log(carro + ' carrinhos')
console.log(boneca + ' bonecas')