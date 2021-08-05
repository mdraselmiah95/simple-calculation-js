// Interest per months

function interestPerMonth(principal, rateOfInterest, time) {
    var simpleInterest = (principal * rateOfInterest * time) / 100;
    return simpleInterest;
}




var myMonthlyInterest = interestPerMonth(100000, 8, 1);
console.log(myMonthlyInterest);










