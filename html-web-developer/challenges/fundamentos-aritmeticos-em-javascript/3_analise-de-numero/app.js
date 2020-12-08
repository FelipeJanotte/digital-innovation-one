let pos = 0;
let neg = 0;
let par = 0;
let i = 0;
for ( let c = 0; c < 5; c++) {
  valor = gets();
  if(valor % 2 == 0){
    par++
    }else{
      i++
    }
    if(valor > 0){
      pos++
    }else if (valor < 0) {
      neg++ 
    }
}
console.log(par + ' valor(es) par(es)')
console.log(i + ' valor(es) impar(es)')
console.log(pos + ' valor(es) positivo(s)')
console.log(neg + ' valor(es) negativo(s)')