import { qs, setListener, alertMessage, buildElements } from "./ui.js";
import gpaCalculator from "./gpa.js";

// build semester drop down based off of transcript data.
const semesters = [{ label: 'Fall 2020', value: 'F20' }, { label: 'winter 2021', value: 'W21' }];
buildElements.select(semesters, "#semester");

const gpa = [{ semester: 'Fall', year: '2020', gpa: 3.42 }, { semester: 'Winter', year: '2021', gpa: 3.6 }]
buildElements.gpaTable(gpa, "#output");
// event handler callback for our submit button
function submit() {
  // get select element so we can see which option was selected.
  const selectEl = qs("#semester");
  // how do we know which option was selected?
  console.dir(selectEl);
  // calculate the gpa

  // get the gpa info from our module for the specified semester

  // display our data in a table.
}

setListener("#submitButton", "click", submit);
