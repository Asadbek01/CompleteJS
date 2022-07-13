// const addSum = (n) => {
//     const add = n.reduce((acc, cur) => {
//       return acc + cur;
//     });
//     return add;
//   };
//   console.log(addSum([5, 10]));

const addSu = (n) => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  return sum;
};
console.log(addSu([50, 50]));

// function build(sent){
//   let base = {}
//   sent.split(' ').forEach
// }
const num = ["1", "2", "4", "3", "-7"];

console.log(num.sort());

function add(a, b) {
  a += 1;
  b.push(1);
}
const a = 0;
const b = [];
add(a, b);
console.log(5, b);

const f = (n) => (n <= 1 ? 1 : n * f(n - 1));
console.log(f(5));
//
const promises = [1, 2, 3].map(
  (d) =>
    new Promise((res) => {
      setTimeout(() => {
        res(d);
      }, d * 1000);
    })
);
Promise.race(promises).then((val) => {
  console.log(val);
});

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
