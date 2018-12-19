var johnObject = {
  fullName: "John",
  mass: 32,
  height: 1.8,
  johnBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};
var maryObject = {
  fullName: "Mary",
  mass: 12,
  height: 1.8,
  maryBmi: function() {
    this.bmi = this.mass / (this.height * this.height);
  }
};
console.log(johnObject);
johnObject.johnBmi();
console.log(maryObject);
maryObject.maryBmi();

if (johnObject.bmi === maryObject.bmi) {
  console.log(
    "John Bmi " + johnObject.bmi + " is equal to Mary Bmi i-e " + maryObject.bmi
  );
} else if (johnObject.bmi > maryObject.bmi) {
  console.log(
    "John Bmi " +
      johnObject.bmi +
      " is greater to Mary Bmi i-e " +
      maryObject.bmi
  );
} else {
  console.log(
    "Mary Bmi " +
      maryObject.bmi +
      " is greater to john Bmi i-e " +
      johnObject.bmi
  );
}
