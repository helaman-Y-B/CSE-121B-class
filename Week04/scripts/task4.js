/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let mySelf = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string
mySelf = {
    name: "Helamã Barbour"
}

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png"
}

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ]
}

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ],
    hobbies: [
        "Play video games",
        "Study programming",
        "Cook"
    ]
}

// Step 6: Add another property named placesLived with a value of an empty array
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ],
    hobbies: [
        "Play video games",
        "Study programming",
        "Cook"
    ],
    placesLived: [],
}

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ],
    hobbies: [
        "Play video games",
        "Study programming",
        "Cook"
    ],
    placesLived: [
        place = "",
        length = ""
    ],
}

// Step 8: For each property, add appropriate values as strings
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.png",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ],
    hobbies: [
        "Play video games",
        "Study programming",
        "Cook"
    ],
    placesLived: [
        {
            place: "Canada",
            length: "2 Years"
        }
    ],
}

// Step 9: Add additional objects with the same properties for each place you've lived
mySelf = {
    name: "Helamã Barbour",
    photo: "images/download.jpg",
    favoriteFoods: [
        "hamburguer",
        "pizza",
        "Carrot cake",
        "Lasagna",
        "Pão de queijo"
    ],
    hobbies: [
        "Play video games",
        "Do some programming",
        "Cook"
    ],
    placesLived: [
        {
            place: "Canada",
            length: "2 Years"
        },
        {
            place: "Brazil",
            length: "16 Years"
        }
    ]
}


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = mySelf.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("src", `${mySelf.photo}`);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").setAttribute("alt", `${mySelf.name}`);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let food1 = document.createElement("li");
food1.textContent = mySelf.favoriteFoods[0];

let food2 = document.createElement("li");
food2.textContent = mySelf.favoriteFoods[1];

let food3 = document.createElement("li");
food3.textContent = mySelf.favoriteFoods[2];

let food4 = document.createElement("li");
food4.textContent = mySelf.favoriteFoods[3];

let food5 = document.createElement("li");
food5.textContent = mySelf.favoriteFoods[4];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.getElementById("favorite-foods").appendChild(food1);
document.getElementById("favorite-foods").appendChild(food2);
document.getElementById("favorite-foods").appendChild(food3);
document.getElementById("favorite-foods").appendChild(food4);
document.getElementById("favorite-foods").appendChild(food5);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbi1 = document.createElement("li");
hobbi1.textContent = mySelf.hobbies[0];

let hobbi2 = document.createElement("li");
hobbi2.textContent = mySelf.hobbies[1];

let hobbi3 = document.createElement("li");
hobbi3.textContent = mySelf.hobbies[2];


// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.getElementById("hobbies").appendChild(hobbi1);
document.getElementById("hobbies").appendChild(hobbi2);
document.getElementById("hobbies").appendChild(hobbi3);


// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placeLived1 = document.createElement("dt");
placeLived1.textContent = mySelf.placesLived[0].place;

let lengthLived1 = document.createElement("dd");
lengthLived1.textContent = mySelf.placesLived[0].length;

let placeLived2 = document.createElement("dt");
placeLived2.textContent = mySelf.placesLived[1].place;

let lengthLived2 = document.createElement("dd");
lengthLived2.textContent = mySelf.placesLived[1].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.getElementById("places-lived").appendChild(placeLived1);
document.getElementById("places-lived").appendChild(lengthLived1);

document.getElementById("places-lived").appendChild(placeLived2);
document.getElementById("places-lived").appendChild(lengthLived2);