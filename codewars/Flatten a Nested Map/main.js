function flattenMap(map) {
    var res = {};
    function recurse(current, sv) {
        if (Object(current) !== current || Array.isArray(current)) {
            return res[sv] = current;
        }
        for (var p in current) {
            recurse(current[p], sv ? sv + "/" + p : p);
        }
    }
    recurse(map, "");
    return res;
}