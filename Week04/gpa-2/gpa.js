// we really don't need the setGrades function anymore...so I replaced it with our transcript array
const transcript = [
  {
    semester: "Spring",
    year: "2020",
    semesterCode: "S20",
    grades: ["A", "A-", "B", "A"]
  },
  {
    semester: "Fall",
    year: "2020",
    semesterCode: "F20",
    grades: ["A", "A", "A-", "A"]
  },
  {
    semester: "Winter",
    year: "2020",
    semesterCode: "W20",
    grades: ["B", "A-", "B", "C"]
  }
];

function lookupGrade(grade) {
  let points = 0;
  //   if( grade === 'A') {
  //       points = 4;
  //   } else if( grade === 'B') {
  //       points = 3;
  //   }
  switch (grade) {
    case "A":
      points = 4;
      break;
    case "A-":
      points = 3.7;
      break;
    case "B":
      points = 3;
      break;
    case "C":
      points = 2;
      break;
    case "D":
      points = 1;
      break;
  }
  return points;
}

// this will need to be re-worked as we refactor...we may end up just starting over if it changes too much
function calculateGpa() {
  setGrades();
  let gradePoints = grades.map((grade) => lookupGrade(grade));
  const gpa =
    gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa;
}

// since we have more than one function we need to expose outside the module now...lets encapsulate them in an object. The calculateGpa function will become a method inside of it.
const gpaCalculator = {
  // returns information about the semesters represented in the transcript
  getSemesterInfo: function () {
    // this should interate through the transcript and transform the data into this form: { label: "Fall 2020", value: "F20"}
  },
  // calculates GPA for each semester in the transcript.
  calculateGpa: function () {
    // loop through the transcript, you will want to get the index as well as the current value
    // get the current record in the transcript...we will insert the gpaPoints and gpa into it.
    // do the lookup for each grade in the current record to convert to gpa points
    // with the gpa points calculate the gpa and store it in the current record
  },
  // After the GPA has been calculated we can retrieve it for all semesters or one semester.
  getGpaInfo: function (semester) {
    //check to see if they want all semesters...
    // if so then return the whole transcript
    // otherwise just give them the one they requested...(filter the transcript array!)
  }
};
export default gpaCalculator;
