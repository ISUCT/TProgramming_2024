function toCamelCase(str){
    let words = str.replaceAll('_','-').split('-')
    let result = []
    result.push(words[0])
    for (i=1;i<words.length;i++){
        let word = words[i].toString()
        word=word[0].toUpperCase()+word.slice(1)
        result.push(word)
    }
    return result.join('')
}