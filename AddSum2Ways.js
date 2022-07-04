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
