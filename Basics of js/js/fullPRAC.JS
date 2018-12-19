// var bar = "baz";
// console.log(bar);
// bar.toUpperCase();
// console.log(bar);

// var age;
var score = 100;
function game() {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5);
}
game();
console.log(score);
(function() {
  let score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5);
})();

console.log(score);
