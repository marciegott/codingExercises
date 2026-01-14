/*### 3. Temperature Converter

**Signature:** `toCelsius(fahrenheit)`

**Goal:** Convert °F to °C, rounded to 1 decimal. Formula: `(F - 32) * 5/9` */

function toCelsius(fahrenheit) {
    const temperature = ((fahrenheit - 32) * 5 / 9).toFixed(1);
    return temperature;
}

console.log(`${toCelsius(10)}ºC`);
console.log(`${toCelsius(1)}ºC`);
console.log(`${toCelsius(200)}ºC`);
