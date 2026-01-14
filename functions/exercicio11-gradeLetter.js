/*
Signature:gradeLetter(score)
Goal: Return `"A"`, `"B"`, `"C"`, `"D"`, or `"F"` based on score (0–100). Decide your cutoffs (e.g., 90+ is A).
gradeLetter(92); // "A"
gradeLetter(73); // "C" (if 70–79 is C)
*/

function gradeLetter(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log(gradeLetter(92));
console.log(gradeLetter(73));
console.log(gradeLetter(54));