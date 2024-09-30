function findMissingLetter(chars) {
    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i].charCodeAt(0) + 1 !== chars[i + 1].charCodeAt(0)) {
            return String.fromCharCode(chars[i].charCodeAt(0) + 1);
        }
    }
}