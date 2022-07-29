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

const MyName = (name) => {
  const surname = "Azamjonov" + name;
  function displayNameAndSurname() {
    console.log(surname);
  }
  displayNameAndSurname;
};
console.log(MyName("Asadbek"));

