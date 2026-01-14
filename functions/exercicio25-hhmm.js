/***Signature:** `hhmm(hours, minutes)`

**Goal:** Return `"HH:MM"` with zero-padding (no loops).*/

function hhmm(hours, minutes) {
    const hoursStr = hours.toString().padStart(2, 0);
    const minutesStr = minutes.toString().padStart(2, 0);
    return `${hoursStr}:${minutesStr}`;
}

console.log(hhmm(9, 5));
console.log(hhmm(9, 16));
console.log(hhmm(7, 3));

