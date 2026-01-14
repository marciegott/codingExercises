/*
**Signature:** `slugifyTitle(title)`

**Goal:** Lowercase, trim spaces at both ends, replace inner spaces with `-`. 

jsx slugifyTitle("  Hello JS World  "); // "hello-js-world" */

function slugifyTitle(title) {
    const frase = title.trim().toLowerCase().replaceAll(" ", "-");
    return frase;
}

console.log(slugifyTitle("    Marcie Icaro e Tino    "));
console.log(slugifyTitle("       Princess CAMP    "));