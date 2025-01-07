function flattenaNestMap(map, keys = '', res = {}) {
    let temp_massiv_map = Object.keys(map);

    if (temp_massiv_map.length === 0) {
        return res;
    }

    for (let i = 0; i < temp_massiv_map.length; i++) {
        let key = temp_massiv_map[i];
        let newKey = keys ? `${keys}/${key}` : key;

        if (typeof map[key] === 'object' && map[key] !== null && !Array.isArray(map[key])) {
            flattenaNestMap(map[key], newKey, res);
        } else {
            res[newKey] = map[key];
        }
    }

    return res;
}

let mops = {
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1, 2, 3]
    }
};

let result = flattenaNestMap(mops);
console.log(result);