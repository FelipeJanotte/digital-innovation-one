let datas = gets().split(" ", 2);

let a = datas[0];
let b = datas[1];

let r = a % b;
let q = a / b

if (r < 0) {
  r = r + Math.abs(b);
  q = (a - r) / b;
}

console.log(q.toFixed(0) + " " + r.toFixed(0));