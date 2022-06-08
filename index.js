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
