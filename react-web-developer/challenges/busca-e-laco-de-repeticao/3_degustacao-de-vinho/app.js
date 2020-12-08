let typeWine = gets()
let competitors = gets().split(" ")
let cont = 0

for(let i = 0; i < competitors.length; i++){
  if(typeWine == competitors[i]){cont++}
}

console.log(cont)