const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function findMissingLetter(array) {
    let NachaloPoiska = Alphabet.indexOf(array[0]);
    if (NachaloPoiska != -1) {
        for (let i = NachaloPoiska; i <= array.length + NachaloPoiska; i++) {
            if (array[i - NachaloPoiska] != Alphabet[i]) {
                return Alphabet[i];
            }
        }
    } else {
        for (let i = alphabet.indexOf(array[0]); i <= array.length + alphabet.indexOf(array[0]); i++) {
            if (array[i - alphabet.indexOf(array[0])] != alphabet[i]) {
                return alphabet[i];
            }
        }
    }
}
