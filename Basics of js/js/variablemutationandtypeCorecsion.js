//In this we will study about variable mutation of type coercion
//Type Coercion
var firstName = "Umair" //Here i declare a string
var age= 23 //Here i decalre a Number

console.log(firstName+ ' '+ age)
//Type Coercion automaticely convert data type from one datatype to another datatype. 

var job, ismarried;

job= "student"
ismarried = false;
console.log(firstName+ ' is '+age+' year old '+ job+'. Is he married? '+ismarried  );
//Variable Mutation 
//variable mutation is changing the value of a variable like

job = "engineer"
ismarried = true;
var result = firstName+ ' is '+age+' year old '+ job+'. Is he married? '+ismarried
console.log( result );
console.log(typeof result)