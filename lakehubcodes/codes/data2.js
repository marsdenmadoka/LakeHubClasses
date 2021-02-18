// students score
// A**90-100
// B**80-89
// C**70-79
// D**60-69
// F**0-59
 
function gradeCalculator(score, totalScore) {
  let percent = (score / totalScore) * 100;
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return `You got a ${letterGrade} (${percent}%)`;
}

let result = gradeCalculator(9, 20);
console.log(result);
 
let result1 = gradeCalculator(10, 40);
console.log(result1);

let result2 = gradeCalculator(50, 40);
console.log(result2);