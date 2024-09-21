function flattenMap(map) {
    let flattenedMap = {};

    function flattenRecursive(map, prefix = "") {
        for (let [key, value] of Object.entries(map)) {
            let newPrefix = prefix ? prefix + key + "/" : key + "/";
            
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                flattenRecursive(value, newPrefix);
            } else {
                flattenedMap[newPrefix.slice(0, -1)] = value;
            }
        }
    }

    flattenRecursive(map);
    return flattenedMap;
}

// Test case
const testMap = {
    a: {
        b: {
            c: 12,
            d: "Hello World"
        },
        e: [1, 2, 3]
    }
};

// Expected flattened structure
const expectedOutput = {
    'a/b/c': 12,
    'a/b/d': 'Hello World',
    'a/e': [1, 2, 3]
};

const actualOutput = flattenMap(testMap);

const assert = require('assert');

// Ensure deep equality
assert.deepEqual(actualOutput, expectedOutput);

console.log("Test passed!");
