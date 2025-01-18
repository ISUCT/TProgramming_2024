function flattenMap(object) {
    function iter(part, keys) {
        Object.keys(part).forEach(function (k) {
            if (part[k] !== null && !Array.isArray(part[k]) && typeof part[k] === 'object') {
                return iter(part[k], keys.concat(k));
            }
            flat[keys.concat(k).join('/')] = part[k];
        });
    }
    var flat = {};
    iter(object, []);
    return flat;
}