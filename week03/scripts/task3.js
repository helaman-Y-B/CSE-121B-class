/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {

    // Step 2: In the function, return the sum of the parameters number1 and number2

    sum = number1 + number2;
    return sum;
}


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
    let num1 = parseInt(document.getElementById('addend1').value);
    let num2 = parseInt(document.getElementById('addend2').value);
    let theSum = add(num1, num2);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = theSum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtr = function subtract(number1, number2) {
    sub = number1 - number2;
    return sub;
}

const subNumber1 = document.getElementById('minuend').textContent;
const subNumber2 = document.getElementById('subtrahend').textContent;

let getSubNum = function subtractNumbers() {
    let subNumber1 = document.getElementById('minuend').value;
    let subNumber2 = document.getElementById('subtrahend').value;
    let subAnswer = subtr(subNumber1, subNumber2);
    //document.querySelector('#difference').value = subAnswer;
}
document.querySelector('#difference').value = getSubNum;

document.getElementById('subtractNumbers').addEventListener('click', getSubNum);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const mult = (factor1, factor2) => { let multi = factor1 * factor2; return multi; };

const getNum = () => {
    const multNum1 = document.getElementById('factor1').value;
    const multNum2 = document.getElementById('factor2').value;
    let multfunction = mult(multNum2, multNum1); document.querySelector('#product').value = multfunction;
};

document.getElementById('multiplyNumbers').addEventListener('click', getNum);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
let div = function divide(dividend, divisor) {
    let division = dividend / divisor;
    return division;
}

let divNum = function getDivNum() {
    const divNum1 = document.getElementById('dividend').value;
    const divNum2 = document.getElementById('divisor').value;
    let division = div(divNum1, divNum2);
    document.querySelector('#quotient').value = division;
}

document.getElementById('divideNumbers').addEventListener('click', divNum);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let currentYear = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numberList;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odd = numberList.filter(oddNumber => oddNumber % 2 != 0);

document.querySelector('#odds').textContent = odd;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const even = numberList.filter(evenNumber => evenNumber % 2 == 0);

document.querySelector('#evens').textContent = even;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumFunction = (previousNumber, currentNumber) => previousNumber + currentNumber;

const suming = numberList.reduce(sumFunction);

document.querySelector('#sumOfArray').textContent = suming;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiNumber = numberList.map(function (number) {
    return number * 2;
})
document.querySelector('#multiplied').textContent = multiNumber;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumArrayTimeTwo = multiNumber.reduce(sumFunction);

document.querySelector('#sumOfMultiplied').textContent = sumArrayTimeTwo;