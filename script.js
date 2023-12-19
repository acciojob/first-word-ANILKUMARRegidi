 function firstWord(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        str += item;
        if (item === ' ') {
            break;
        }
    }
    return str; // Trim to remove leading/trailing spaces
}

// Do not change the code below.
//const s = prompt("Enter String:");
alert(firstWord(s));
