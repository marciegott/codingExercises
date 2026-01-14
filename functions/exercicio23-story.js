/* Signature:** `story(name, place, activity)`

**Goal:** Return a single sentence that uses `titleCase` for `name` and `place`. E.g., `"Ada went to Paris to read."`

story("ada", "paris", "read"); // "Ada went to Paris to read."
*/


function titleCase(word) {
    const firstLetter = word.at(0).toUpperCase();
    const rest = word.slice(1, word.length).toLowerCase();
    const fullText = firstLetter + rest;
    return fullText;
}

function story(name, place, activity) {
    const nameC = titleCase(name);
    const placeC = titleCase(place);
    return `${nameC} went to ${placeC} to ${activity}.`;
}

console.log(story('marcie', 'london', 'see McFly'));
console.log(story('emily', 'paris', 'eat croissants'));