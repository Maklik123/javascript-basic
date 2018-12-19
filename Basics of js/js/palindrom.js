var array = ["ada", "develeved", "cat"];
var tempData = [];
function palindrom(array) {
  for (var i in array) {
    PalindromCheck(array[i]);
  }
}

palindrom(array);

function PalindromCheck(toCheckValue) {
  const word = toCheckValue.toLowerCase();
  let backward = [];
  let count = 0;
  for (var i = word.length - 1; i >= 0; i--) {
    backward.push(word[i]);
  }
  for (var j = 0; j < word.length; j++) {
    if (backward[j] === word[j]) {
      count = 1;
    } else {
      count = 0;
    }
  }
  if (count === 1) {
    console.log(word + " Is palindrom");
  } else {
    console.log(word + " Is not palindrom");
  }
}
