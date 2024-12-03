function pigIt(sentence) {
    const suffix = "ay";
    return sentence.split(" ").map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            return word.slice(1) + word[0] + suffix;
        }
        return word;
    }).join(" ");
}