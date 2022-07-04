//  This is the closure how it works
const init = () => {
  const name = "Asadbek";
  function tryClosure() {
    console.log(name);
  }
  tryClosure();
};
init();

// Lets create another example
const Closure = (n) => {
  const name = 50 + n;
  function logElements() {
    console.log(name);
  }
  logElements();
};
Closure(50);
