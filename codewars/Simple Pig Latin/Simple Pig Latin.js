function pigIt(str){
    let camel = str.split(' ')
    let result = []
    for (i=0;i<camel.length;i++){
        if (camel[i]==='!' || camel[i]==='?'){
            result.push(camel[i])
        } else {
        let word = camel[i].split('')
        word.push(word.shift(),'ay')
        result.push(word.join(''))
        }
    }
    return result.join(' ')
}