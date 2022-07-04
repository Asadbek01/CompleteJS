const Header = (text) => {
  console.log(`---------${text.toUpperCase()}----------`);
};
Header("1st Example");
let numbersa = [1];
let nd = [2, 3, 4];
numbersa = [...numbersa, ...nd];
console.log(numbersa);
Header("2nd Example");
const strings = ["A", numbersa, "B"];
numbersa.push(4);
console.log(strings);

// -----------------------------------------------------
Header("3rd example");
const ar1 = [1, 2, 3];
const ar3 = [...ar1];
const ar2 = ar1;
ar2.push(1);
console.log(ar2);
