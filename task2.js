let myName = 'Helamã Y. Barbour';

let date = new Date();

let favFood = [
    "Hamburguer",
    "nhoque",
    "chili",
    "Garlic Bread",
    "Chocolat",
    "Churros",
]

const nameParagraph = document.createElement('div');
nameParagraph.innerHTML = '<h1 id=name><span id=myname></span></h1>';
document.body.appendChild(nameParagraph);

document.getElementById('myname').textContent = myName;

const currentYear = document.createElement('p');
currentYear.innerHTML = 'Current Year: <span id=year></span>';
document.body.appendChild(currentYear);

const myImage = document.createElement('img');
myImage.setAttribute('src', '');
myImage.setAttribute('alt', 'Image of Author');
document.body.appendChild(myImage);

document.getElementById('year').textContent = date.getFullYear();
