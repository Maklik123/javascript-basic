var now, yearJohn, yearMark;
now = 2018;
yearJohn = 1996;
yearMark = 1992;
var ageJohn = now - yearJohn;
var ageMark = now - yearMark;

var average = (ageJohn + ageMark) / 2;

console.log(average);

//Multiple Assignments
var c;
var x = (4 + 5) * 4 + 32;
var y = (c = (4 + 2) / 4 + 3);

console.log(c);

var z = (x + y) / x + y * 4;
console.log(x);
console.log(y);
console.log(z);
