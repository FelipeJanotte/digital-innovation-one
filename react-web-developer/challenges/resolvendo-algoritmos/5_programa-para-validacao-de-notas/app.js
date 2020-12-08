let notas = []
let res = 3

while (true){
  res = 3
  while (notas.length != 2){
    let nota = parseFloat(gets())
    if(nota < 0 || nota > 10){
      console.log('nota invalida')
    }else notas.push(nota)
    
  }

  let media = (notas[1] + notas[0])/2
  console.log('media = ' + media.toFixed(2))

  while(res != 1 && res != 2){
    console.log('novo calculo (1-sim 2-nao)')
    res = gets()
  }
  if(res == 2){
    break
  }else notas = []
}