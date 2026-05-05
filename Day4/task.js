//TASK-1
// const mark = 0;
// if (mark>=90){
//     console.log("Grade A");
// }
// else if(mark>75 && mark <= 89){
//     console.log("Grade B");
// }
// else if(mark>60 && mark <= 74){
//     console.log("Grade B");
// }
// else if(mark<60){
//     console.log("Grade F");
// }

//TASK-2
const day = "Wednesday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Invalid day");
}