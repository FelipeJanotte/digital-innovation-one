let sequelStudents = [];
let qntStudent = parseInt(gets());
let student = gets();

while (student !== ''){
  sequelStudents.push(student);
  student = gets();
};

let bestStudent = sequelStudents[0].split(" ");

for(let i = 0; i < qntStudent; i++){
  student = sequelStudents[i].split(" ")
  if(parseFloat(bestStudent[1]) < parseFloat(student[1])){
    bestStudent = student
  }
}

if(parseFloat(bestStudent[1]) >= 8){
  console.log(bestStudent[0])
}else{
  console.log('Minimum note not reached')
}