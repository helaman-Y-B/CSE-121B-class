// wrapper for getElementById...because I'm lazy ;)
export function qs(selector) {
  return document.querySelector(selector);
}

export function setHtml(selector, text) {
  qs(selector).innerHTML = text;
}

export function setListener(selector, event, callback) {
  qs(selector).addEventListener(event, callback);
}

export function alertMessage(message, duration = 3000) {
  const alert = document.createElement("p");
  alert.innerHTML = message;
  alert.setAttribute(
    "style",
    "background-color:lightpink; border: 1px solid red; position:absolute; top:0; left:0; right:0;padding: 1em;"
  );
  document.body.appendChild(alert);
  setTimeout(function () {
    document.body.removeChild(alert);
  }, duration);
}

// let's use an object to group together functions that generate specific HTML elements. then we can export them all together
export const buildElements = {
  // build an html table to display the gpa data
  gpaTable: function (data, selector) {
    // get the container we will insert the finished table into.
    const container = qs(selector);

    // create a new table element

    // for each row in our data create a row of markup using a template literal string ie `My name is ${name}`

    // add the markup into the table element

    // append the finished table into the container we selected above.
  },
  // populate a select element with the contents of the list.
  select: function (list, selector) {
    // get the <select> element from the DOM
    const selectEl = qs(selector);
    // loop through each item in our list, create an <option> element, set the value and innerHTML of the element and append it to the <select>
  }
};
