
///////////////////   Fahrenheit To Celsius   //////////////////////////

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

var toDayCelsius = fahrenheitToCelsius(80);
console.log(toDayCelsius);