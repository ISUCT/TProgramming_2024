function flattenMap(map) {
    let result = {};
    function flatten(obj, parentKey = '') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = parentKey ? `${parentKey}/${key}` : key;

                if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
                    flatten(obj[key], newKey);
                } else {
                    result[newKey] = obj[key];
                }
            }
        }
    }

    flatten(map);
    return result;
}