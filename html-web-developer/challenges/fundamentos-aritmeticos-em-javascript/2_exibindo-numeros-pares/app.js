let ii = parseInt(gets())
let i = 0


if(ii % 2 == 0){
  do{
    i = i + 2;
    console.log(i);
  }
  while(i < ii)
}
if(ii % 2 == 1){
  do{
    i = i + 2
    console.log(i)
  }
  while(i < ii - 1)
}