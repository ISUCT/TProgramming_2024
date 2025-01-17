function toCamelCase(text) {
    if (text.length === 0) {
        return text;
    } else {
        let textArray = text.split('');
        for (let i = textArray.length; i >= 0; i--) {
            if (textArray[i] === '-' || textArray[i] === '_') {
                textArray[i + 1] = textArray[i + 1].toUpperCase();
                textArray.splice(i, 1);
            }
        }
        return textArray.join('');
    }
}