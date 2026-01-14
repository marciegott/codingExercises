/*
14. Celsius Label
Signature: `labelTempF(f)`
Goal: Use your `toCelsius` to return `"20.0°C (comfortable)"` if between 18–25, otherwise `"X°C"`. 
*/

function toCelsius(fahrenheit) {
    const temperature = ((fahrenheit - 32) * 5 / 9).toFixed(1);
    return temperature;
}

function labelTempF(f) {
    temperature = toCelsius(f);

    if (temperature <= 25.0 && temperature >= 18) {
        return `${temperature}ºC - comfortable`;
    } else {
        return `${temperature}ºC`;
    }
}

console.log(labelTempF(68));
console.log(labelTempF(14));