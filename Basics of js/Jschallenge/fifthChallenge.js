var johnTips = {
    fullName:"Jhon Smith",
    bills:[
        124, 48, 268, 180, 42
    ],
    calcTip:function(){
        this.tipArray= [];
        this.finalArray = [];
        for( var i=0; i< this.bills.length; i++){
            var bill = this.bills[i]
            var tip;
            if(bill< 50){
                tip = bill * (20/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip);
            }else if (bill >= 50 && bill < 200){
                tip = bill * (15/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip);
            }else{
                tip = bill *(10/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip);
            }
            this.tipArray[i] = tip;
            this.finalArray[i] = tip+ bill;
        }
    }
}
johnTips.calcTip();
// console.log(johnTips)
var markTips = {
    fullName:"Mark Miller",
    bills:[
        77, 475, 110, 45
    ],
    calcTips: function(){
        this.tipArray=[];
        this.finalBillArray=[];
        for(var i=0; i<this.bills.length;i++){
            var bill = this.bills[i];
            var tip;
            if(bill < 100){
                tip = bill *(20/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip); 
            }else if(bill >= 100 && bill <300){
                tip = bill * (10/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip);
            }else{
                tip = bill * ( 25/100);
                // console.log("the tip of bill "+ bill + "and tip is "+ tip);
            }
            this.tipArray[i] = tip;
            this.finalBillArray[i] = tip+bill;
        }

    }
}
markTips.calcTips();
// console.log(markTips)

function averageTip(){
    console.log(johnTips);
    console.log(markTips);
    var averageJohn =0; var totalJohn =0;
    var averageMary =0; var totalMary =0;
    for(var i =0 ; i < johnTips.tipArray.length; i++){
        var tip = johnTips.tipArray[i];
        totalJohn += tip; 
    }
    averageJohn = totalJohn/johnTips.tipArray.length;
    console.log(averageJohn);
    for(var i =0 ; i < markTips.tipArray.length; i++){
        var tip = markTips.tipArray[i];
        totalMary += tip;
    }
    averageMary = totalMary/markTips.tipArray.length;
    console.log(averageMary);
    if(averageMary>averageJohn){
        console.log("Mary Family Paid the heighest Average tip")
    }else{
        console.log("John Family paid the heighest Average tip")
    }
}
averageTip();