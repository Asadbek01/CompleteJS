const Header = (text) => {
  console.log(`-----------${text.toUpperCase()}----------`);
};
Header("Question number 1");

const fib = (n, memo = {}) => {
  // memo helps us to solve bigger number easily
  if (n in memo) return memo[n]; // we are finding if there is a similiar tree we dont have calculate it again
  if (n <= 2) return 1;
  memo[n] = fib(n - 1) + fib(n - 2); // we are saving
  return memo[n];
};
console.log(fib(7));




