function flattenMap(input) {
  // Initialize the result object
  const result = {};

  // Recursive helper function
  function flatten(current, prefix) {
    for (const [key, value] of Object.entries(current)) {
      const newKey = prefix ? `${prefix}/${key}` : key; // Create the new key with prefix

      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        typeof value !== "function"
      ) {
        // If the value is an object (but not null, array, or function), recurse
        flatten(value, newKey);
      } else {
        // Otherwise, assign the value directly to the result
        result[newKey] = value;
      }
    }
  }

  // Start the flattening process with the initial input
  flatten(input, "");

  return result;
}
