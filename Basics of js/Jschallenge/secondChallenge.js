var johnScored1, johnScored2, johnScored3;
var mikeScored1, mikeScored2, mikeScored3;
var maryScored1, maryScored2, maryScored3;

johnScored1 = 89;
johnScored2 = 120;
johnScored3 = 103;
//mikeScored1 = 116; mikeScored2= 100; mikeScored3=123;
mikeScored1 = 89;
mikeScored2 = 120;
mikeScored3 = 103;
//johnScored1 = 116; johnScored2= 94; johnScored3=123;//  for draw
//johnScored1 = 132; johnScored2= 122; johnScored3=232;

//maryScored1 = 97, maryScored2 = 134, maryScored3= 105;
(maryScored1 = 89), (maryScored2 = 120), (maryScored3 = 103);

var johnAverage = (johnScored1 + johnScored2 + johnScored3) / 3;
var mikeAverage = (mikeScored1 + mikeScored2 + mikeScored3) / 3;
var maryAverage = (maryScored1 + maryScored2 + maryScored3) / 3;

console.log(johnAverage);
console.log(mikeAverage);
console.log(maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log("JohnTeam Wins");
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log(" mike team wins");
} else if (
  mikeAverage === johnAverage &&
  mikeAverage === maryAverage &&
  johnAverage === maryAverage
) {
  console.log("Match is Draw");
} else {
  console.log("Mary Team WIns");
}
