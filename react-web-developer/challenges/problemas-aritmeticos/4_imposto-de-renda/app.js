let salary = gets()
let i = 0
let saldo = 0

if( salary > 0 && salary <= 2000 ){
  console.log("Isento");
}else{
  
  if ( salary > 4500){
    i += (1000 * 0.08)
    i += (1500 * 0.18)
    i += ((salary - 4500) * 0.28)
    console.log('R$ ' + (i).toFixed(2))
  }

  if ( salary > 3000 && salary <= 4500){
    i += (1000 * 0.08)
    i += ((salary - 3000) * 0.18)
    console.log('R$ ' + (i).toFixed(2))
  }

  if ( salary > 2000 && salary <= 3000){
    i += ((salary - 2000) * 0.08)
    console.log('R$ ' + (i).toFixed(2))
  }
}