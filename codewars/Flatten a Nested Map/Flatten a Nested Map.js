function flattenMap(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}/${key}` : key; 
            const value = obj[key];
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                flattenMap(value, newKey, result);
            } else {
                result[newKey] = value;
            }
        }
    }
    return result;
}
