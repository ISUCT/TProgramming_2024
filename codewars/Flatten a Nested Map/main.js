function flattenMap(input) {
    const result = {};

    function flatten(current, prefix) {
        for (const [key, value] of Object.entries(current)) {
            const newKey = prefix ? `${prefix}/${key}` : key;

            if (
                value !== null &&
                typeof value === "object" &&
                !Array.isArray(value) &&
                typeof value !== "function"
            ) {
                flatten(value, newKey);
            } else {
                result[newKey] = value;
            }
        }
    }

    flatten(input, "");

    return result;
}