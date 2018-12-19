var bills = [124, 48, 268];
var tip = [];
var finalBill = [];

function getPushArray(tips, billFinal) {
  tip.push(tips);
  finalBill.push(billFinal);
}

function toTip(bill) {
  if (bill < 50) {
    //        var t = (bill * 20)/100;
    var t = bill * (20 / 100);
    //        console.log(t);
    //        tip.push(t);
    var f = t + bill;
    getPushArray(t, f);
    //        finalBill.push(f)
  }
  if (bill >= 50 && bill < 200) {
    var t = bill * (15 / 100);
    var f = t + bill;
    getPushArray(t, f);
    //        console.log(t)
    //        tip.push(t);
  }
  if (bill > 200) {
    var t = bill * (10 / 100);
    var f = t + bill;
    getPushArray(t, f);
    //        console.log(t);
    //        tip.push(t);
  }
}
//console.log(tip);

toTip(124);
toTip(48);
toTip(268);
//toTip(90);

console.log("Tips  " + tip);
console.log("FinalBill  " + finalBill);
