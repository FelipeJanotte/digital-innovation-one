let nota1 = parseFloat(gets());
let nota2 = parseFloat(gets());

while ( nota1 < 0 || nota1 > 10){
  nota1 = parseFloat(gets());
  console.log('nota invalida')
} 

while (nota2 < 0 || nota2 > 10){
  nota2 = parseFloat(gets())
  console.log('nota invalida')
}

console.log('media = ' + ((nota1 + nota2) / 2).toFixed(2) )
