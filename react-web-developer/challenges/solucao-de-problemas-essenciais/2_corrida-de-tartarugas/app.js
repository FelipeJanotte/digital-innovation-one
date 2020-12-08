let qntTart1 = parseInt(gets());
let grupo1 = gets().split(" ");
let qntTart2 = parseInt(gets());
let grupo2 = gets().split(" ");
let qntTart3 = parseInt(gets());
let grupo3 = gets().split(' ');

function calcularMaisVeloz(grupo, qntTart){
  let i = 0;
  let tart = 0;

  while(parseInt(i) < parseInt(qntTart)){
    
    if( parseInt(tart) < parseInt(grupo[i])){
      tart = parseInt(grupo[i])
    };
    i++;
    
  };
  
  if( tart < 10){
    console.log('1')
  };
  
  if( tart >= 10 && tart < 20){
    console.log('2')
  };
  
  if( tart >= 20){
    console.log('3')
  };

};

let tartMaisVeloz1 = calcularMaisVeloz(grupo1, qntTart1);
let tartMaisVeloz2 = calcularMaisVeloz(grupo2, qntTart2);
let tartMaisVeloz3 = calcularMaisVeloz(grupo3, qntTart3);