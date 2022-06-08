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
