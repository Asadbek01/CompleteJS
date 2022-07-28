const Header = (par) => {
  return console.log(`---------${par.toUpperCase()}----------`);
};
// const addSum = (n) => {
//     const add = n.reduce((acc, cur) => {
//       return acc + cur;
//     });
//     return add;
//   };
//   console.log(addSum([5, 10]));

const AddSum2ways = (n) => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
};
console.log(AddSum2ways([50, 1]));
// The reason for this is we should pass value inside the array. 51 is output

const num = ["1", "2", "4", "3", "-7"];
console.log(num.sort());
// This will order the the numbers

function add(a, b) {
  a += 1;
  b.push(1);
}
const a = 0;
const b = [];
add(a, b);
console.log(5, b);
Header("4th example");
const f = (n) => (n <= 1 ? 1 : n * f(n - 1));
console.log(f(5));
//
// const promises = [1, 2, 3].map(
//   (d) =>
//     new Promise((res) => {
//       setTimeout(() => {
//         res(d);
//       }, d * 1000);
//     })
// );
// Promise.race(promises).then((val) => {
//   console.log(val);
// });

const fs = require("fs").promises;

async function file(filePath) {
  let fil;
  try {
    fil = await fs.open(filePath);
    let data = file.read();
  } finally {
    file.close();
  }
}



