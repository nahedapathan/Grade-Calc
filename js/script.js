//student score = 60
//total score = 100

// A 90-100  ->Excellent
// B 80-89 -> Very Good
// C 70-79 -> Good
// D 60-69 -> Fair
// E 50-59 -> Pass
// F  0-49 Fail

//fn calc student

const studentGradeCalc = (studentScore, totalScore, studentName) => {
  const percentage = (studentScore / totalScore) * 100;
  let grade = "";
  let remarks = "";

  if (percentage >= 90) {
    grade = "A";
    remarks = "Excellent";
  } else if (percentage >= 80) {
    grade = "B";
    remarks = "Very Good";
  } else if (percentage >= 70) {
    grade = "C";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "D";
    remarks = "Fair";
  } else if (percentage >= 50) {
    grade = "E";
    remarks = "Pass";
  } else if (percentage >= 40) {
    grade = "F";
    remarks = "Fail";
  }
  return `${studentName} you got  ${grade} ( ${percentage}%)  with a ${remarks} grade`;
};

//DOM manipulation
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //avoid page refreshing when the btn is clicked
  e.preventDefault();
  const studentName = document.getElementById("studentName").value;
  const studentScore = document.getElementById("studentScore").value;
  // check if user enters student name or score
  if (!studentName || !studentScore) {
    alert("Please provide all details about the student");
  }
  const results = studentGradeCalc(studentScore, 100, studentName);
  //Display the results
  const resultDisplay = document.querySelector(".result");
  if (!studentName || !studentScore) {
    resultDisplay.innerHTML = "";
  } else {
    resultDisplay.innerHTML = results;
  }
});
