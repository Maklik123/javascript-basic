var johnBMI, markBMI , johnMass, markMass, markHeight, johnHeight
johnMass = 60
johnHeight = 1.8
markMass = 80
markHeight = 2

johnBMI = johnMass / (johnHeight * johnHeight);

markBMI = markMass / (markHeight* markHeight);

console.log(johnBMI)
console.log(markBMI)

var heigherBMI = markBMI > johnBMI;
console.log(heigherBMI);

console.log("Is Mark's BMI is heigher than John's?" + heigherBMI)

