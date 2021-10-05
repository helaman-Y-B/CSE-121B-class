//sorting an array 
let fruit = ['banana', 'apple', 'orange'];

fruit.sort();
console.log(fruit);

//now it's an array of objects 
let autos = [
    { name: 'Porche', color: 'red', top_speed: '120mph' },
    { name: 'Bentley', color: 'green', top_speed: '110mph' },
    { name: 'Jeep', color: 'blue', top_speed: '100mph' }
];

//now the sort method needs a callback function which takes 2 parameters 
//so first the 1st and 2nd items are sent in as a and b 
//-1, 1 and 0 tell it the sort order precedence 
//we need to let it know which property to sort we used .name 
//try a.color and b.color 
function obj_sort(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    };
};

autos.sort(obj_sort);

console.log(autos);