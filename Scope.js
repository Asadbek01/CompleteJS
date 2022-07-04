const Header = (text) => {
  console.log(`-------${text}--------`);
};
// Scope in JavaScript refers to the current context of code,
// which determines the accessibility of variables to JavaScript.
// The two types of scope are local and global:
// - Global variables are those declared outside of a block.
// Initialize a global variable
Header("1st Example with Global var");
var species = "human";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);
// - Local variables are those declared inside of a block
// --------------------------------------------------------------------------
Header("1st Example with newKeyword var");
// The new keywords let and const, however, are block-scoped.
// Lets implement this logic with new keywords
let newSpecies = "let Human";
function newTransform() {
  let newSpecies = "let WereWolf";
  console.log(newSpecies);
}
// Log the global and local variable
console.log(newSpecies);
newTransform();
console.log(newSpecies);
// - Local variables are those declared inside of a block
