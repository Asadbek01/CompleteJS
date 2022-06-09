function Header(title) {
  console.log(`\n----->> ${title.toUpperCase()}----------`);
}
// Write function with one param and that should be multiplied by 2
Header("question Number 1");
const multipliedBy2 = (num) => {
  return num * 2;
};
console.log(multipliedBy2(10));

// Write a function called whatDayIsIt that should return the current day of the week.
Header("question Number 2");

const getDay = () => {
  let today = new Date();
  let dayList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let result = dayList[today.getDay()];
  console.log(result);
};
getDay();

//  All you need to do is just get Greetings depending on time
Header("Question number 3");
function Greetings() {
  const date = new Date();
  const now = date.getHours();
  if (now < 12) {
    console.log("Morning");
  } else if (now < 18) {
    console.log("Good Afternoon");
  } else {
    console.log("Good Evening");
  }
}
Greetings();

// create Function FizzBuzz  that should show a string seperetaly every 2 other output
Header("question number 4");
const FizBuzz = () => {
  let output = [];
  let count = 1;
  output.push(count);
  count++;
  console.log(output);
};
FizBuzz();

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
Header("question number 5");
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

console.log(simpleArraySum([5, 6, 50]));
// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
Header("question number 6");
function compareTriplates(a, b) {
  let aNumb = 0;
  let bNumb = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aNumb += 1;
    } else if (a[i] < b[i]) {
      bNumb += 1;
    }
  }
  const both = [aNumb, bNumb];
  return both;
}
console.log(compareTriplates([10, 15, 20], [15, 10, 30]));
