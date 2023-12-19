 function firstWord(s) {
    let str = '';
    let spaceFound = false;

    for (let i = 0; i < s.length; i++) {
        const item = s[i];

        if (item === ' ' && !spaceFound) {
            spaceFound = true; // Mark the first space
        } else if (item !== ' ') {
            str += item; // Append characters until another space is found
        } else {
            break; // Stop if we encounter a space after the first word
        }
    }

    return str.trim() || s; // Trim to remove leading/trailing spaces
}

// Do not change the code below.
const s = prompt("Enter String:");
alert(firstWord(s));
