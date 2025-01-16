function findMissingLetter(array) {
    a = array.join('')
    for (let i = 0; i <= a.length; i++) {
        if ((a.charCodeAt(i+1) - a.charCodeAt(i))>1) {
            return String.fromCharCode(a.charCodeAt(i)+1)
        }
    }
}