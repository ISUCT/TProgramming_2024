function flattenMap(map) {
    function remake(obj, key, res) {
        for (let k in obj) {
            let newKey =  key ? `${key}/${k}` : k;
            if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
                remake(obj[k], newKey, res);
            } else {
                a[newKey] = obj[k];
            }
        }
    }
    let a = {};
    remake(map, '', a);
    return a;
}