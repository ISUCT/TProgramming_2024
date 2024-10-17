function toCamelCase(str){
    const n = /[-_]\w/ig;;
    return str.replace(n, (word) => {
        return word[1].toUpperCase()
    })
}
