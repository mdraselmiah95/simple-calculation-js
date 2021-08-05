///////////////////  Celsius To Fahrenheit   //////////////////////////

function celsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

var toDayFahrenheit = celsiusToFahrenheit(33);
console.log(toDayFahrenheit);