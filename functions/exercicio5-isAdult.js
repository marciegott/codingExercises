/***Signature:** `isAdult(age)`

**Goal:** Return `true` if `age >= 18`, else `false`.

```jsx
isAdult(21); // true
isAdult(16); // false */

function isAdult(age) {
    if (age >= 18) {
        return `with ${age} you're an adult`;
    } else {
        return `with ${age} you aren't an adult!`;
    }
}

console.log(isAdult(17));
console.log(isAdult(67));
