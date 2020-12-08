let dados = gets().split(" ")
let kmH = parseInt(dados[1]) // km / H
let t = parseInt(dados[0]) // tempo em hrs
let dist = kmH * t //distancia em km
console.log((dist / 12).toFixed(3));