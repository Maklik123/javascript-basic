//In this we will study about variable mutation of type coercion
//Type Coercion
var firstName = "Umair"; //Here the variable firstname has a string value
var age = 23; //Here the variable age has number value

console.log(firstName + " " + age);
//Type Coercion automaticely convert data type from one datatype to another datatype. in this case it convert the age's dataType from Number to String.

var job, ismarried;

job = "student";
ismarried = false;
console.log(
  firstName +
    " is " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    ismarried
);
//Variable Mutation
//variable mutation is changing the value of a variable. like job is defined first student and now is engineer

job = "engineer";
ismarried = true;
var result =
  firstName +
  " is " +
  age +
  " year old " +
  job +
  ". Is he married? " +
  ismarried;
console.log(result);
console.log(typeof result);
