const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function deepCount(arr) {
    let count = 0;

    for (const element of arr) {
        count++;
        if (Array.isArray(element)) {
            count += deepCount(element);
        }
    }

    return count;
}
