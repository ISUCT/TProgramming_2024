function toCamelCase(str) {
    const parts = str.replace(/_/g, '-').split('-'); 
    let result = [parts[0]];

    for (let i = 1; i < parts.length; i++) {
        result.push(parts[i][0].toUpperCase()); 
        result.push(parts[i].slice(1)); 
    }

    return result.join(''); 
}