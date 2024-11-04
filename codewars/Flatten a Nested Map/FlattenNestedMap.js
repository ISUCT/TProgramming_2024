function flattenMap(obj) {
    let answer = {};
    function recurse(el, x) {
        if (Object(el) !== el || Array.isArray(el)) {
            return answer[x] = el;
        }
        for (let i in el) {
            recurse(el[i], x ? x + "/" + i : i);
        }
    }
    recurse(obj, "");
    return answer;
}
