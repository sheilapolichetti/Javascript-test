
/* Case 1 //

calculate the area of the triangles
const areaValue = (baseValue * heightValue) / 2;

Then compare the areas using if/else to find out which one has the biggest area
*/

const triangleOne = (10 * 13) / 2;
const triangleTwo = (16.5 * 20.3) / 2

const isBigger = triangleOne >= triangleTwo;

if (isBigger) {
    console.log("triangleOne has a bigger/equal area than/as triangleTwo")
} else {
    console.log("triangleTwo has a bigger area than triangleOne")
}

//Case two

const triangleThree = (16.5 * 13) / 2;
const triangleFour = (20.3 * 16.5) / 2;

const biggerArea = triangleThree >= triangleFour;

if (biggerArea) {
    console.log("triangleThree has a bigger area than triangleFour")
} else {
    console.log("triangleFour has a bigger/as big area as triangleThree")
};

// Case three 

const triangleFive = (7.8 * 5.6) / 2;
const triangleSix = (9.3 * 12.4) / 2;

const areaBigger = triangleFive >= triangleSix;

if (areaBigger) {
    console.log("triangleFive has a bigger/equal area than/as triangleSix")
} else {
    console.log("triangleSix has a bigger area than triangleFive")
};