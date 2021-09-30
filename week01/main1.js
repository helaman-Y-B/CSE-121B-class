const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * PI;
console.log(area);

const sumRadius = radius + 1;
let secondArea = radiusCalc(sumRadius, PI);

function radiusCalc(radius, PI) {
    let area = 0;
    area = radius * radius * PI;
    return area;
}
console.log(secondArea);
