/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo = {
    name: 'Brother Thayne'
};

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg'
};

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ]
};

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ],
    hobbies: [
        'Reading',
        'Fishing',
        'Camping'
    ]
};

// Step 6: Add another property named placesLived with a value of an empty array
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ],
    hobbies: [
        'Reading',
        'Fishing',
        'Camping'
    ],
    placesLived: []
};

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ],
    hobbies: [
        'Reading',
        'Fishing',
        'Camping'
    ],
    placesLived: [
        {
            place: '',
            length: ''
        }
    ]
};

// Step 8: For each property, add appropriate values as strings
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ],
    hobbies: [
        'Reading',
        'Fishing',
        'Camping'
    ],
    placesLived: [
        {
            place: 'Rexburg, ID',
            length: '5 years'
        }
    ]
};

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo = {
    name: 'Brother Thayne',
    photo: 'images/photo.jpg',
    favoriteFoods: [
        'Fettucini',
        'Steak',
        'Chicken',
        'Shrimp',
        'Baked Potato'
    ],
    hobbies: [
        'Reading',
        'Fishing',
        'Camping'
    ],
    placesLived: [
        {
            place: 'Rexburg, ID',
            length: '5 years'
        },
        {
            place: 'Ammon, ID',
            length: '3 years'
        },
        {
            place: 'Sandy, UT',
            length: '1 year'
        }
    ]
};


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', myInfo.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myInfo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement('li');
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement('li');
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement('li');
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement('li');
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorite-foods').appendChild(favoriteFood1);
document.querySelector('#favorite-foods').appendChild(favoriteFood2);
document.querySelector('#favorite-foods').appendChild(favoriteFood3);
document.querySelector('#favorite-foods').appendChild(favoriteFood4);

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobby1 = document.createElement('li');
hobby1.textContent = myInfo.hobbies[0];

let hobby2 = document.createElement('li');
hobby2.textContent = myInfo.hobbies[1];

let hobby3 = document.createElement('li');
hobby3.textContent = myInfo.hobbies[2];

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector('#hobbies').appendChild(hobby1);
document.querySelector('#hobbies').appendChild(hobby2);
document.querySelector('#hobbies').appendChild(hobby3);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placesLivedPlace1 = document.createElement('dt');
placesLivedPlace1.textContent = myInfo.placesLived[0].place;

let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = myInfo.placesLived[0].length;

let placesLivedPlace2 = document.createElement('dt');
placesLivedPlace2.textContent = myInfo.placesLived[1].place;

let placesLivedLength2 = document.createElement('dd');
placesLivedLength2.textContent = myInfo.placesLived[1].length;

let placesLivedPlace3 = document.createElement('dt');
placesLivedPlace3.textContent = myInfo.placesLived[2].place;

let placesLivedLength3 = document.createElement('dd');
placesLivedLength3.textContent = myInfo.placesLived[2].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').appendChild(placesLivedPlace1);
document.querySelector('#places-lived').appendChild(placesLivedLength1);
document.querySelector('#places-lived').appendChild(placesLivedPlace2);
document.querySelector('#places-lived').appendChild(placesLivedLength2);
document.querySelector('#places-lived').appendChild(placesLivedPlace3);
document.querySelector('#places-lived').appendChild(placesLivedLength3);
