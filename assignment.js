//Area of a triangle where lengths of the three of its sides are 5, 6, 7
var s1 = 5;
var s2 = 6;
var s3 = 7;

var allSides = (s1 + s2 + s3)/2;
var area = Math.sqrt(allSides * (allSides - s1) * (allSides - s2) * (allSides - s3));
console.log(area);



//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative
const positive = (a,b) => {
    if (a > 0 && b < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(positive(5, -3));



//Write a JavaScript program that accept two integers and display the larger
const larger = (a,b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(larger(5, 40));



//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"


for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}