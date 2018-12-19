function calculateAge(birthYear) {
  return 2018 - birthYear;
}

//console.log(calculateAge(1996))
var result = calculateAge(1996);

console.log(result);

function retireyear(birth, firstName) {
  var age = calculateAge(birth);
  var retirment = 70 - age;

  //    console.log(retirment, firstName);
  if (retirment > age) {
    console.log();
  }
}

retireyear(1996, "umair ");
retireyear(1947, "sumair ");
retireyear(1964, "umar ");
