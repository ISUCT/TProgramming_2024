function flattenMap(map, parentKey = '', sep = '/') {
    const result = {};

    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}${sep}${key}` : key;
            const value = map[key];

            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                Object.assign(result, flattenMap(value, newKey, sep));
            } else {
                result[newKey] = value;
            }
        }
    }

    return result;
}
