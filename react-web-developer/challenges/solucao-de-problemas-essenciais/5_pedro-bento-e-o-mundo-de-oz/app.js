let joias = [];
let joia = gets();

while (joia !== ''){
  joias.push(joia);
  joia = gets();
};
console.log(joias)

let qntDif = joias.filter(function(elem, pos, self) {
    return self.indexOf(elem) == pos;
})

console.log(qntDif.length);