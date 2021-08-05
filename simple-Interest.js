// Interest per months

function interestPerMonth(principal, rateOfInterest, time) {
    var simpleInterest = (principal * rateOfInterest * time) / 100;
    return simpleInterest;
}




var myMonthlyInterest = interestPerMonth(100000, 8, 1);
console.log(myMonthlyInterest);








// SI= P x R x T ÷ 100,
// where P = Principal,
// R = Rate of Interest,
// T = Time Period of the Loan/deposit in years,
// SI= Simple Interest

