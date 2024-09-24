function flattenMap(map) {
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur || Array.isArray(cur)) {
            return result[prop] = cur;
        }
        for (var p in cur) {
            recurse(cur[p], prop ? prop + "/" + p : p);
        }
    }
    recurse(map, "");
    return result;
}