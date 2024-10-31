function toCamelCase(str){
    return str.replace(/[-_]\w/ig, (str) => {
        return str[1].toUpperCase()
    })
}
