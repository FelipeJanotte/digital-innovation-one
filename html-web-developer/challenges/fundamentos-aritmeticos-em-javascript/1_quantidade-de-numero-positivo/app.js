let valores = [gets(),gets(),gets(),gets(),gets(),gets()]

let cont = 0
for(let i = 0; i < valores.length; i++){
  if(valores[i] > 0){
    cont++
  }
}

console.log(cont +' valores positivos')