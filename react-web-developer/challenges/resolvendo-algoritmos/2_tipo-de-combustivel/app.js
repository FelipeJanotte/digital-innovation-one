// 1 - alcool
// 2 - gasolina
// 3 - diesel
// 4 - fim

let pedido = gets()
let alcool = 0
let gasolina = 0
let diesel = 0

while(true){
  if(pedido == 1){
    alcool++
  }
  if(pedido == 2){
    gasolina++
  }
  if(pedido == 3){
    diesel++
  }
  if(pedido == 4){
    break
  }
  pedido = gets()
}

console.log('MUITO OBRIGADO')
console.log('Alcool: ' + alcool)
console.log('Gasolina: ' + gasolina)
console.log('Diesel: ' + diesel)