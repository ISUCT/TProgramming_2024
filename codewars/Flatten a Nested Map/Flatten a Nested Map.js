function flattenMap(input) {
    const result = {};
    function traverse(current, path) {
        for (const key in current) {
            const newPath = path ? `${path}/${key}` : key;
            const value = current[key];
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                traverse(value, newPath);
            } else {
                result[newPath] = value;
            }}}
    traverse(input, '');
    return result;
}