/* 
**Signature:** `greetWith(title, name = "friend")`

**Goal:** Return `"Good <title>, <name>!"`. `name` defaults to `"friend"`.*/

function greetWith(title, name = 'friend') {
    return `Good ${title}, ${name}`;
}

console.log(greetWith('morning', 'Sarah'));
console.log(greetWith('afternoon'));